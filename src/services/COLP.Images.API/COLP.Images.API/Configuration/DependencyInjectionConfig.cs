using COLP.Core.Mediator;
using COLP.Images.API.Application.Commands;
using COLP.Images.API.Data;
using COLP.Images.API.Data.Repository;
using COLP.Images.API.Services;
using FluentValidation.Results;
using MediatR;

namespace COLP.Images.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IMediatorHandler, MediatorHandler>();
            services.AddScoped<IRequestHandler<SaveImageCommand, ValidationResult>, ImageCommandHandler>();

            services.AddScoped<IImageRepository, ImageRepository>();
            services.AddScoped<IImageService, ImageService>();
            services.AddScoped<ImageContext>();
        }
    }
}
