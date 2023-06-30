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

        public void Insert(Goal goal)
        {
            _context.Add(goal);
        }

        public void Update(Goal goal)
        {
            _context.Update(goal);
        }

        public async Task<Goal> GetById(Guid id)
        {
            return await _context.Goal.FindAsync(id);
        }

        public async Task<Goal> GetGoalByTeamId(Guid teamId)
        {
            return await _context.Goal.FirstOrDefaultAsync(x => x.TeamId == teamId);
        }

        public async Task<Goal> GetGoalByColporteurId(Guid colporteurId)
        {
            return await _context.Goal.FirstOrDefaultAsync(x => x.ColporteurId == colporteurId);
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
