using COLP.Management.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace COLP.Management.API.Data.Mappings
{
    public class DivisionMapping : IEntityTypeConfiguration<DivisionModel>
    {
        public void Configure(EntityTypeBuilder<DivisionModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired().HasColumnType("varchar(600)");
            builder.Property(x => x.Acronym).IsRequired().HasColumnType("varchar(10)");

            builder.ToTable("Division");
        }
    }
}
