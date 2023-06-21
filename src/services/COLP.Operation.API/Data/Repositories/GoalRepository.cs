using COLP.Core.Data;
using COLP.Operation.API.Models;
using Microsoft.EntityFrameworkCore;

namespace COLP.Operation.API.Data.Repositories
{
    public class GoalRepository : IGoalRepository
    {
        private readonly OperationContext _context;

        public GoalRepository(OperationContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public void Add(Goal goal)
        {
            _context.Add(goal);
        }
        public async Task<Goal> GetGoalByTeamId(Guid teamId)
        {
            return await _context.Goal.FirstOrDefaultAsync(x => x.TeamId == teamId);
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
