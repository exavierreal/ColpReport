using COLP.Person.API.Application.Commands;
using FluentValidation;

namespace COLP.Person.API.Application.Validations
{
    public class SaveColporteurValidation : AbstractValidator<SaveColporteurCommand>
    {
        public SaveColporteurValidation()
        {
            RuleFor(c => c.Id).NotEqual(Guid.Empty).WithMessage("Id do colportor inválido");
        }
    }
}
