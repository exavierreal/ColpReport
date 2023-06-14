using COLP.Core.Data;
using COLP.Operation.API.Models;

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

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
