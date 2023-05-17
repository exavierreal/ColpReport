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

        public Task<IEnumerable<Union>> GetUnionsByFilter(string filter)
        {
            return _repository.GetUnionsByFilter(filter);
        }
    }
}
