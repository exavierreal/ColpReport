using MediatR;

namespace COLP.Person.API.Application.Events
{
    public class ColporteurEventHandler : INotificationHandler<RegisteredColporteurEvent>
    {
        public Task Handle(RegisteredColporteurEvent notification, CancellationToken cancellationToken)
        {
            // Enviar evento de confirmação

            return Task.CompletedTask;
        }
    }
}
