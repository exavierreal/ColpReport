using COLP.Core.Data;
using COLP.Management.API.Models;

namespace COLP.Management.API.Data.Repository
{
    public interface ITeamRepository : IRepository<Team>
    {
        void Insert(Team team);
        void Update(Team team);
        Task<Team> GetTeamById(Guid id);
    }
}

