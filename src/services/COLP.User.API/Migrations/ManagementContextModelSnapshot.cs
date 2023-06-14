﻿// <auto-generated />
using System;
using COLP.Management.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace COLP.Management.API.Migrations
{
    [DbContext(typeof(ManagementContext))]
    partial class ManagementContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.15")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("COLP.Images.API.Models.Image", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Filename")
                        .HasColumnType("varchar(100)");

                    b.Property<byte[]>("ImageData")
                        .HasColumnType("varbinary(max)");

                    b.HasKey("Id");

                    b.ToTable("Image");
                });

            modelBuilder.Entity("COLP.Management.API.Models.Association", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Acronym")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(600)");

                    b.Property<Guid>("UnionId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UnionId");

                    b.ToTable("Association", (string)null);
                });

            modelBuilder.Entity("COLP.Management.API.Models.Division", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Acronym")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(600)");

                    b.HasKey("Id");

                    b.ToTable("Division", (string)null);
                });

            modelBuilder.Entity("COLP.Management.API.Models.Team", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("AssociationId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("ImageId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("Id");

                    b.HasIndex("AssociationId");

                    b.ToTable("Team", (string)null);
                });

            modelBuilder.Entity("COLP.Management.API.Models.Union", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Acronym")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.Property<Guid>("DivisionId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(600)");

                    b.HasKey("Id");

                    b.HasIndex("DivisionId");

                    b.ToTable("Union", (string)null);
                });

            modelBuilder.Entity("COLP.Operation.API.Models.Goal", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .HasColumnType("varchar(100)");

                    b.Property<Guid?>("TeamId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<decimal>("Value")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("TeamId");

                    b.ToTable("Goal");
                });

            modelBuilder.Entity("COLP.Images.API.Models.Image", b =>
                {
                    b.HasOne("COLP.Management.API.Models.Team", null)
                        .WithOne("Image")
                        .HasForeignKey("COLP.Images.API.Models.Image", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("COLP.Management.API.Models.Association", b =>
                {
                    b.HasOne("COLP.Management.API.Models.Union", "Union")
                        .WithMany("Associations")
                        .HasForeignKey("UnionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Union");
                });

            modelBuilder.Entity("COLP.Management.API.Models.Team", b =>
                {
                    b.HasOne("COLP.Management.API.Models.Association", "Association")
                        .WithMany("Teams")
                        .HasForeignKey("AssociationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Association");
                });

            modelBuilder.Entity("COLP.Management.API.Models.Union", b =>
                {
                    b.HasOne("COLP.Management.API.Models.Division", "Division")
                        .WithMany("Unions")
                        .HasForeignKey("DivisionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Division");
                });

            modelBuilder.Entity("COLP.Operation.API.Models.Goal", b =>
                {
                    b.HasOne("COLP.Management.API.Models.Team", null)
                        .WithMany("Goals")
                        .HasForeignKey("TeamId");
                });

            modelBuilder.Entity("COLP.Management.API.Models.Association", b =>
                {
                    b.Navigation("Teams");
                });

            modelBuilder.Entity("COLP.Management.API.Models.Division", b =>
                {
                    b.Navigation("Unions");
                });

            modelBuilder.Entity("COLP.Management.API.Models.Team", b =>
                {
                    b.Navigation("Goals");

                    b.Navigation("Image");
                });

            modelBuilder.Entity("COLP.Management.API.Models.Union", b =>
                {
                    b.Navigation("Associations");
                });
#pragma warning restore 612, 618
        }
    }
}
