using COLP.Core.Data;
using COLP.Management.API.Models;
using Microsoft.EntityFrameworkCore;

namespace COLP.Management.API.Data.Repository
{
    public class AssociationRepository : IAssociationRepository
    {
        private readonly ManagementContext _context;

        public AssociationRepository(ManagementContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public async Task<IEnumerable<Association>> GetAssociationsByFilter(string filter, Guid unionId)
        {
            return await _context.Associations.Where(a => a.UnionId == unionId && (a.Acronym.Contains(filter) || a.Name.Contains(filter))).ToListAsync();
        }

        public async Task<Association> GetAssociationById(Guid associationId)
        {
            return await _context.Associations.FindAsync(associationId);
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
