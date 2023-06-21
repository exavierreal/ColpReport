using COLP.Management.API.Data.Repository;
using COLP.Management.API.Models;

namespace COLP.Management.API.Services
{
    public class UnionService : IUnionService
    {
        private readonly IUnionRepository _repository;

        public UnionService(IUnionRepository repository)
        {
            _repository = repository;
        }

        public async Task<Union> GetUnionById(Guid id)
        {
            return await _repository.GetUnionById(id);
        }

        public async Task<IEnumerable<Union>> GetUnionsByFilter(string filter)
        {
            return await _repository.GetUnionsByFilter(filter);
        }
    }
}
