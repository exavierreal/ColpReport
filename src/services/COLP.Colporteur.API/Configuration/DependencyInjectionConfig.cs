using COLP.Core.Mediator;
using COLP.Images.API.Data.Repository;
using COLP.Images.API.Data;
using COLP.Images.API.Services;
using COLP.Operation.API.Data;
using COLP.Operation.API.Data.Repositories;
using COLP.Operation.API.Services;
using COLP.Person.API.Application.Commands;
using COLP.Person.API.Data;
using COLP.Person.API.Data.Repository;
using COLP.Person.API.Services;
using FluentValidation.Results;
using MediatR;

namespace COLP.Person.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IMediatorHandler, MediatorHandler>();
            services.AddScoped<IRequestHandler<RegisterColporteurCommand, ValidationResult>, RegisterColporteurCommandHandler>();
            services.AddScoped<IRequestHandler<UpdateColporteurCommand, ValidationResult>, UpdateColporteurCommandHandler>();

            services.AddScoped<IImageService, ImageService>();
            services.AddScoped<IColporteurService, ColporteurService>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<IGoalService, GoalService>();

            services.AddScoped<IImageRepository, ImageRepository>();
            services.AddScoped<IColporteurRepository, ColporteurRepository>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IGoalRepository, GoalRepository>();

            services.AddScoped<ColporteurContext>();
            services.AddScoped<OperationContext>();
        }
    }
}
