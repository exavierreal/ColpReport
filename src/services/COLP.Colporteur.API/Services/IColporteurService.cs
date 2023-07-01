using COLP.Person.API.Dtos;
using COLP.Person.API.Models;

namespace COLP.Person.API.Services
{
    public interface IColporteurService
    {
        Task<IEnumerable<Colporteur>> GetAllColporteurs(Guid userId);
        Task<Colporteur> GetColporteurById(Guid ColporteurId);
        Task LoadImageAsync(Colporteur colporteur);
        Task<bool> InsertColporteur(ColporteurDto colporteur, Guid userId);
        Task<bool> UpdateColporteur(ColporteurDto colporteur, Guid userId);

    }
}
