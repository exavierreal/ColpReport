using COLP.Core.Data;
using COLP.Management.API.Models;

namespace COLP.Management.API.Data.Repository.Association
{
    public interface IAssociationRepository : IRepository<Models.Association>
    {
        Task<IEnumerable<Models.Association>> GetAssociationsByFilter(string filter, Guid unionId);
    }
}
