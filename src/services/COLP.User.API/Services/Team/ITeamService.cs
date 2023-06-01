using COLP.Management.API.Models;

namespace COLP.Management.API.Services.Team
{
    public interface ITeamService
    {
        Task<bool> SaveTeam(TeamModel team);
    }
}
