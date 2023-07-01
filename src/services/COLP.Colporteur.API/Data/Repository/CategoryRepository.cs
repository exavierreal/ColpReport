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

        public async Task<Category> GetById(Guid id)
        {
            return await _context.Categories.FindAsync(id);
        }

        public async Task InsertCategoriesToColporteur(Guid userId, IEnumerable<Guid> categoryIds)
        {
            try { 
            var colporteur = await _context.Colporteurs.Include(c => c.ColporteurCategories).FirstOrDefaultAsync(c => c.Id == userId);

                if (colporteur != null)
                {
                    var existingCategoryIds = colporteur.ColporteurCategories.Select(cc => cc.CategoryId).ToList();

                    var newCategoryIds = categoryIds.Except(existingCategoryIds).ToList();

                    foreach (var categoryId in newCategoryIds)
                    {
                        var category = await _context.Categories.FindAsync(categoryId);

                        if (category != null)
                        {
                            var colporteurCategory = new ColporteurCategory(colporteur.Id, category.Id);
                            _context.ColporteurCategories.Add(colporteurCategory);
                        }
                    }
                }
            } catch (Exception ex)
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
