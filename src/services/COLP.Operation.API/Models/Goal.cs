using COLP.Core.DomainObjects;

namespace COLP.Operation.API.Models
{
    public class Goal : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public decimal Value { get; private set; }
        public Guid? TeamId { get; private set; }
        public Guid? ColporteurId { get; private set; }

        public Goal(decimal value, string name, Guid? teamId, Guid? colporteurId)
        {
            Value = value;
            Name = name;
            TeamId = teamId;
            ColporteurId = colporteurId;
        }
    }
}
