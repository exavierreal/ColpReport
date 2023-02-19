using COLP.Core.DomainObjects;

namespace COLP.Person.API.Models
{
    public class ColporteurAddress : Entity
    {
        public string Address { get; private set; }
        public string Number { get; private set; }
        public string Complement { get; private set; }
        public string District { get; private set; }
        public string Cep { get; private set; }
        public string City { get; private set; }
        public string UF { get; private set; }
        public Guid ColporteurId { get; private set; }

        public Colporteur Colporteur { get; protected set; }

        public ColporteurAddress() {}

        public ColporteurAddress(string address, string number, string complement, string district, string cep, string city, string uf)
        {
            Address = address;
            Number = number;
            Complement = complement;
            District = district;
            Cep = cep;
            City = city;
            UF = uf;
        }
    }
}
