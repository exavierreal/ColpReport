using COLP.Core.Mediator;
using COLP.Person.API.Application.Commands;
using COLP.Person.API.Data.Repository;
using COLP.Person.API.Models;
using FluentValidation.Results;

namespace COLP.Person.API.Services
{
    public class ColporteurService : IColporteurService
    {
        private readonly IColporteurRepository _repository;
        private readonly IServiceProvider _serviceProvider;

        public ColporteurService(IColporteurRepository repository, IServiceProvider serviceProvider)
        {
            _repository = repository;
            _serviceProvider = serviceProvider;
        }

        public async Task<Colporteur> GetColporteurById(Guid ColporteurId)
        {
            return await _repository.GetById(ColporteurId);
        }

        public async Task<bool> UpdateSinceDateAndImage(Guid colporteurId, DateTime sinceDate, Guid imageId)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var colporteur = await _repository.GetById(colporteurId);

                var colporteurCommand = new UpdateColporteurCommand(colporteur.Id, colporteur.Name, colporteur.LastName, colporteur.PhoneNumber, colporteur.CPF,
                                                    colporteur.RG, colporteur.ShirtSize, colporteur.IsActive, sinceDate, (imageId == Guid.Empty ? null : imageId), (Guid)colporteur.TeamId);

                var mediator = scope.ServiceProvider.GetRequiredService<IMediatorHandler>();
                var response = await mediator.SendCommand(colporteurCommand);
                var success = response.IsValid;

                return success;
            }
        }
    }
}
