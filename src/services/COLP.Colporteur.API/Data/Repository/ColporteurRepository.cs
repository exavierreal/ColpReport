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

        public async Task<IEnumerable<Colporteur>> GetAllColporteurs(Guid userId, Guid teamId)
        {
            try
            {
                return await _context.Colporteurs.Include(c => c.ColporteurCategories).Where(c => c.TeamId == teamId && c.Id != userId).ToListAsync();
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<Colporteur> GetById(Guid id)
        {
            return await _context.Colporteurs.Include(c => c.ColporteurCategories).FirstOrDefaultAsync(c => c.Id == id);
        }

        public void Insert(Colporteur colporteur)
        {
            _context.Add(colporteur);
        }

        public void Update(Colporteur colporteur)
        {
            _context.Update(colporteur);
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
