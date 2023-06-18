using COLP.Person.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace COLP.Person.API.Data.Mappings
{
    public class ColporteurMapping : IEntityTypeConfiguration<Colporteur>
    {
        public void Configure(EntityTypeBuilder<Colporteur> builder)
        {
            builder.HasKey(c => c.Id);
            builder.Property(c => c.Name).IsRequired().HasColumnType("varchar(255)");
            builder.Property(c => c.LastName).IsRequired().HasColumnType("varchar(255)");
            builder.Property(c => c.PhoneNumber).HasColumnType("varchar(20)");
            builder.Property(c => c.CPF).HasColumnType("varchar(11)");
            builder.Property(c => c.RG).HasColumnType("varchar(15)");
            builder.Property(c => c.ShirtSize).HasColumnType("varchar(5)");
            builder.Property(c => c.isActive).HasConversion<int>();

            builder.HasOne(c => c.Address).WithOne(c => c.Colporteur);
            builder.HasMany(x => x.Goals).WithOne().HasForeignKey("ColporteurId");

            builder.ToTable("Colporteur");
        }
    }
}
