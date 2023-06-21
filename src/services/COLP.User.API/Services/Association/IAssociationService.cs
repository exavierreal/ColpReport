using COLP.Management.API.Models;

namespace COLP.Management.API.Services
{
    public interface IAssociationService
    {
        Task<IEnumerable<Association>> GetAssociationsByFilter(string filter, Guid unionId);
        Task<Association> GetAssociationsById(Guid associationId);
    }
}
