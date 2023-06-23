using COLP.Core.Data;
using COLP.Core.Extensions;
using COLP.Core.Mediator;
using COLP.Core.Messages;
using COLP.Person.API.Models;
using FluentValidation.Results;
using Microsoft.EntityFrameworkCore;

namespace COLP.Person.API.Data
{
    public class ColporteurContext : DbContext, IUnitOfWork
    {
        private readonly IMediatorHandler _mediatorHandler;

        public ColporteurContext(DbContextOptions<ColporteurContext> options, IMediatorHandler mediatorHandler) : base(options)
        {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
            ChangeTracker.AutoDetectChangesEnabled = false;
            _mediatorHandler = mediatorHandler;
        }

        public DbSet<Colporteur> Colporteurs { get; set; }
        public DbSet<ColporteurAddress> ColporteurAddresses { get; set; }
        public DbSet<Category> Categories { get; set; } 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Ignore<ValidationResult>();
            modelBuilder.Ignore<Event>();

            foreach (var property in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetProperties().Where(p => p.ClrType == typeof(string))))
                property.SetColumnType("varchar(100)");

            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
                relationship.DeleteBehavior = DeleteBehavior.ClientSetNull;

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ColporteurContext).Assembly);
        }

        public async Task<bool> Commit()
        {
            try { 
                var success = await base.SaveChangesAsync() > 0;
            
                if (success)
                    await _mediatorHandler.PublishEvents(this);

                return success;
                }
            catch
            {
                throw;
            }
        }
    }
}
