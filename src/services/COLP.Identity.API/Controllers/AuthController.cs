using COLP.Core.Controllers;
using COLP.Core.Messages.Integration;
using COLP.Identity.API.DTOs;
using COLP.Identity.API.Models;
using COLP.MessageBus;
using COLP.WebAPI.Core.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace COLP.Identity.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : MainController
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly AppSettings _appSettings;
        private readonly IMessageBus _bus;

        public AuthController(SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager, IOptions<AppSettings> appSettings, IMessageBus bus)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _roleManager = roleManager;
            _appSettings = appSettings.Value;
            _bus = bus;
        }


        [HttpPost("register")]
        public async Task<ActionResult> Register(UserRegisterDto userRegister)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            var user = new IdentityUser
            {
                UserName = userRegister.Email,
                Email = userRegister.Email,
                EmailConfirmed = true,
                PasswordHash = userRegister.Password
            };

            var result = await _userManager.CreateAsync(user, userRegister.Password);

            if (result.Succeeded)
            {
                var userResult = await RegisterColporteur(userRegister);

                if (!userResult.ValidationResult.IsValid)
                {
                    await _userManager.DeleteAsync(user);
                    return CustomResponse(userResult.ValidationResult);
                }

                await _userManager.AddToRoleAsync(user, "Leader");

                return CustomResponse(await GenerateToken(userRegister.Email!));
            }

            foreach (var error in result.Errors)
            {
                AddProcessmentError(error.Description);
            }

            return CustomResponse();
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(UserLoginViewModel userLogin)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            var result = await _signInManager.PasswordSignInAsync(userLogin.Email, userLogin.Password, false, true);

            if (result.Succeeded)
            {
                return CustomResponse(await GenerateToken(userLogin.Email!));
            }

            if (result.IsLockedOut)
            {
                AddProcessmentError("Usuário temporariamente bloqueado por tentativas inválidas.");
                return CustomResponse();
            }

            AddProcessmentError("Usuário ou senha incorretos");
            return CustomResponse();
        }

        #region Private Methods
        private async Task<UserResponseLogin> GenerateToken(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            var role = await _userManager.GetRolesAsync(user);
            var claims = await _userManager.GetClaimsAsync(user);

            var identityClaims = GetUserClaims(claims, user);
            var encodedToken = EncodeCode(identityClaims);

            return await GetTokenResponse(encodedToken, user, claims, role);
        }

        private ClaimsIdentity GetUserClaims(ICollection<Claim> claims, IdentityUser user)
        {
            claims.Add(new Claim(JwtRegisteredClaimNames.Sub, user.Id));
            claims.Add(new Claim(JwtRegisteredClaimNames.Email, user.Email));
            claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
            claims.Add(new Claim(JwtRegisteredClaimNames.Nbf, ToUnixEpochDate(DateTime.UtcNow).ToString()));
            claims.Add(new Claim(JwtRegisteredClaimNames.Iat, ToUnixEpochDate(DateTime.UtcNow).ToString(), ClaimValueTypes.Integer64));

            var identityClaims = new ClaimsIdentity();
            identityClaims.AddClaims(claims);

            return identityClaims;
        }

        private string EncodeCode(ClaimsIdentity identityClaims)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);

            var token = tokenHandler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = _appSettings.Issuer,
                Audience = _appSettings.Audience,
                Subject = identityClaims,
                Expires = DateTime.UtcNow.AddHours(_appSettings.ExpirationInHours),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            });

            return tokenHandler.WriteToken(token);
        }

        private async Task<UserResponseLogin> GetTokenResponse(string encodedToken, IdentityUser user, IEnumerable<Claim> claims, IEnumerable<string> roleNames)
        {
            var userToken = new UserToken
            {
                Id = user.Id,
                Email = user.Email,
                Roles = new List<UserRoles>(),
                Claims = claims.Select(c => new UserClaim { Type = c.Type, Value = c.Value})
            };

            foreach (var roleName in roleNames)
            {
                var role = await _roleManager.FindByNameAsync(roleName);

                if (role != null)
                {
                    var roleClaims = await _roleManager.GetClaimsAsync(role);
                    var userRole = new UserRoles
                    {
                        Name = roleName,
                        Claims = roleClaims.Select(c => new UserClaim
                        {
                            Type = c.Type,
                            Value = c.Value
                        })
                    };

                    userToken.Roles.Add(userRole);
                }
            }

            return new UserResponseLogin
            {
                AcessToken = encodedToken,
                ExpiresIn = TimeSpan.FromHours(_appSettings.ExpirationInHours).TotalSeconds,
                UserToken = userToken
            };
        }

        private static long ToUnixEpochDate(DateTime date) => (long)Math.Round((date.ToUniversalTime() - new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero)).TotalSeconds);

        private async Task<ResponseMessage> RegisterColporteur(UserRegisterDto userRegister)
        {
            var user = await _userManager.FindByEmailAsync(userRegister.Email);

            var registeredUser = new RegisteredUserIntegrationEvent(Guid.Parse(user.Id), userRegister.Name, userRegister.LastName);

            try
            {
                return await _bus.RequestAsync<RegisteredUserIntegrationEvent, ResponseMessage>(registeredUser);
            }
            catch
            {
                await _userManager.DeleteAsync(user);
                throw;
            }
        }

        #endregion
    }
}