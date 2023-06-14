using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace COLP.Person.API.Migrations
{
    public partial class Colporteur : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Colporteur",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "varchar(255)", nullable: false),
                    LastName = table.Column<string>(type: "varchar(255)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "varchar(20)", nullable: true),
                    CPF = table.Column<string>(type: "varchar(11)", nullable: true),
                    RG = table.Column<string>(type: "varchar(15)", nullable: true),
                    ShirtSize = table.Column<string>(type: "varchar(5)", nullable: true),
                    isActive = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Colporteur", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ColporteurAddress",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Address = table.Column<string>(type: "varchar(255)", nullable: true),
                    Number = table.Column<string>(type: "varchar(100)", nullable: true),
                    Complement = table.Column<string>(type: "varchar(255)", nullable: true),
                    District = table.Column<string>(type: "varchar(100)", nullable: true),
                    Cep = table.Column<string>(type: "varchar(8)", nullable: true),
                    City = table.Column<string>(type: "varchar(100)", nullable: true),
                    UF = table.Column<string>(type: "varchar(2)", nullable: true),
                    ColporteurId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ColporteurAddress", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ColporteurAddress_Colporteur_ColporteurId",
                        column: x => x.ColporteurId,
                        principalTable: "Colporteur",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ColporteurAddress_ColporteurId",
                table: "ColporteurAddress",
                column: "ColporteurId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ColporteurAddress");

            migrationBuilder.DropTable(
                name: "Colporteur");
        }
    }
}
