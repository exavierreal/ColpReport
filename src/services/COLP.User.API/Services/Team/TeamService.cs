using COLP.Management.API.Data.Repository.Team;
using COLP.Management.API.Models;

namespace COLP.Management.API.Services.Team
{
    public class TeamService : ITeamService
    {
        private readonly ITeamRepository _repository;

        public TeamService(ITeamRepository repository)
        {
            _repository = repository;
        }

        public async Task<bool> SaveTeam(TeamModel team)
        {
            _repository.Insert(team);

            return await _repository.UnitOfWork.Commit();
        }
    }
}
