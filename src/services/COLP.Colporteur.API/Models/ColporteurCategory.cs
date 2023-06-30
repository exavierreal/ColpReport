using COLP.Core.DomainObjects;

namespace COLP.Person.API.Models
{
    public class ColporteurCategory : Entity, IAggregateRoot
    {
        public Guid ColporteurId { get; private set; }
        public Colporteur Colporteur { get; private set; }
        public Guid CategoryId { get; private set; }
        public Category Category { get; private set; }

        public ColporteurCategory(Guid colporteurId, Guid categoryId)
        {
            ColporteurId = colporteurId;
            CategoryId = categoryId;
        }
    }
}
