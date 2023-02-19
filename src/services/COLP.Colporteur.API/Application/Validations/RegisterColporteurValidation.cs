using COLP.Person.API.Application.Commands;
using FluentValidation;

namespace COLP.Person.API.Application.Validations
{
    public class RegisterColporteurValidation : AbstractValidator<RegisterColporteurCommand>
    {
        public RegisterColporteurValidation()
        {
            RuleFor(c => c.Id).NotEqual(Guid.Empty).WithMessage("Id do colportor inválido");
            RuleFor(c => c.Name).NotEmpty();
            RuleFor(c => c.LastName).NotEmpty();
        }
    }
}
