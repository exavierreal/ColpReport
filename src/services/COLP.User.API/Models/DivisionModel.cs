using COLP.Core.DomainObjects;

namespace COLP.Management.API.Models
{
    public class DivisionModel : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public string Acronym { get; private set; }
        public List<UnionModel> Unions { get; private set; }

        protected DivisionModel() { }

        public DivisionModel(string name, string acronym)
        {
            Name = name;
            Acronym = acronym;
        }
    }
}
