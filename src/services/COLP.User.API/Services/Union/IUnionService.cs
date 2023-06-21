using COLP.Management.API.Models;

namespace COLP.Management.API.Services
{
    public interface IUnionService
    {
        Task<IEnumerable<Union>> GetUnionsByFilter(string filter);
        Task<Union> GetUnionById(Guid id);
    }
}
