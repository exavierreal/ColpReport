using COLP.Management.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace COLP.Management.API.Data.Mappings
{
    public class AssociationMapping : IEntityTypeConfiguration<Association>
    {
        public void Configure(EntityTypeBuilder<Association> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired().HasColumnType("varchar(600)");
            builder.Property(x => x.Acronym).IsRequired().HasColumnType("varchar(10)");

            builder.HasOne(x => x.Union).WithMany(x => x.Associations);

            builder.ToTable("Association");
        }
    }
}
