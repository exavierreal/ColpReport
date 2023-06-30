using COLP.Core.DomainObjects;
using COLP.Images.API.Models;
using COLP.Operation.API.Models;
using COLP.Person.API.Models;

namespace COLP.Management.API.Models
{
    public class Team : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public Guid? ImageId { get; private set; }
        public Image Image { get; private set; }
        public Guid AssociationId { get; private set; }
        public Association Association { get; private set; }
        public ICollection<Goal> Goals { get; private set; }
        public ICollection<Colporteur> Colporteurs { get; private set; }

        protected Team() { }

        public Team(Guid id, string name, Guid associationId, Guid? imageId)
        {
            Id = id;
            Name = name;
            AssociationId = associationId;
            ImageId = imageId;
        }

        public void UpdateTeamProperties(string name, Guid associationId, Guid? imageId)
        {
            Name = name;
            AssociationId = associationId;
            ImageId = imageId;
        }
        
    }
}
