using COLP.Management.API.Data;
using COLP.Management.API.Data.Repository;

namespace COLP.Management.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<ITeamRepository, TeamRepository>();
            services.AddScoped<ManagementContext>();
        }
    }
}
