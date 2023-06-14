using COLP.Management.API.Models;

namespace COLP.Management.API.Services.Association
{
    public interface IAssociationService
    {
        Task<IEnumerable<Models.Association>> GetAssociationsByFilter(string filter, Guid unionId);
    }
}
