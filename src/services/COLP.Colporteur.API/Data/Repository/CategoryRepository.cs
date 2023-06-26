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

        public async Task InsertCategoriesToColporteur(Guid userId, IEnumerable<Guid> categoryIds)
        {
            try
            {
                var colporteur = await _context.Colporteurs.Include(c => c.Categories).FirstOrDefaultAsync(c => c.Id == userId);

                if (colporteur != null)
                {
                    var categories = await _context.Categories.Where(c => categoryIds.Contains(c.Id)).ToListAsync();

                    foreach (var category in categories)
                    {   
                        if (!colporteur.Categories.Any(c => c.Id == category.Id))
                            colporteur.Categories.Add(category);
                    }

                    _context.Update(colporteur);
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
