using COLP.Core.Data;
using COLP.Management.API.Models;
using Microsoft.EntityFrameworkCore;

namespace COLP.Management.API.Data.Repository.Union
{
    public class UnionRepository : IUnionRepository
    {
        private readonly ManagementContext _context;

        public UnionRepository(ManagementContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public async Task<IEnumerable<Models.Union>> GetUnionsByFilter(string filter)
        {
            return await _context.Unions.Where(u => u.Acronym.Contains(filter) || u.Name.Contains(filter)).ToListAsync();
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
