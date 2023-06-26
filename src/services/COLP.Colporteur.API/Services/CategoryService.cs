using COLP.Person.API.Data.Repository;
using COLP.Person.API.Models;

namespace COLP.Person.API.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IColporteurRepository _colporteurRepository;

        public CategoryService(ICategoryRepository categoryRepository, IColporteurRepository colporteurRepository)
        {
            _categoryRepository = categoryRepository;
            _colporteurRepository = colporteurRepository;
        }

        public async Task<IEnumerable<Category>> GetAll()
        {
            return await _categoryRepository.GetAll();
        }

        public async Task<bool> InsertCategoriesToColporteur(Guid colporteurId, IEnumerable<Guid> categoryIds)
        {
            var colporteur = await _colporteurRepository.GetById(colporteurId);

            await _categoryRepository.InsertCategoriesToColporteur(colporteurId, categoryIds);

            return await _categoryRepository.UnitOfWork.Commit();
        }
    }
}
