using COLP.Core.Messages;
using COLP.Person.API.Application.Validations;

namespace COLP.Person.API.Application.Commands
{
    public class UpdateColporteurCommand : Command
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public string LastName { get; private set; }
        public string PhoneNumber { get; private set; }
        public string CPF { get; private set; }
        public string RG { get; private set; }
        public string ShirtSize { get; private set; }
        public bool IsActive { get; private set; }
        public DateTime? SinceDate { get; private set; }
        public Guid? ImageId { get; private set; }
        public Guid TeamId { get; private set; }

        public UpdateColporteurCommand(Guid id, string name, string lastName, string phoneNumber, string cpf, string rg, string shirtSize, bool isActive, DateTime? sinceDate, Guid? imageId, Guid teamId)
        {
            AggregateId = id;
            Id = id;
            Name = name;
            LastName = lastName;
            PhoneNumber = phoneNumber;
            CPF = cpf;
            RG = rg;
            ShirtSize = shirtSize;
            IsActive = isActive;
            SinceDate = sinceDate;
            ImageId = imageId;
            TeamId = teamId;
        }

        public override bool IsValid()
        {
            ValidationResult = new UpdateColporteurValidation().Validate(this);
            return ValidationResult.IsValid;
        }
    }
}
