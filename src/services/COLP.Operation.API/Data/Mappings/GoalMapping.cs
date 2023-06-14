using COLP.Operation.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace COLP.Operation.API.Data.Mappings
{
    public class GoalMapping : IEntityTypeConfiguration<Goal>
    {
        public void Configure(EntityTypeBuilder<Goal> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Value).IsRequired().HasColumnType("decimal(10,2)");
            builder.Property(x => x.Name).IsRequired();
        }
    }
}
