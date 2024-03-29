﻿using COLP.Management.API.Models;
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
            builder.HasOne(x => x.Image).WithMany().HasForeignKey(x => x.ImageId).HasPrincipalKey(x => x.Id).OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(x => x.Goals).WithOne().HasForeignKey("TeamId");
            builder.HasMany(x => x.Colporteurs).WithOne().HasForeignKey(x => x.TeamId).HasPrincipalKey(x => x.Id).OnDelete(DeleteBehavior.SetNull);

            builder.ToTable("Team");
        }
    }
}
