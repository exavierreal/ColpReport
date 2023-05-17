using COLP.Core.Data;
using COLP.Management.API.Models;

namespace COLP.Management.API.Data.Repository
{
    public interface IUnionRepository : IRepository<Union>
    {
        Task<IEnumerable<Union>> GetUnionsByFilter(string filter);
    }
}
