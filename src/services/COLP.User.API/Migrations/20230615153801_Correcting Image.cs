using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace COLP.Management.API.Migrations
{
    public partial class CorrectingImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Image_Team_Id",
                table: "Image");

            migrationBuilder.AddColumn<bool>(
                name: "IsProfileImageActive",
                table: "Image",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Team_ImageId",
                table: "Team",
                column: "ImageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Team_Image_ImageId",
                table: "Team",
                column: "ImageId",
                principalTable: "Image",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Team_Image_ImageId",
                table: "Team");

            migrationBuilder.DropIndex(
                name: "IX_Team_ImageId",
                table: "Team");

            migrationBuilder.DropColumn(
                name: "IsProfileImageActive",
                table: "Image");

            migrationBuilder.AddForeignKey(
                name: "FK_Image_Team_Id",
                table: "Image",
                column: "Id",
                principalTable: "Team",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
