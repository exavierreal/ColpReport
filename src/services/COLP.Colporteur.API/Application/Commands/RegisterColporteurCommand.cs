using COLP.Core.Messages;
using COLP.Person.API.Application.Validations;

namespace COLP.Person.API.Application.Commands
{
    public class RegisterColporteurCommand : Command
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public string LastName { get; private set; }

        public RegisterColporteurCommand(Guid id, string name, string lastName)
        {
            AggregateId = id;
            Id = id;
            Name = name;
            LastName = lastName;
        }

        public override bool IsValid()
        {
            ValidationResult = new RegisterColporteurValidation().Validate(this);
            return ValidationResult.IsValid;
        }
    }
}
