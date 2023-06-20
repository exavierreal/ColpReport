using COLP.Core.Messages.Integration;

namespace COLP.Person.API.Integration
{
    public class RequestedColporteurIntegrationEvent : IntegrationEvent
    {
        public Guid UserId { get; private set; }
        public Guid TeamId { get; private set; }

        public RequestedColporteurIntegrationEvent(Guid userId, Guid teamId)
        {
            UserId = userId;
            TeamId = teamId;
        }
    }
}
