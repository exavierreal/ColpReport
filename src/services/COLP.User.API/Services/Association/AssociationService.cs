using COLP.Management.API.Data.Repository;
using COLP.Management.API.Models;

namespace COLP.Management.API.Services
{
    public class AssociationService : IAssociationService
    {
        private readonly IAssociationRepository _repository;

        public AssociationService(IAssociationRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Association>> GetAssociationsByFilter(string filter, Guid unionId)
        {
            return await _repository.GetAssociationsByFilter(filter, unionId);
        }

        public async Task<Association> GetAssociationsById(Guid associationId)
        {
            return await _repository.GetAssociationById(associationId);
        }
    }
}
