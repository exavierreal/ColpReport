using COLP.Core.Controllers;
using COLP.Core.Messages.Integration;
using COLP.Images.API.Integration;
using COLP.MessageBus;
using COLP.Operation.API.Integration;
using COLP.Operation.API.Services;
using COLP.Person.API.Dtos;
using COLP.Person.API.Models;
using COLP.Person.API.Services;
using COLP.Person.API.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Person.API.Controllers
{
    [Route("api/[controller]")]
    public class ColporteurController : MainController
    {
        private readonly IMessageBus _bus;
        private readonly ICategoryService _categoryService;
        private readonly IColporteurService _colporteurService;
        private readonly IGoalService _goalService;

        public ColporteurController(IMessageBus bus, ICategoryService categoryService, IColporteurService colporteurService, IGoalService goalService)
        {
            _bus = bus;
            _categoryService = categoryService;
            _colporteurService = colporteurService;
            _goalService = goalService;
        }

        [HttpGet("id")]
        public async Task<IActionResult> GetColporteurById(Guid id)
        {
            var colporteur = await _colporteurService.GetColporteurById(id);

            if (colporteur == null)
                return CustomResponse("Colportor não encontrado!");

            var leaderVM = await GetLeaderVm(colporteur);

            return CustomResponse(leaderVM);
        }

        [HttpPost("leader")]
        public async Task<IActionResult> SaveLeader(ColporteurViewModel leaderDto)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            if (!Request.Headers.TryGetValue("X-User-Id", out var userIdValue))
                return CustomResponse();

            if (!Guid.TryParse(userIdValue, out var userId))
                return CustomResponse();
            
            var imageId = Guid.Empty;
            if (leaderDto.ImageData != null && await hasUserNotSavedImage(userId, leaderDto.Filename))
            {
                imageId = Guid.NewGuid();
                var imageResult = await SaveImage(leaderDto, imageId, userId);

                if (!imageResult.ValidationResult.IsValid)
                    return CustomResponse(imageResult.ValidationResult);
            }
            else
            {
                imageId = await GetCurrentImageId(userId);
            }

            if (!await UpdateColporteur(userId, leaderDto, imageId))
                return CustomResponse();

            var goalResult = await SaveGoal(leaderDto.Goal, userId);
            if (!goalResult.ValidationResult.IsValid)
                return CustomResponse(goalResult.ValidationResult);

            if (!await _categoryService.InsertCategoriesToColporteur(userId, leaderDto.CategoryIds))
                return CustomResponse();


            return CustomResponse(leaderDto);
        }

        #region Private Methods

        #region Saving Image
        private async Task<ResponseMessage> SaveImage(ColporteurViewModel leader, Guid id, Guid userId)
        {
            var requestedImage = new RequestedImageIntegrationEvent(id, leader.Filename, leader.ImageData, true);

            try
            {
                return await _bus.RequestAsync<RequestedImageIntegrationEvent, ResponseMessage>(requestedImage);
            }
            catch (Exception)
            {

                throw;
            }
        }

        #endregion

        #region Saving Goal
        private async Task<ResponseMessage> SaveGoal(decimal value, Guid userId)
        {
            var goalName = "Meta Inicial";
            var requestedGoal = new RequestedGoalIntegrationEvent(value, goalName, null, userId, null);

            try
            {
                return await _bus.RequestAsync<RequestedGoalIntegrationEvent, ResponseMessage>(requestedGoal);
            }
            catch
            {
                throw;
            }
        }

        #endregion

        #region Updating Colporteur
        private async Task<bool> UpdateColporteur(Guid userId, ColporteurViewModel leader, Guid imageId)
        {
            var colporteur = new ColporteurDto
            {
                Id = userId,
                Name = leader.Name,
                Lastname = leader.Lastname,
                PhoneNumber = leader.PhoneNumber,
                PostalCode = leader.PostalCode,
                UF = leader.UF,
                City = leader.City,
                District = leader.District,
                Address = leader.Address,
                AddressNumber = leader.AddressNumber,
                Complement = leader.Complement,
                CPF = leader.CPF,
                RG = leader.RG,
                ShirtSize = leader.ShirtSize,
                IsActive = true,
                SinceDate = leader.SinceDate,
                Imageid = imageId
            };

            return await _colporteurService.UpdateColporteur(colporteur);
        }

        #endregion

        #region Get Leader VM
        private async Task<ColporteurViewModel> GetLeaderVm(Colporteur colporteur)
        {
            var goal = await _goalService.GetGoalByColporteurId(colporteur.Id);
            await _colporteurService.LoadImageAsync(colporteur);
            var imageData = colporteur.ImageId != null ? Convert.ToBase64String(colporteur.Image.ImageData) : null;
            var filename = colporteur.ImageId != null ? colporteur.Image.Filename : null;

            IEnumerable<Guid> categoryIds = colporteur.ColporteurCategories.Select(cc => cc.CategoryId);

            return new ColporteurViewModel
            {
                Name = colporteur.Name,
                Lastname = colporteur.LastName,
                PhoneNumber = colporteur.PhoneNumber,
                UF = colporteur.Address != null ? colporteur.Address.UF : null,
                City = colporteur.Address != null ? colporteur.Address.City : null,
                District = colporteur.Address != null ? colporteur.Address.District : null,
                Address = colporteur.Address != null ? colporteur.Address.Address : null,
                AddressNumber = colporteur.Address != null ? colporteur.Address.Number : null,
                Complement = colporteur.Address != null ? colporteur.Address.Complement : null,
                CPF = colporteur.CPF,
                RG = colporteur.RG,
                ShirtSize = colporteur.ShirtSize,
                SinceDate = colporteur.SinceDate.Value,
                Goal = goal.Value,
                Filename = filename,
                ImageData = imageData,
                CategoryIds = categoryIds
            };
        }

        #endregion

        #region Leader Has Image Saved
        private async Task<bool> hasUserNotSavedImage(Guid userId, string filename)
        {
            var colporteur = await _colporteurService.GetColporteurById(userId);
            await _colporteurService.LoadImageAsync(colporteur);

            if (colporteur == null || colporteur.TeamId == null) return false;

            return !(filename == colporteur.Image.Filename);
        }

        #endregion

        #region Get Current Image Of User
        private async Task<Guid> GetCurrentImageId(Guid userId)
        {
            var colporteur = await _colporteurService.GetColporteurById(userId);
            await _colporteurService.LoadImageAsync(colporteur);

            return (Guid)colporteur.ImageId;
        }
        #endregion

        #endregion
    }
}
