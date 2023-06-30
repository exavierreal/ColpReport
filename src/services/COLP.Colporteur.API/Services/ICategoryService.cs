using COLP.Person.API.Models;

namespace COLP.Person.API.Services
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> GetAll();
        Task<Category> GetById(Guid id);
        Task<bool> InsertCategoriesToColporteur(Guid colporteurId, IEnumerable<Guid> categoryIds);
    }
}
