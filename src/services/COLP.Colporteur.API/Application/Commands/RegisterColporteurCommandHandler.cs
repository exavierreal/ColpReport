using COLP.Core.Messages;
using COLP.Person.API.Application.Events;
using COLP.Person.API.Data.Repository;
using COLP.Person.API.Models;
using FluentValidation.Results;
using MediatR;

namespace COLP.Person.API.Application.Commands
{
    public class RegisterColporteurCommandHandler : CommandHandler, IRequestHandler<RegisterColporteurCommand, ValidationResult>
    {
        private readonly IColporteurRepository _colporteurRepository;

        public RegisterColporteurCommandHandler(IColporteurRepository colporteurRepository)
        {
            _colporteurRepository = colporteurRepository;
        }

        public async Task<ValidationResult> Handle(RegisterColporteurCommand request, CancellationToken cancellationToken)
        {
            if (!request.IsValid())
                return request.ValidationResult;

            var colporteur = new Colporteur(request.Id, request.Name, request.LastName);

            _colporteurRepository.Insert(colporteur);

            colporteur.AddEvent(new RegisteredColporteurEvent(request.Id, request.Name, request.LastName));

            return await SaveChanges(_colporteurRepository.UnitOfWork);
        }
    }
}
