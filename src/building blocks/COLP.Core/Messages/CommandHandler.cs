using COLP.Core.Data;
using FluentValidation.Results;

namespace COLP.Core.Messages
{
    public abstract class CommandHandler
    {
        protected ValidationResult ValidationResult;

        protected CommandHandler()
        {
            ValidationResult = new ValidationResult();
        }

        protected void SetError(string message)
        {
            ValidationResult.Errors.Add(new ValidationFailure(string.Empty, message));
        }

        protected async Task<ValidationResult> SaveChanges(IUnitOfWork uow)
        {
            if (!await uow.Commit())
                SetError("Houve um erro ao persistir os dados.");

            return ValidationResult;
        }
    }
}
