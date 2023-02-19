using COLP.Core.Mediator;
using COLP.Core.Messages.Integration;
using COLP.MessageBus;
using COLP.Person.API.Application.Commands;
using FluentValidation.Results;

namespace COLP.Person.API.Services
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

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
             _bus.RespondAsync<RegisteredUserIntegrationEvent, ResponseMessage>(async request => await RegisterColporteur(request));

            return Task.CompletedTask;
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
