using COLP.Core.Messages;

namespace COLP.Person.API.Application.Events
{
    public class RegisteredColporteurEvent : Event
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public string LastName { get; private set; }

        public RegisteredColporteurEvent(Guid id, string name, string lastName)
        {
            AggregateId = id;
            Id = id;
            Name = name;
            LastName = lastName;
        }
    }
}
