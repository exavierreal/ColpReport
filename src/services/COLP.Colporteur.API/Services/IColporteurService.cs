using COLP.Person.API.Dtos;
using COLP.Person.API.Models;

namespace COLP.Person.API.Services
{
    public interface IColporteurService
    {
        Task<Colporteur> GetColporteurById(Guid ColporteurId);
        Task LoadImageAsync(Colporteur colporteur);
        Task<bool> UpdateColporteur(ColporteurDto colporteur);
    }
}
