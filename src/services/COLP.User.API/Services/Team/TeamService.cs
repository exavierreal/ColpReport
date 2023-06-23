using COLP.Management.API.Data.Repository;
using COLP.Management.API.Models;

namespace COLP.Management.API.Services
{
    public class TeamService : ITeamService
    {
        private readonly ITeamRepository _repository;

        public TeamService(ITeamRepository repository)
        {
            _repository = repository;
        }

        public async Task<Team> GetTeamById(Guid id)
        {
            return await _repository.GetTeamById(id);
        }

        public async Task<bool> SaveTeam(Team team)
        {
            _repository.Insert(team);

            return await _repository.UnitOfWork.Commit();
        }
    }
}
