using COLP.Core.Data;
using COLP.Person.API.Models;
using Microsoft.EntityFrameworkCore;

namespace COLP.Person.API.Data.Repository
{
    public class ColporteurRepository : IColporteurRepository
    {
        private readonly ColporteurContext _context;

        public ColporteurRepository(ColporteurContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public async Task<IEnumerable<Colporteur>> GetAll()
        {
            return await _context.Colporteurs.AsNoTracking().ToListAsync();
        }

        public async Task<Colporteur> GetById(Guid id)
        {
            return await _context.Colporteurs.FindAsync(id);
        }

        public void Insert(Colporteur colporteur)
        {
            _context.Add(colporteur);
        }

        public void Update(Colporteur colporteur)
        {
            _context.Update(colporteur);
        }
        public async Task<Guid?> GetTeamIdByUserId(Guid? userId)
        {
            return await _context.Colporteurs.Where(c => c.Id == userId).Select(x => x.TeamId).FirstOrDefaultAsync();
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
