using COLP.Core.Mediator;
using COLP.Core.Messages.Integration;
using COLP.Operation.API.Application.Commands;
using COLP.MessageBus;
using FluentValidation.Results;
using COLP.Core.Messages;

namespace COLP.Operation.API.Integration
{
    public class GoalIntegrationHandler : BackgroundService
    {
        private readonly IMessageBus _bus;
        private readonly IServiceProvider _serviceProvider;

        public GoalIntegrationHandler(IMessageBus bus, IServiceProvider serviceProvider)
        {
            _bus = bus;
            _serviceProvider = serviceProvider;
        }

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            SetResponder();
             return Task.CompletedTask;
        }

        private void SetResponder()
        {
            _bus.RespondAsync<RequestedGoalIntegrationEvent, ResponseMessage>(async request => await(SaveGoal(request)));
            _bus.advancedBus.Connected += OnConnect;
        }

        private void OnConnect(object s, EventArgs e)
        {
            _bus.RespondAsync<RequestedGoalIntegrationEvent, ResponseMessage>(async request => await (SaveGoal(request)));
        }

        private async Task<ResponseMessage> SaveGoal(RequestedGoalIntegrationEvent message)
        {
            Command goalCommand = new SaveGoalCommand(message.GoalValue, message.Name, message.TeamId, message.ColporteurId);
            ValidationResult hasSuccessOnSaveTheGoal;

            if (message.GoalId != null)
            {
                goalCommand = new UpdateGoalCommand(message.GoalValue, message.Name, message.TeamId, message.ColporteurId, (Guid)message.GoalId);
            }

            using (var scope = _serviceProvider.CreateScope())
            {
                var mediator = scope.ServiceProvider.GetRequiredService<IMediatorHandler>();
                hasSuccessOnSaveTheGoal = await mediator.SendCommand(goalCommand);
            }

            return new ResponseMessage(hasSuccessOnSaveTheGoal);


        }
    }
}
