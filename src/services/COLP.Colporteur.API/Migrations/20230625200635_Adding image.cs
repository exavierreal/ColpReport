using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace COLP.Person.API.Migrations
{
    public partial class Addingimage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ImageId",
                table: "Colporteur",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Colporteur_ImageId",
                table: "Colporteur",
                column: "ImageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Colporteur_Image_ImageId",
                table: "Colporteur",
                column: "ImageId",
                principalTable: "Image",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Colporteur_Image_ImageId",
                table: "Colporteur");

            migrationBuilder.DropIndex(
                name: "IX_Colporteur_ImageId",
                table: "Colporteur");

            migrationBuilder.DropColumn(
                name: "ImageId",
                table: "Colporteur");
        }
    }
}
