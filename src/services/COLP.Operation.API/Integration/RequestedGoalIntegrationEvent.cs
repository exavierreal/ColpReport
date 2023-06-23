using COLP.Core.Messages.Integration;

namespace COLP.Operation.API.Integration
{
    public class RequestedGoalIntegrationEvent : IntegrationEvent
    {
        public decimal GoalValue { get; private set; }
        public string Name { get; private set; }
        public Guid? TeamId { get; private set; }
        public Guid? ColporteurId { get; private set; }
        public Guid? GoalId { get; private set; }

        public RequestedGoalIntegrationEvent(decimal goalValue, string name, Guid? teamId, Guid? colporteurId, Guid? goalId)
        {
            GoalValue = goalValue;
            Name = name;
            TeamId = teamId;
            ColporteurId = colporteurId;
            GoalId = goalId;
        }
    }
}
