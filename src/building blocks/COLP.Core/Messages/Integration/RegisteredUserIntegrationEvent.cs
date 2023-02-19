namespace COLP.Core.Messages.Integration
{
    public class RegisteredUserIntegrationEvent : IntegrationEvent
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public string LastName { get; private set; }

        public RegisteredUserIntegrationEvent(Guid id, string name, string lastName)
        {
            Id = id;
            Name = name;
            LastName = lastName;
        }
    }
}
