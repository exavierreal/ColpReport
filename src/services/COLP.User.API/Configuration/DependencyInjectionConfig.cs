using COLP.Management.API.Data;
using COLP.Management.API.Data.Repository;
using COLP.Management.API.Services;

namespace COLP.Management.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<ITeamService, TeamService>();
            services.AddScoped<ITeamRepository, TeamRepository>();
            services.AddScoped<ManagementContext>();
        }
    }
}
