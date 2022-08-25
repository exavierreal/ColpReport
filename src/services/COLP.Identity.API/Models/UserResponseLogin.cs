namespace COLP.Identity.API.Models
{
    public class UserResponseLogin
    {
        public string AcessToken { get; set; }
        public double ExpiresIn { get; set; }
        public UserToken UserToken { get; set; }
    }
}
