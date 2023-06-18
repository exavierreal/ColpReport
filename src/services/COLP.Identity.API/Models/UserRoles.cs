namespace COLP.Identity.API.Models
{
    public class UserRoles
    {
        public string Name { get; set; }
        public IEnumerable<UserClaim> Claims { get; set; }
    }
}
