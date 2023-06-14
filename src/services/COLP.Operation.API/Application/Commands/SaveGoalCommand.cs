using COLP.Core.Messages;
using COLP.Operation.API.Application.Validations;

namespace COLP.Operation.API.Application.Commands
{
    public class SaveGoalCommand : Command
    {
        public Guid? TeamId { get; private set; }
        public Guid? ColporteurId { get; private set; }
        public decimal Value { get; private set; }
        public string Name { get; private set; }

        public SaveGoalCommand(decimal value, string name, Guid aggregateId, Guid? teamId, Guid? colporteurId)
        {
            AggregateId = aggregateId;
            TeamId = teamId;
            ColporteurId = colporteurId;
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
