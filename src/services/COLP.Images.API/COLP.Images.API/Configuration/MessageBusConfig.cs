using COLP.Core.Utils;
using COLP.Images.API.Services;
using COLP.MessageBus;

namespace COLP.Images.API.Configuration
{
    public static class MessageBusConfig
    {
        public static void AddMessageBusConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddMessageBus(configuration.GetMessageQueueConnection("MessageBus"))
                .AddHostedService<SaveImageIntegrationHandler>(); ;
        }
    }
}
