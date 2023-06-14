using COLP.Person.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace COLP.Person.API.Data.Mappings
{
    public class ColporteurAddressMapping : IEntityTypeConfiguration<ColporteurAddress>
    {
        public void Configure(EntityTypeBuilder<ColporteurAddress> builder)
        {
            builder.HasKey(ca => ca.Id);
            builder.Property(ca => ca.Address).HasColumnType("varchar(255)");
            builder.Property(ca => ca.Complement).HasColumnType("varchar(255)");
            builder.Property(ca => ca.District).HasColumnType("varchar(100)");
            builder.Property(ca => ca.Cep).HasColumnType("varchar(8)");
            builder.Property(ca => ca.City).HasColumnType("varchar(100)");
            builder.Property(ca => ca.UF).HasColumnType("varchar(2)");

            builder.ToTable("ColporteurAddress");
        }
    }
}
