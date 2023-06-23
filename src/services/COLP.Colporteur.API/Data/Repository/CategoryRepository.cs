using COLP.Core.Data;
using COLP.Person.API.Models;
using Microsoft.EntityFrameworkCore;

namespace COLP.Person.API.Data.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ColporteurContext _context;

        public CategoryRepository(ColporteurContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public async Task<IEnumerable<Category>> GetAll()
        {
            return await _context.Categories.OrderBy(c => c.Sequential).ToListAsync();
        }

        public async void InsertCategoriesToColporteur(Guid colporteurId, IEnumerable<Guid> categoryIds)
        {
            var colporteur = await _context.Colporteurs.FindAsync(colporteurId);

            if (colporteur != null)
            {
                var categories = await _context.Categories.Where(c => categoryIds.Contains(c.Id)).ToListAsync();

                foreach (var category in categories)
                    colporteur.Categories.Add(category);
            }
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
