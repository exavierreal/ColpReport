using COLP.Core.DomainObjects;

namespace COLP.Management.API.Models
{
    public class Association : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public string Acronym { get; private set; }
        public Union Union { get; private set; }
        public Guid UnionId { get; private set; }

        public List<Team> Teams { get; private set; }

        protected Association() { }

        public Association(Guid id, string name, string acronym)
        {
            Id = id;
            Name = name;
            Acronym = acronym;
        }
    }
}
