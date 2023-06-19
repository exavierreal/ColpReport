using COLP.Person.API.Data.Repository;
using COLP.Person.API.Models;

namespace COLP.Person.API.Services
{
    public class ColporteurService : IColporteurService
    {
        private readonly IColporteurRepository _repository;

        public ColporteurService(IColporteurRepository repository)
        {
            _repository = repository;
        }

        public async Task<Colporteur> GetColporteurById(Guid ColporteurId)
        {
            return await _repository.GetById(ColporteurId);
        }
    }
}
