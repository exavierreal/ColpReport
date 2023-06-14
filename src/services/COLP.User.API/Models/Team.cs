using COLP.Core.DomainObjects;
using COLP.Images.API.Models;

namespace COLP.Management.API.Models
{
    public class Team : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public Guid? ImageId { get; private set; }
        public Image Image { get; private set; }
        public Guid AssociationId { get; private set; }
        public Association Association { get; private set; }

        protected Team() { }

        public Team(Guid id, string name, Guid associationId, Guid? imageId)
        {
            Id = id;
            Name = name;
            AssociationId = associationId;
            ImageId = imageId;
        }
        
    }
}
