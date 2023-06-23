using COLP.Core.Messages;
using COLP.Person.API.Application.Events;
using COLP.Person.API.Data.Repository;
using COLP.Person.API.Models;
using FluentValidation.Results;
using MediatR;

namespace COLP.Person.API.Application.Commands
{
    public class UpdateColporteurCommandHandler : CommandHandler, IRequestHandler<UpdateColporteurCommand, ValidationResult>
    {
        private readonly IColporteurRepository _colporteurRepository;

        public UpdateColporteurCommandHandler(IColporteurRepository colporteurRepository)
        {
            _colporteurRepository = colporteurRepository;
        }

        public async Task<ValidationResult> Handle(UpdateColporteurCommand request, CancellationToken cancellationToken)
        {
            if (!request.IsValid())
                return request.ValidationResult;

            var colporteur = new Colporteur(request.Id, request.Name, request.LastName, request.PhoneNumber, request.CPF, request.RG,
                                            request.ShirtSize, request.IsActive, request.SinceDate, request.TeamId);

            _colporteurRepository.Update(colporteur);

            colporteur.AddEvent(new UpdateColporteurEvent(request.AggregateId, request.Id, request.Name, request.LastName, request.PhoneNumber,
                                    request.CPF, request.RG, request.ShirtSize, request.IsActive, request.TeamId));

            return await SaveChanges(_colporteurRepository.UnitOfWork);
        }
    }
}
