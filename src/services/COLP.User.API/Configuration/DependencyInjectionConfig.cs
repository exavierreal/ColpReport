using COLP.Core.Mediator;
using COLP.Management.API.Data;
using COLP.Management.API.Data.Repository.Association;
using COLP.Management.API.Data.Repository;
using COLP.Management.API.Data.Repository.Union;
using COLP.Management.API.Services.Association;
using COLP.Management.API.Services;
using COLP.Management.API.Services.Union;
using COLP.Person.API.Data;
using COLP.Person.API.Data.Repository;
using COLP.Person.API.Services;

namespace COLP.Management.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<ITeamService, TeamService>();
            services.AddScoped<IUnionService, UnionService>();
            services.AddScoped<IAssociationService, AssociationService>();

            services.AddScoped<ITeamRepository, TeamRepository>();
            services.AddScoped<IUnionRepository, UnionRepository>();
            services.AddScoped<IAssociationRepository, AssociationRepository>();

            services.AddScoped<ManagementContext>();
        }
    }
}
