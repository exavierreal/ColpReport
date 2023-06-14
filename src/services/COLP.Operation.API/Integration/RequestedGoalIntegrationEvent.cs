using COLP.Core.Messages.Integration;

namespace COLP.Operation.API.Integration
{
    public class RequestedGoalIntegrationEvent : IntegrationEvent
    {
        public Guid? TeamId { get; private set; }
        public Guid? ColporteurId { get; private set; }
        public decimal GoalValue { get; private set; }
        public string Name { get; private set; }

        public RequestedGoalIntegrationEvent(Guid aggregateId, decimal goalValue, string name, Guid? teamId, Guid? colporteurId)
        {
            AggregateId = aggregateId;
            TeamId = teamId;
            ColporteurId = colporteurId;
            GoalValue = goalValue;
            Name = name;
        }
    }
}
