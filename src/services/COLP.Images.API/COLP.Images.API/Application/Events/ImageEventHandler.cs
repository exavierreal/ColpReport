using MediatR;

namespace COLP.Images.API.Application.Events
{
    public class ImageEventHandler : INotificationHandler<SavedImageEvent>
    {
        public Task Handle(SavedImageEvent notification, CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
