using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace COLP.Person.API.Migrations
{
    public partial class AddingCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false),
                    Acronym = table.Column<string>(type: "varchar(10)", maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ColporteurCategories",
                columns: table => new
                {
                    CategoriesId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ColporteursId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ColporteurCategories", x => new { x.CategoriesId, x.ColporteursId });
                    table.ForeignKey(
                        name: "FK_ColporteurCategories_Categories_CategoriesId",
                        column: x => x.CategoriesId,
                        principalTable: "Categories",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ColporteurCategories_Colporteur_ColporteursId",
                        column: x => x.ColporteursId,
                        principalTable: "Colporteur",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ColporteurCategories_ColporteursId",
                table: "ColporteurCategories",
                column: "ColporteursId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ColporteurCategories");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
