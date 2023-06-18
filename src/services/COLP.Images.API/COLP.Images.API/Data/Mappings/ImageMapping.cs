using COLP.Images.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace COLP.Images.API.Data.Mappings
{
    public class ImageMapping : IEntityTypeConfiguration<Image>
    {
        public void Configure(EntityTypeBuilder<Image> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Filename).IsRequired().HasColumnType("varchar(255)");
            builder.Property(x => x.ImageData).IsRequired().HasColumnType("varbinary(200000000)").HasConversion(x => x, x => x);
            builder.Property(x => x.IsProfileImageActive).HasColumnType("bit");
        }
    }
}
