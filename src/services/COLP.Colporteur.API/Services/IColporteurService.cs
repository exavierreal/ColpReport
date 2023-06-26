using COLP.Person.API.Models;

namespace COLP.Person.API.Services
{
    public interface IColporteurService
    {
        Task<Colporteur> GetColporteurById(Guid ColporteurId);
        Task<bool> UpdateSinceDateAndImage(Guid colporteurId, DateTime sinceDate, Guid imageId);
    }
}
