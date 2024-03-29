﻿namespace COLP.Identity.API.Models
{
    public class UserToken
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public IEnumerable<UserClaim> Claims { get; set; }
        public IList<UserRoles> Roles { get; set; }
    }
}
