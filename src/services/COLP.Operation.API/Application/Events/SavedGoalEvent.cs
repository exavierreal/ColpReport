using COLP.Core.Messages;

namespace COLP.Operation.API.Application.Events
{
    public class SavedGoalEvent : Event
    {
        public decimal Value { get; private set; }
        public string Name { get; private set; }
        public Guid? TeamId { get; private set; }
        public Guid? GoalId { get; private set; }

        public SavedGoalEvent(decimal value, string name, Guid? teamId, Guid? goalId)
        {
            Value = value;
            Name = name;
            TeamId = teamId;
            GoalId = goalId;
        }
    }
}
