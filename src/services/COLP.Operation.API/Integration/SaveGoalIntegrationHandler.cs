using COLP.Core.Mediator;
using COLP.Core.Messages.Integration;
using COLP.Operation.API.Application.Commands;
using COLP.MessageBus;
using FluentValidation.Results;

namespace COLP.Operation.API.Integration
{
    public class SaveGoalIntegrationHandler : BackgroundService
    {
        private readonly IMessageBus _bus;
        private readonly IServiceProvider _serviceProvider;

        public SaveGoalIntegrationHandler(IMessageBus bus, IServiceProvider serviceProvider)
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
            var goalCommand = new SaveGoalCommand(message.GoalValue, message.Name, message.TeamId, message.ColporteurId, message.GoalId);
            ValidationResult hasSuccessOnSaveTheGoal;

            using (var scope = _serviceProvider.CreateScope())
            {
                var mediator = scope.ServiceProvider.GetRequiredService<IMediatorHandler>();
                hasSuccessOnSaveTheGoal = await mediator.SendCommand(goalCommand);
            }

            return new ResponseMessage(hasSuccessOnSaveTheGoal);
        }
    }
}
