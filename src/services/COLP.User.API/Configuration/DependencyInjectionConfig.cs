using COLP.Management.API.Data;
using COLP.Management.API.Data.Repository;
using COLP.Management.API.Services;
using COLP.Person.API.Data;
using COLP.Person.API.Data.Repository;
using COLP.Person.API.Services;
using COLP.Core.Mediator;
using COLP.Operation.API.Data.Repositories;
using COLP.Operation.API.Data;
using COLP.Operation.API.Services;

namespace COLP.Management.API.Configuration
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IMediatorHandler, MediatorHandler>();

            services.AddScoped<ITeamService, TeamService>();
            services.AddScoped<IColporteurService, ColporteurService>();
            services.AddScoped<IUnionService, UnionService>();
            services.AddScoped<IAssociationService, AssociationService>();
            services.AddScoped<IGoalService, GoalService>();

            services.AddScoped<ITeamRepository, TeamRepository>();
            services.AddScoped<IUnionRepository, UnionRepository>();
            services.AddScoped<IAssociationRepository, AssociationRepository>();
            services.AddScoped<IColporteurRepository, ColporteurRepository>();
            services.AddScoped<IGoalRepository, GoalRepository>();

            services.AddScoped<ManagementContext>();
            services.AddScoped<ColporteurContext>();
            services.AddScoped<OperationContext>();
        }
    }
}
