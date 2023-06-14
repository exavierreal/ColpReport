using COLP.Core.Messages;
using COLP.Operation.API.Application.Validations;

namespace COLP.Operation.API.Application.Commands
{
    public class SaveGoalCommand : Command
    {
        public decimal Value { get; private set; }
        public string Name { get; private set; }

        public SaveGoalCommand(decimal value, string name)
        {
            Value = value;
            Name = name;
        }

        public override bool IsValid()
        {
            ValidationResult = new SaveGoalValidation().Validate(this);
            return ValidationResult.IsValid;
        }
    }
}
