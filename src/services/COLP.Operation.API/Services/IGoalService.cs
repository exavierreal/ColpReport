using COLP.Operation.API.Models;

namespace COLP.Operation.API.Services
{
    public interface IGoalService
    {
        Task<Goal> GetGoalByTeamId(Guid teamId);
        Task<Goal> GetGoalByColporteurId(Guid colporteurId);
    }
}
