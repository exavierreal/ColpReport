using COLP.Core.Utils;
using COLP.MessageBus;
using COLP.Operation.API.Integration;

namespace COLP.Operation.API.Configuration
{
    public static class MessageBusConfig
    {
        public static void AddMessageBusConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddMessageBus(configuration.GetMessageQueueConnection("MessageBus"))
                .AddHostedService<SaveGoalIntegrationHandler>(); ;
        }
    }
}
