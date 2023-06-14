using COLP.Management.API.Models;

namespace COLP.Management.API.Services.Union
{
    public interface IUnionService
    {
        Task<IEnumerable<Models.Union>> GetUnionsByFilter(string filter);
    }
}
