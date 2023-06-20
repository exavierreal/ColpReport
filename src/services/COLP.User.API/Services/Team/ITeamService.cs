using COLP.Management.API.Models;

namespace COLP.Management.API.Services
{
    public interface ITeamService
    {
        Task<bool> SaveTeam(Team team);

        Task<Team> GetTeamById(Guid id);
    }
}
