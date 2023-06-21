using COLP.Core.Data;
using COLP.Operation.API.Models;

namespace COLP.Operation.API.Data.Repositories
{
    public interface IGoalRepository : IRepository<Goal>
    {
        void Add(Goal goal);
        Task<Goal> GetGoalByTeamId(Guid teamId);
    }
}
