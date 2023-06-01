using COLP.Core.DomainObjects;

namespace COLP.Management.API.Models
{
    public class UnionModel : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public string Acronym { get; private set; }
        public DivisionModel Division { get; private set; }
        public Guid DivisionId { get; private set; }

        public List<AssociationModel> Associations { get; private set; }

        protected UnionModel() { }

        public UnionModel(string name, string acronym)
        {
            Name = name;
            Acronym = acronym;
        }
    }
}
