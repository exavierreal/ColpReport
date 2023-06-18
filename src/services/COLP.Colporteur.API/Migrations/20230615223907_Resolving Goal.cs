using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace COLP.Person.API.Migrations
{
    public partial class ResolvingGoal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ColporteurId",
                table: "Goal",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Goal_ColporteurId",
                table: "Goal",
                column: "ColporteurId",
                principalTable: "Colporteur",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.CreateIndex(
                name:"IX_Goal_ColporteurId",
                table: "Goal",
                column: "ColporteurId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
        name: "FK_Goal_ColporteurId",
        table: "Goal");

            migrationBuilder.DropIndex(
                name: "IX_Goal_ColporteurId",
                table: "Goal");

            migrationBuilder.DropColumn(
                name: "ColporteurId",
                table: "Goal");
        }
    }
}
