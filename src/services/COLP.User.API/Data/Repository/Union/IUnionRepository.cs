using COLP.Core.Data;
using COLP.Management.API.Models;

namespace COLP.Management.API.Data.Repository.Union
{
    public interface IUnionRepository : IRepository<Models.Union>
    {
        Task<IEnumerable<Models.Union>> GetUnionsByFilter(string filter);
    }
}
