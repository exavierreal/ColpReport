using COLP.Core.Data;
using COLP.Management.API.Models;

namespace COLP.Management.API.Data.Repository
{
    public class TeamRepository : ITeamRepository
    {
        private readonly ManagementContext _context;

        public TeamRepository(ManagementContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public void Insert(Team team)
        {
            _context.Add(team);
        }

        public void Update(Team team)
        {
            _context.Update(team);
        }

        public async Task<Team> GetTeamById(Guid id)
        {
            return await _context.Teams.FindAsync(id);
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
