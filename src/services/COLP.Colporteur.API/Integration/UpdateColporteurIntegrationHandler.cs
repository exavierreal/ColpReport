using COLP.Core.Mediator;
using COLP.Core.Messages.Integration;
using COLP.MessageBus;
using COLP.Person.API.Application.Commands;
using COLP.Person.API.Services;
using FluentValidation.Results;

namespace COLP.Person.API.Integration
{
    public class UpdateColporteurIntegrationHandler : BackgroundService
    {
        private readonly IMessageBus _bus;
        private readonly IServiceProvider _serviceProvider;

        public UpdateColporteurIntegrationHandler(IServiceProvider serviceProvider, IMessageBus bus)
        {
            _serviceProvider = serviceProvider;
            _bus = bus;
        }

        private void SetResponder()
        {
            _bus.RespondAsync<RequestedColporteurIntegrationEvent, ResponseMessage>(async request => await UpdateColporteur(request));

            _bus.advancedBus.Connected += OnConnect;
        }

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            SetResponder();

            return Task.CompletedTask;
        }

        private void OnConnect(object s, EventArgs e)
        {
            _bus.RespondAsync<RequestedColporteurIntegrationEvent, ResponseMessage>(async request => await UpdateColporteur(request));
        }

        private async Task<ResponseMessage> UpdateColporteur(RequestedColporteurIntegrationEvent message)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                try
                {
                    var colporteurService = scope.ServiceProvider.GetRequiredService<IColporteurService>();
                
                    var colporteur = await colporteurService.GetColporteurById(message.UserId);

                    var colporteurCommand = new UpdateColporteurCommand(colporteur.Id, colporteur.Name, colporteur.LastName, colporteur.PhoneNumber, colporteur.CPF,
                                                colporteur.RG, colporteur.ShirtSize, colporteur.IsActive, message.TeamId);

                    ValidationResult success;
                
                    var mediator = scope.ServiceProvider.GetRequiredService<IMediatorHandler>();
                    success = await mediator.SendCommand(colporteurCommand);
                
                    return new ResponseMessage(success);
                }
                catch (Exception e)
                {
                    throw;
                }
            }
        }
    }
}
