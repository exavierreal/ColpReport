using COLP.Person.API.Models;

namespace COLP.Person.API.Services
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> GetAll();
        Task<bool> InsertCategoriesToColporteur(Guid colporteurId, IEnumerable<Guid> categoryIds);
    }
}
