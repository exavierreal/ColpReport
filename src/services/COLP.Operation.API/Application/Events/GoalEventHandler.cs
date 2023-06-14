using MediatR;

namespace COLP.Operation.API.Application.Events
{
    public class GoalEventHandler : INotificationHandler<SavedGoalEvent>
    {
        public Task Handle(SavedGoalEvent notification, CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
