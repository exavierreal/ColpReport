using COLP.Core.Data;
using COLP.Operation.API.Models;

namespace COLP.Operation.API.Data.Repositories
{
    public interface IGoalRepository : IRepository<Goal>
    {
        void Insert(Goal goal);
        void Update(Goal goal);
        Task<Goal> GetById(Guid id);
        Task<Goal> GetGoalByTeamId(Guid teamId);
        Task<Goal> GetGoalByColporteurId(Guid colporteurId);
    }
}
