using COLP.Images.API.Models;
using COLP.Management.API.Models;
using COLP.Operation.API.Models;
using Microsoft.EntityFrameworkCore;

namespace COLP.Management.API.Data.Mappings
{
    public class TeamMapping : IEntityTypeConfiguration<Team>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Team> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired().HasColumnType("varchar(255)");

            builder.HasOne(x => x.Association).WithMany(x => x.Teams);
            builder.HasOne(x => x.Image).WithOne().HasForeignKey<Image>(x => x.Id);

            builder.HasMany(x => x.Goals).WithOne().HasForeignKey("TeamId");

            builder.ToTable("Team");
        }
    }
}
