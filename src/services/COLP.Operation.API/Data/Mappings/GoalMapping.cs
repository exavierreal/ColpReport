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
            
            //builder.HasOne<Colporteur>(x => x.ColporteurId)
        }
    }
}
