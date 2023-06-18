using COLP.Core.Messages;
using COLP.Operation.API.Application.Validations;

namespace COLP.Operation.API.Application.Commands
{
    public class SaveGoalCommand : Command
    {
        public decimal Value { get; private set; }
        public string Name { get; private set; }
        public Guid? TeamId { get; private set; }
        public Guid? GoalId { get; private set; }

        public SaveGoalCommand(decimal value, string name, Guid? teamId, Guid? goalId)
        {
            Value = value;
            Name = name;
            TeamId = teamId;
            GoalId = goalId;
        }

        public override bool IsValid()
        {
            ValidationResult = new SaveGoalValidation().Validate(this);
            return ValidationResult.IsValid;
        }
    }
}
