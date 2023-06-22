using COLP.Person.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace COLP.Person.API.Data.Mappings
{
    public class CategoryMapping : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasKey(c => c.Id);
            builder.Property(c => c.Name).IsRequired().HasMaxLength(100);
            builder.Property(c => c.Acronym).IsRequired().HasMaxLength(10);

            builder.HasMany(c => c.Colporteurs).WithMany(c => c.Categories).UsingEntity(x => x.ToTable("ColporteurCategories"));
        }
    }
}
