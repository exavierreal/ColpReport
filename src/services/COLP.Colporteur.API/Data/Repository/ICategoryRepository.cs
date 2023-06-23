using COLP.Core.Data;
using COLP.Person.API.Models;

namespace COLP.Person.API.Data.Repository
{
    public interface ICategoryRepository : IRepository<Category>
    {
        Task<IEnumerable<Category>> GetAll();
        void InsertCategoriesToColporteur(Guid colporteurId, IEnumerable<Guid> categoryIds);
    }
}
