using COLP.Core.Data;
using COLP.Management.API.Models;
using Microsoft.EntityFrameworkCore;

namespace COLP.Management.API.Data.Repository
{
    public class UnionRepository : IUnionRepository
    {
        private readonly ManagementContext _context;

        public UnionRepository(ManagementContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public async Task<IEnumerable<Union>> GetUnionsByFilter(string filter)
        {
            return await _context.Unions.Where(u => u.Acronym.Contains(filter) || u.Name.Contains(filter)).ToListAsync();
        }

        public async Task<Union> GetUnionById(Guid id)
        {
            return await _context.Unions.FindAsync(id);
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
