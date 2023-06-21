using COLP.Operation.API.Data.Repositories;
using COLP.Operation.API.Models;

namespace COLP.Operation.API.Services
{
    public class GoalService : IGoalService
    {
        IGoalRepository _goalRepository;

        public GoalService(IGoalRepository goalRepository)
        {
            _goalRepository = goalRepository;
        }

        public async Task<Goal> GetGoalByTeamId(Guid teamId)
        {
            return await _goalRepository.GetGoalByTeamId(teamId);
        }
    }
}
