using COLP.Core.Mediator;
using COLP.Operation.API.Application.Commands;
using COLP.Operation.API.Data;
using COLP.Operation.API.Data.Repositories;
using COLP.Operation.API.Services;
using FluentValidation.Results;
using MediatR;

namespace COLP.Operation.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IMediatorHandler, MediatorHandler>();
            services.AddScoped<IRequestHandler<SaveGoalCommand, ValidationResult>, GoalCommandHandler>();

            services.AddScoped<IGoalService, GoalService>();

            services.AddScoped<IGoalRepository, GoalRepository>();
            services.AddScoped<OperationContext>();
        }
    }
}
