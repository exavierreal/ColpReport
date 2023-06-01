using COLP.Core.Data;
using COLP.Management.API.Models;

namespace COLP.Management.API.Data.Repository.Team
{
    public class TeamRepository : ITeamRepository
    {
        private readonly ManagementContext _context;

        public TeamRepository(ManagementContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public void Insert(TeamModel team)
        {
            _context.Add(team);
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
