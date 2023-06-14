using COLP.Core.DomainObjects;

namespace COLP.Management.API.Models
{
    public class Division : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public string Acronym { get; private set; }
        public List<Union> Unions { get; private set; }

        protected Division() { }

        public Division(string name, string acronym)
        {
            Name = name;
            Acronym = acronym;
        }
    }
}
