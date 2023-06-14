using COLP.Core.Messages;

namespace COLP.Operation.API.Application.Events
{
    public class SavedGoalEvent : Event
    {
        public Guid? TeamId { get; private set; }
        public Guid? ColporteurId { get; private set; }
        public decimal Value { get; private set; }

        public SavedGoalEvent(Guid aggregateId, decimal value, Guid? teamId, Guid? colporteurId)
        {
            AggregateId = aggregateId;
            TeamId = teamId;
            ColporteurId = colporteurId;
            Value = value;
        }
    }
}
