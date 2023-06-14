using COLP.Core.Messages.Integration;

namespace COLP.Operation.API.Integration
{
    public class RequestedGoalIntegrationEvent : IntegrationEvent
    {
        public decimal GoalValue { get; private set; }
        public string Name { get; private set; }

        public RequestedGoalIntegrationEvent(decimal goalValue, string name)
        {
            GoalValue = goalValue;
            Name = name;
        }
    }
}
