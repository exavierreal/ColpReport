using COLP.Images.API.Data;
using COLP.Operation.API.Data;
using COLP.Person.API.Configuration;
using COLP.Person.API.Data;
using COLP.WebAPI.Core.Identity;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var AllowSpecificOrigins = "_allowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);
AuthConfig authConfig = new();


#region Configuring DB Contexts
builder.Services.AddDbContext<ColporteurContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddDbContext<OperationContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddDbContext<ImageContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

#endregion

#region Add Cors
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://127.0.0.1:5173").AllowAnyMethod().AllowAnyHeader().AllowCredentials();
        }
    );
});

#endregion

#region API Configuration
builder.Services.AddControllers();
#endregion

authConfig.AddJwtConfiguration(builder);

#region Swagger Configuration

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Colp Report Person API",
        Description = "This API is responsable to all persons on Colp Report App as Managers And Colporteurs",
        Contact = new OpenApiContact() { Name = "Ericson Xavier", Email = "ericson.xavier.08@gmail.com" },
        License = new OpenApiLicense() { Name = "MIT", Url = new Uri("https://opensource.org/licenses/MIT") }
    });
});

#endregion

builder.Services.AddMediatR(typeof(Program));

DependencyInjectionConfig.RegisterServices(builder.Services);

builder.Services.AddMessageBusConfiguration(builder.Configuration);

var app = builder.Build();

#region Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    });
}

app.UseHttpsRedirection();

#endregion

authConfig.UseAuth(app);

app.UseCors(AllowSpecificOrigins);

app.MapControllers();

app.Run();
