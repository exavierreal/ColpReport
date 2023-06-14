using COLP.Core.DomainObjects;

namespace COLP.Management.API.Models
{
    public class Union : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public string Acronym { get; private set; }
        public Division Division { get; private set; }
        public Guid DivisionId { get; private set; }

        public List<Association> Associations { get; private set; }

        protected Union() { }

        public Union(string name, string acronym)
        {
            Name = name;
            Acronym = acronym;
        }
    }
}
