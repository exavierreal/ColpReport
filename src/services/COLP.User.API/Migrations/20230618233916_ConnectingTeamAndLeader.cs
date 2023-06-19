using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace COLP.Management.API.Migrations
{
    public partial class ConnectingTeamAndLeader : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "TeamId",
                table: "Colporteur",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Colporteur_TeamId",
                table: "Colporteur",
                column: "TeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_Colporteur_Team_TeamId",
                table: "Colporteur",
                column: "TeamId",
                principalTable: "Team",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Colporteur_Team_TeamId",
                table: "Colporteur");

            migrationBuilder.DropIndex(
                name: "IX_Colporteur_TeamId",
                table: "Colporteur");

            migrationBuilder.DropColumn(
                name: "TeamId",
                table: "Colporteur");
        }
    }
}
