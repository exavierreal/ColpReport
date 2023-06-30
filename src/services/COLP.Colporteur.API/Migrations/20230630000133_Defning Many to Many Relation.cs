using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace COLP.Person.API.Migrations
{
    public partial class DefningManytoManyRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ColporteurCategories",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ColporteurId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CategoryId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ColporteurCategories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ColporteurCategories_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ColporteurCategories_Colporteur_ColporteurId",
                        column: x => x.ColporteurId,
                        principalTable: "Colporteur",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ColporteurCategories_CategoryId",
                table: "ColporteurCategories",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ColporteurCategories_ColporteurId",
                table: "ColporteurCategories",
                column: "ColporteurId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ColporteurCategories");
        }
    }
}
