using COLP.Management.API.Data;
using COLP.Management.API.Data.Repository.Association;
using COLP.Management.API.Data.Repository.Team;
using COLP.Management.API.Data.Repository.Union;
using COLP.Management.API.Services.Association;
using COLP.Management.API.Services.Team;
using COLP.Management.API.Services.Union;

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
