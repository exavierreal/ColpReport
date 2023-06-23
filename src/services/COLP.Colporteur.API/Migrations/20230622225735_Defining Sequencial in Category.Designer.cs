﻿// <auto-generated />
using System;
using COLP.Person.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace COLP.Person.API.Migrations
{
    [DbContext(typeof(ColporteurContext))]
    [Migration("20230622225735_Defining Sequencial in Category")]
    partial class DefiningSequencialinCategory
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.15")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("CategoryColporteur", b =>
                {
                    b.Property<Guid>("CategoriesId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ColporteursId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("CategoriesId", "ColporteursId");

                    b.HasIndex("ColporteursId");

                    b.ToTable("ColporteurCategories", (string)null);
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

                    b.Property<Guid?>("TeamId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

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

            modelBuilder.Entity("CategoryColporteur", b =>
                {
                    b.HasOne("COLP.Person.API.Models.Category", null)
                        .WithMany()
                        .HasForeignKey("CategoriesId")
                        .IsRequired();

                    b.HasOne("COLP.Person.API.Models.Colporteur", null)
                        .WithMany()
                        .HasForeignKey("ColporteursId")
                        .IsRequired();
                });

            modelBuilder.Entity("COLP.Operation.API.Models.Goal", b =>
                {
                    b.HasOne("COLP.Person.API.Models.Colporteur", null)
                        .WithMany("Goals")
                        .HasForeignKey("ColporteurId");
                });

            modelBuilder.Entity("COLP.Person.API.Models.ColporteurAddress", b =>
                {
                    b.HasOne("COLP.Person.API.Models.Colporteur", "Colporteur")
                        .WithOne("Address")
                        .HasForeignKey("COLP.Person.API.Models.ColporteurAddress", "ColporteurId")
                        .IsRequired();

                    b.Navigation("Colporteur");
                });

            modelBuilder.Entity("COLP.Person.API.Models.Colporteur", b =>
                {
                    b.Navigation("Address");

                    b.Navigation("Goals");
                });
#pragma warning restore 612, 618
        }
    }
}
