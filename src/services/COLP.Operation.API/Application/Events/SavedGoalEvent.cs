using COLP.Core.Messages;

namespace COLP.Operation.API.Application.Events
{
    public class SavedGoalEvent : Event
    {
        public decimal Value { get; private set; }
        public string Name { get; private set; }

        public SavedGoalEvent(decimal value, string name)
        {
            Value = value;
            Name = name;
        }
    }
}
