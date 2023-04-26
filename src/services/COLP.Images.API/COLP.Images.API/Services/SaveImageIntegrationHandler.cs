using COLP.Core.Mediator;
using COLP.Core.Messages.Integration;
using COLP.Images.API.Application.Commands;
using COLP.Images.API.Integration;
using COLP.MessageBus;
using FluentValidation.Results;

namespace COLP.Images.API.Services
{
    public class SaveImageIntegrationHandler : BackgroundService
    {
        private readonly IMessageBus _bus;
        private readonly IServiceProvider _serviceProvider;

        public SaveImageIntegrationHandler(IMessageBus bus, IServiceProvider serviceProvider)
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
            _bus.RespondAsync<RequestedImageIntegrationEvent, ResponseMessage>(async request => await SaveImage(request));

            _bus.advancedBus.Connected += OnConnect;
        }

        private void OnConnect(object s, EventArgs e)
        {
            _bus.RespondAsync<RequestedImageIntegrationEvent, ResponseMessage>(async request => await SaveImage(request));
        }

        private async Task<ResponseMessage> SaveImage(RequestedImageIntegrationEvent message)
        {
            var imageCommand = new SaveImageCommand(message.Id, message.Filename, message.ImageData);
            ValidationResult hasSuccessOnSaveImage;

            using (var scope = _serviceProvider.CreateScope())
            {
                var mediator = scope.ServiceProvider.GetRequiredService<IMediatorHandler>();
                hasSuccessOnSaveImage = await mediator.SendCommand(imageCommand);
            }

            return new ResponseMessage(hasSuccessOnSaveImage);
        }


    }
}
