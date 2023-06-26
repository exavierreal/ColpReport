using COLP.Core.Messages;

namespace COLP.Operation.API.Application.Events
{
    public class SavedGoalEvent : Event
    {
        public decimal Value { get; private set; }
        public string Name { get; private set; }
        public Guid? TeamId { get; private set; }
        public Guid? ColporteurId { get; private set; }

        public SavedGoalEvent(decimal value, string name, Guid? teamId, Guid? colporteurId)
        {
            Value = value;
            Name = name;
            TeamId = teamId;
            ColporteurId = colporteurId;
        }
    }
}
