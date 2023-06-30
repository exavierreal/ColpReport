using COLP.Core.Messages;

namespace COLP.Person.API.Application.Events
{
    public class UpdateColporteurEvent : Event
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public string LastName { get; private set; }
        public string PhoneNumber { get; private set; }
        public string CPF { get; private set; }
        public string RG { get; private set; }
        public string ShirtSize { get; private set; }
        public bool isActive { get; private set; }
        public Guid? TeamId { get; private set; }

        public UpdateColporteurEvent(Guid aggregateId, Guid id, string name, string lastName, string phoneNumber, string cpf, string rg, string shirtSize, bool isActive, Guid? teamId)
        {
            AggregateId = aggregateId;
            Id = id;
            Name = name;
            LastName = lastName;
            PhoneNumber = phoneNumber;
            CPF = cpf;
            RG = rg;
            ShirtSize = shirtSize;
            this.isActive = isActive;
            TeamId = teamId;
        }
    }
}
