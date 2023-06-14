using COLP.Management.API.Data.Repository.Union;
using COLP.Management.API.Models;

namespace COLP.Management.API.Services.Union
{
    public class UnionService : IUnionService
    {
        private readonly IUnionRepository _repository;

        public UnionService(IUnionRepository repository)
        {
            _repository = repository;
        }

        public Task<IEnumerable<Models.Union>> GetUnionsByFilter(string filter)
        {
            return _repository.GetUnionsByFilter(filter);
        }
    }
}
