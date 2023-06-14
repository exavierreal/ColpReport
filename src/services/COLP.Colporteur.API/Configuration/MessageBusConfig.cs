using COLP.Core.Utils;
using COLP.MessageBus;
using COLP.Person.API.Services;

namespace COLP.Person.API.Configuration
{
    public static class MessageBusConfig
    {
        public static void AddMessageBusConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddMessageBus(configuration.GetMessageQueueConnection("MessageBus"))
                .AddHostedService<RegisterColporteurIntegrationHandler>(); ;
        }
    }
}
