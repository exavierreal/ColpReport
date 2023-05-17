using COLP.Core.Data;
using COLP.Core.Messages;
using COLP.Management.API.Models;
using FluentValidation.Results;
using Microsoft.EntityFrameworkCore;

namespace COLP.Management.API.Data
{
    public class ManagementContext : DbContext, IUnitOfWork
    {
        public ManagementContext(DbContextOptions<ManagementContext> options) : base(options)
        {

        }

        public DbSet<Team> Teams { get; set; }
        public DbSet<Union> Unions { get; set; }
        public DbSet<Association> Associations { get; set; }
        public DbSet<Division> Divisions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var property in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetProperties().Where(p => p.ClrType == typeof(string))))
                property.SetColumnType("varchar(100)");

            modelBuilder.Ignore<Event>();
            modelBuilder.Ignore<ValidationResult>();

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ManagementContext).Assembly);
        }

        public async Task<bool> Commit()
        {
            return await base.SaveChangesAsync() > 0;
        }
    }
}
