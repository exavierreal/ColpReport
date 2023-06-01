using COLP.Core.DomainObjects;

namespace COLP.Management.API.Models
{
    public class AssociationModel : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public string Acronym { get; private set; }
        public UnionModel Union { get; private set; }
        public Guid UnionId { get; private set; }

        public List<TeamModel> Teams { get; private set; }

        protected AssociationModel() { }

        public AssociationModel(Guid id, string name, string acronym)
        {
            Id = id;
            Name = name;
            Acronym = acronym;
        }
    }
}
