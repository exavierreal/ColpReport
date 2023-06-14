using COLP.Operation.API.Application.Commands;
using FluentValidation;

namespace COLP.Operation.API.Application.Validations
{
    public class SaveGoalValidation : AbstractValidator<SaveGoalCommand>
    {
        public SaveGoalValidation()
        {
            RuleFor(x => x.AggregateId)
                .NotEqual(Guid.Empty)
                .WithMessage("Id da pessoa inválido");

            RuleFor(x => x.Value)
                .Must(value => value >= 0)
                .WithMessage("Valor da meta é menor que zero");
        }
    }
}
