using COLP.Person.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace COLP.Person.API.Data.Mappings
{
    public class ColporteurCategoryMapping : IEntityTypeConfiguration<ColporteurCategory>
    {
        public void Configure(EntityTypeBuilder<ColporteurCategory> builder)
        {
            builder.HasKey(cc => cc.Id);
            builder.Property(cc => cc.Id).ValueGeneratedOnAdd();

            builder.HasOne(cc => cc.Colporteur).WithMany(c => c.ColporteurCategories).HasForeignKey(cc => cc.ColporteurId);
            builder.HasOne(cc => cc.Category).WithMany(c => c.ColporteurCategories).HasForeignKey(cc => cc.CategoryId);
        }
    }
}
