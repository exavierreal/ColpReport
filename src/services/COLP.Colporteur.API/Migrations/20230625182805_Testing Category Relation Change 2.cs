using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace COLP.Person.API.Migrations
{
    public partial class TestingCategoryRelationChange2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ColporteurCategories_Categories_CategoryId",
                table: "ColporteurCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_ColporteurCategories_Colporteur_ColporteurId",
                table: "ColporteurCategories");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "ColporteurCategories",
                newName: "ColporteursId");

            migrationBuilder.RenameColumn(
                name: "ColporteurId",
                table: "ColporteurCategories",
                newName: "CategoriesId");

            migrationBuilder.RenameIndex(
                name: "IX_ColporteurCategories_CategoryId",
                table: "ColporteurCategories",
                newName: "IX_ColporteurCategories_ColporteursId");

            migrationBuilder.AddForeignKey(
                name: "FK_ColporteurCategories_Categories_CategoriesId",
                table: "ColporteurCategories",
                column: "CategoriesId",
                principalTable: "Categories",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ColporteurCategories_Colporteur_ColporteursId",
                table: "ColporteurCategories",
                column: "ColporteursId",
                principalTable: "Colporteur",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ColporteurCategories_Categories_CategoriesId",
                table: "ColporteurCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_ColporteurCategories_Colporteur_ColporteursId",
                table: "ColporteurCategories");

            migrationBuilder.RenameColumn(
                name: "ColporteursId",
                table: "ColporteurCategories",
                newName: "CategoryId");

            migrationBuilder.RenameColumn(
                name: "CategoriesId",
                table: "ColporteurCategories",
                newName: "ColporteurId");

            migrationBuilder.RenameIndex(
                name: "IX_ColporteurCategories_ColporteursId",
                table: "ColporteurCategories",
                newName: "IX_ColporteurCategories_CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_ColporteurCategories_Categories_CategoryId",
                table: "ColporteurCategories",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ColporteurCategories_Colporteur_ColporteurId",
                table: "ColporteurCategories",
                column: "ColporteurId",
                principalTable: "Colporteur",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
