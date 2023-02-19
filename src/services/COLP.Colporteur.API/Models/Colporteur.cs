using COLP.Core.DomainObjects;

namespace COLP.Person.API.Models
{
    public class Colporteur : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public string LastName { get; private set; }
        public string PhoneNumber { get; private set; }
        public string CPF { get; private set; }
        public string RG { get; private set; }
        public string ShirtSize { get; private set; }
        public bool isActive { get; private set; }
        public ColporteurAddress Address { get; private set; }

        protected Colporteur() { }

        public Colporteur(Guid id, string name, string lastName)
        {
            Id = id;
            Name = name;
            LastName = lastName;
            isActive = true;
        }
    }
}
