using COLP.Core.Data;
using COLP.Management.API.Models;
using Microsoft.EntityFrameworkCore;

namespace COLP.Management.API.Data.Repository.Association
{
    public class AssociationRepository : IAssociationRepository
    {
        private readonly ManagementContext _context;

        public AssociationRepository(ManagementContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public async Task<IEnumerable<AssociationModel>> GetAssociationsByFilter(string filter)
        {
            return await _context.Associations.Where(a => a.Acronym.Contains(filter) || a.Name.Contains(filter)).ToListAsync();
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
