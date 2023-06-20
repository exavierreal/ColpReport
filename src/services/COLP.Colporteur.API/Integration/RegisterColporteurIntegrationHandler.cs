using COLP.Core.Mediator;
using COLP.Core.Messages.Integration;
using COLP.MessageBus;
using COLP.Person.API.Application.Commands;
using FluentValidation.Results;

namespace COLP.Person.API.Integration
{
    public class RegisterColporteurIntegrationHandler : BackgroundService
    {
        private readonly IMessageBus _bus;
        private readonly IServiceProvider _serviceProvider;

        public RegisterColporteurIntegrationHandler(IServiceProvider serviceProvider, IMessageBus bus)
        {
            _serviceProvider = serviceProvider;
            _bus = bus;
        }

        private void SetResponder()
        {
            _bus.RespondAsync<RegisteredUserIntegrationEvent, ResponseMessage>(async request => await RegisterColporteur(request));

            _bus.advancedBus.Connected += OnConnect;
        }

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            SetResponder();

            return Task.CompletedTask;
        }

        private void OnConnect(object s, EventArgs e)
        {
            _bus.RespondAsync<RegisteredUserIntegrationEvent, ResponseMessage>(async request => await RegisterColporteur(request));
        }

        private async Task<ResponseMessage> RegisterColporteur(RegisteredUserIntegrationEvent message)
        {
            var colporteurCommand = new RegisterColporteurCommand(message.Id, message.Name, message.LastName);
            ValidationResult success;

            using (var scope = _serviceProvider.CreateScope())
            {
                var mediator = scope.ServiceProvider.GetRequiredService<IMediatorHandler>();
                success = await mediator.SendCommand(colporteurCommand);
            }

            return new ResponseMessage(success);
        }
    }
}
