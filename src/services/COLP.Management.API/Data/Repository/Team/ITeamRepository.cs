using COLP.Core.Data;
using COLP.Management.API.Models;

namespace COLP.Management.API.Data.Repository.Team
{
    public interface ITeamRepository : IRepository<Models.Team>
    {
        void Insert(Models.Team team);
    }
}

