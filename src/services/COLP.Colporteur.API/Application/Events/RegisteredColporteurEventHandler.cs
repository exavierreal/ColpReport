using MediatR;

namespace COLP.Person.API.Application.Events
{
    public class RegisteredColporteurEventHandler : INotificationHandler<RegisteredColporteurEvent>
    {
        public Task Handle(RegisteredColporteurEvent notification, CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
