using COLP.Management.API.Data.Repository.Association;
using COLP.Management.API.Models;

namespace COLP.Management.API.Services.Association
{
    public class AssociationService : IAssociationService
    {
        private readonly IAssociationRepository _repository;

        public AssociationService(IAssociationRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Models.Association>> GetAssociationsByFilter(string filter, Guid unionId)
        {
            return await _repository.GetAssociationsByFilter(filter, unionId);
        }
    }
}
