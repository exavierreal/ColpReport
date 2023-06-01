﻿using COLP.Images.API.Models;
using COLP.Management.API.Models;
using Microsoft.EntityFrameworkCore;

namespace COLP.Management.API.Data.Mappings
{
    public class TeamMapping : IEntityTypeConfiguration<TeamModel>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<TeamModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired().HasColumnType("varchar(255)");

            builder.HasOne(x => x.Association).WithMany(x => x.Teams);
            builder.HasOne(x => x.Image).WithOne().HasForeignKey<Image>(x => x.Id);

            builder.ToTable("Team");
        }
    }
}
