using COLP.Management.API.Models;

namespace COLP.Management.API.Events
{
    public class RegisteredTeamIntegrationEvent
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public Association Association { get; private set; }

        public RegisteredTeamIntegrationEvent(Guid id, string name, Association association)
        {
            Id = id;
            Name = name;
            Association = association;
        }
    }
}
