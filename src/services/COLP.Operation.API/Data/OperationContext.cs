using COLP.Core.Data;
using COLP.Core.Extensions;
using COLP.Core.Mediator;
using COLP.Core.Messages;
using COLP.Operation.API.Models;
using FluentValidation.Results;
using Microsoft.EntityFrameworkCore;

namespace COLP.Operation.API.Data
{
    public class OperationContext : DbContext, IUnitOfWork
    {
        private readonly IMediatorHandler _mediatorHandler;

        public OperationContext(DbContextOptions<OperationContext> options, IMediatorHandler mediatorHandler) : base(options)
        {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
            ChangeTracker.AutoDetectChangesEnabled = false;
            _mediatorHandler = mediatorHandler;
        }

        public DbSet<Goal> Goal { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var property in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetProperties().Where(p => p.ClrType == typeof(string))))
                property.SetColumnType("varchar(100)");

            modelBuilder.Ignore<Event>();
            modelBuilder.Ignore<ValidationResult>();

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(OperationContext).Assembly);
        }

        public async Task<bool> Commit()
        {
            var success = await base.SaveChangesAsync() > 0;

            if (success) await _mediatorHandler.PublishEvents(this);

            return success;
        }
    }
}
