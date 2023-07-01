using COLP.Core.Messages;
using COLP.Person.API.Application.Events;
using COLP.Person.API.Data.Repository;
using COLP.Person.API.Models;
using FluentValidation.Results;
using MediatR;

namespace COLP.Person.API.Application.Commands
{
    public class SaveColporteurCommandHandler : CommandHandler, IRequestHandler<SaveColporteurCommand, ValidationResult>
    {
        private readonly IColporteurRepository _colporteurRepository;

        public SaveColporteurCommandHandler(IColporteurRepository colporteurRepository)
        {
            _colporteurRepository = colporteurRepository;
        }

        public async Task<ValidationResult> Handle(SaveColporteurCommand request, CancellationToken cancellationToken)
        {
            try { 
                if (!request.IsValid())
                    return request.ValidationResult;

                var colporteur = new Colporteur(request.Id, request.Name, request.LastName, request.PhoneNumber, request.CPF, request.RG,
                                                request.ShirtSize, request.IsActive, request.SinceDate.Value, request.ImageId, request.TeamId);

                _colporteurRepository.Insert(colporteur);

                colporteur.AddEvent(new UpdateColporteurEvent(request.AggregateId, request.Id, request.Name, request.LastName, request.PhoneNumber,
                                        request.CPF, request.RG, request.ShirtSize, request.IsActive, request.TeamId));

                return await SaveChanges(_colporteurRepository.UnitOfWork);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
