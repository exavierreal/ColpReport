﻿// <auto-generated />
using System;
using COLP.Person.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace COLP.Person.API.Migrations
{
    [DbContext(typeof(ColporteurContext))]
    partial class ColporteurContextModelSnapshot : ModelSnapshot
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
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Filename")
                        .HasColumnType("varchar(100)");

                    b.Property<byte[]>("ImageData")
                        .HasColumnType("varbinary(max)");

                    b.Property<bool>("IsProfileImageActive")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Image");
                });

            modelBuilder.Entity("COLP.Operation.API.Models.Goal", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("ColporteurId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .HasColumnType("varchar(100)");

                    b.Property<Guid?>("TeamId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<decimal>("Value")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.HasIndex("ColporteurId");

                    b.ToTable("Goal");
                });

            modelBuilder.Entity("COLP.Person.API.Models.Category", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Acronym")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("varchar(10)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.Property<int>("Sequential")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("Sequential")
                        .IsUnique();

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("COLP.Person.API.Models.Colporteur", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("CPF")
                        .HasColumnType("varchar(11)");

                    b.Property<Guid?>("ImageId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("varchar(20)");

                    b.Property<string>("RG")
                        .HasColumnType("varchar(15)");

                    b.Property<string>("ShirtSize")
                        .HasColumnType("varchar(5)");

                    b.Property<DateTime?>("SinceDate")
                        .HasColumnType("datetime");

                    b.Property<Guid?>("TeamId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ImageId");

                    b.ToTable("Colporteur", (string)null);
                });

            modelBuilder.Entity("COLP.Person.API.Models.ColporteurAddress", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Address")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Cep")
                        .HasColumnType("varchar(8)");

                    b.Property<string>("City")
                        .HasColumnType("varchar(100)");

                    b.Property<Guid>("ColporteurId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Complement")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("District")
                        .HasColumnType("varchar(100)");

                    b.Property<string>("Number")
                        .HasColumnType("varchar(100)");

                    b.Property<string>("UF")
                        .HasColumnType("varchar(2)");

                    b.HasKey("Id");

                    b.HasIndex("ColporteurId")
                        .IsUnique();

                    b.ToTable("ColporteurAddress", (string)null);
                });

            modelBuilder.Entity("COLP.Person.API.Models.ColporteurCategory", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CategoryId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ColporteurId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("ColporteurId");

                    b.ToTable("ColporteurCategories");
                });

            modelBuilder.Entity("COLP.Operation.API.Models.Goal", b =>
                {
                    b.HasOne("COLP.Person.API.Models.Colporteur", null)
                        .WithMany("Goals")
                        .HasForeignKey("ColporteurId");
                });

            modelBuilder.Entity("COLP.Person.API.Models.Colporteur", b =>
                {
                    b.HasOne("COLP.Images.API.Models.Image", "Image")
                        .WithMany()
                        .HasForeignKey("ImageId")
                        .OnDelete(DeleteBehavior.SetNull);

                    b.Navigation("Image");
                });

            modelBuilder.Entity("COLP.Person.API.Models.ColporteurAddress", b =>
                {
                    b.HasOne("COLP.Person.API.Models.Colporteur", "Colporteur")
                        .WithOne("Address")
                        .HasForeignKey("COLP.Person.API.Models.ColporteurAddress", "ColporteurId")
                        .IsRequired();

                    b.Navigation("Colporteur");
                });

            modelBuilder.Entity("COLP.Person.API.Models.ColporteurCategory", b =>
                {
                    b.HasOne("COLP.Person.API.Models.Category", "Category")
                        .WithMany("ColporteurCategories")
                        .HasForeignKey("CategoryId")
                        .IsRequired();

                    b.HasOne("COLP.Person.API.Models.Colporteur", "Colporteur")
                        .WithMany("ColporteurCategories")
                        .HasForeignKey("ColporteurId")
                        .IsRequired();

                    b.Navigation("Category");

                    b.Navigation("Colporteur");
                });

            modelBuilder.Entity("COLP.Person.API.Models.Category", b =>
                {
                    b.Navigation("ColporteurCategories");
                });

            modelBuilder.Entity("COLP.Person.API.Models.Colporteur", b =>
                {
                    b.Navigation("Address");

                    b.Navigation("ColporteurCategories");

                    b.Navigation("Goals");
                });
#pragma warning restore 612, 618
        }
    }
}
