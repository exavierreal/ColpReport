using COLP.Core.Data;
using COLP.Management.API.Models;

namespace COLP.Management.API.Data.Repository
{
    public interface IAssociationRepository : IRepository<Association>
    {
        Task<IEnumerable<Association>> GetAssociationsByFilter(string filter, Guid unionId);
        Task<Association> GetAssociationById(Guid associationId);
    }
}
