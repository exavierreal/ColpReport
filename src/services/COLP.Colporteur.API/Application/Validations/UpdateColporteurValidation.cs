using COLP.Person.API.Application.Commands;
using FluentValidation;

namespace COLP.Person.API.Application.Validations
{
    public class UpdateColporteurValidation : AbstractValidator<UpdateColporteurCommand>
    {
        public UpdateColporteurValidation()
        {
            RuleFor(c => c.Id).NotEqual(Guid.Empty).WithMessage("Id do colportor inválido");
        }
    }
}
