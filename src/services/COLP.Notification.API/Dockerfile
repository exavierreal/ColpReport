#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/services/COLP.Notification.API/COLP.Notification.API.csproj", "src/services/COLP.Notification.API/"]
RUN dotnet restore "src/services/COLP.Notification.API/COLP.Notification.API.csproj"
COPY . .
WORKDIR "/src/src/services/COLP.Notification.API"
RUN dotnet build "COLP.Notification.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "COLP.Notification.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "COLP.Notification.API.dll"]