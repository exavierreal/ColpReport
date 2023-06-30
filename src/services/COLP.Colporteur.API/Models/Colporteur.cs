using COLP.Core.DomainObjects;
using COLP.Images.API.Models;
using COLP.Operation.API.Models;

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
        public bool IsActive { get; private set; }
        public DateTime? SinceDate { get; private set; }
        public ColporteurAddress Address { get; private set; }
        public Guid? TeamId { get; private set; }
        public Guid? ImageId { get; private set; }
        public Image Image { get; private set; }

        public ICollection<Goal> Goals { get; private set; }
        public ICollection<ColporteurCategory> ColporteurCategories { get; private set; }

        protected Colporteur() { }

        public Colporteur(Guid id, string name, string lastName)
        {
            Id = id;
            Name = name;
            LastName = lastName;
            IsActive = true;
        }

        public Colporteur(Guid id, string name, string lastName, string phoneNumber, string cpf, string rg, string shirtSize, bool isActive, DateTime? sinceDate, Guid? imageId, Guid teamId)
        {
            Id = id;
            Name = name;
            LastName = lastName;
            PhoneNumber = phoneNumber;
            CPF = cpf;
            RG = rg;
            ShirtSize = shirtSize;
            IsActive = isActive;
            SinceDate = sinceDate;
            ImageId = imageId;
            TeamId = teamId;
        }

        public Colporteur(Guid id, ColporteurAddress address)
        {
            Id = id;
            Address = address;
        }

        public void SetImage(Image image)
        {
            Image = image;
        }

        
    }
}
