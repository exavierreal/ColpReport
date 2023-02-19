using COLP.Core.Mediator;
using COLP.Person.API.Application.Commands;
using COLP.Person.API.Data;
using COLP.Person.API.Data.Repository;
using FluentValidation.Results;
using MediatR;

namespace COLP.Person.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IMediatorHandler, MediatorHandler>();
            services.AddScoped<IRequestHandler<RegisterColporteurCommand, ValidationResult>, ColporteurCommandHandler>();

            services.AddScoped<IColporteurRepository, ColporteurRepository>();
            services.AddScoped<ColporteurContext>();
        }
    }
}
