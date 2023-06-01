using COLP.Core.Data;
using COLP.Management.API.Models;

namespace COLP.Management.API.Data.Repository.Union
{
    public interface IUnionRepository : IRepository<UnionModel>
    {
        Task<IEnumerable<UnionModel>> GetUnionsByFilter(string filter);
    }
}
