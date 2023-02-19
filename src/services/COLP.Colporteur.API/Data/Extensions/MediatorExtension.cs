using COLP.Core.DomainObjects;
using COLP.Core.Mediator;
using Microsoft.EntityFrameworkCore;

namespace COLP.Person.API.Data.Extensions
{
    public static class MediatorExtension
    {
        public static async Task PublishEvents<T>(this IMediatorHandler mediator, T ctx) where T : DbContext
        {
            var domainEntities = ctx.ChangeTracker.Entries<Entity>().Where(x => x.Entity.Notifications != null && x.Entity.Notifications.Any());
            var domainEvents = domainEntities.SelectMany(x => x.Entity.Notifications).ToList();

            domainEntities.ToList().ForEach(entity => entity.Entity.ClearEvents());

            var tasks = domainEvents.Select(async (domainEvent) =>
            {
                await mediator.PublishEvent(domainEvent);
            });

            await Task.WhenAll(tasks);
        }
    }
}
