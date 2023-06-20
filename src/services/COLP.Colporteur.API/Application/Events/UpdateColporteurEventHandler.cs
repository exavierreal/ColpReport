using MediatR;

namespace COLP.Person.API.Application.Events
{
    public class UpdateColporteurEventHandler : INotificationHandler<UpdateColporteurEvent>
    {
        public Task Handle(UpdateColporteurEvent notification, CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
