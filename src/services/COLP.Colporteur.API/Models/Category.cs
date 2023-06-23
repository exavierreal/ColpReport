using COLP.Core.DomainObjects;

namespace COLP.Person.API.Models
{
    public class Category : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public string Acronym { get; private set; }
        public int Sequential { get; private set; }
        public ICollection<Colporteur> Colporteurs { get; private set; }

        protected Category() { }

        public Category(Guid id, string name, string acronym)
        {
            Id = id;
            Name = name;
            Acronym = acronym;
        }
    }
}
