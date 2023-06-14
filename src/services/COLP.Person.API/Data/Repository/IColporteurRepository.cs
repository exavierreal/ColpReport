using COLP.Core.Data;
using COLP.Person.API.Models;

namespace COLP.Person.API.Data.Repository
{
    public interface IColporteurRepository : IRepository<Colporteur>
    {
        Task<IEnumerable<Colporteur>> GetAll();
        Task<Colporteur> GetById(Guid id);
        void Insert(Colporteur colporteur);
        void Update(Colporteur colporteur);
    }
}
