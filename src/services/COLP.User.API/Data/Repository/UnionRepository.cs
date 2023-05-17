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
            return await _context.Unions.Where(u => EF.Functions.Like(u.Acronym, filter)).ToListAsync();
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
