using COLP.Core.Data;
using COLP.Management.API.Models;

namespace COLP.Management.API.Data.Repository.Association
{
    public interface IAssociationRepository : IRepository<AssociationModel>
    {
        Task<IEnumerable<AssociationModel>> GetAssociationsByFilter(string filter);
    }
}
