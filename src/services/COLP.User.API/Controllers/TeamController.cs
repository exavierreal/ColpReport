using COLP.Core.Controllers;
using COLP.Core.Messages.Integration;
using COLP.Images.API.Integration;
using COLP.Management.API.DTOs;
using COLP.Management.API.Models;
using COLP.Management.API.Services;
using COLP.MessageBus;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Management.API.Controllers
{
    public class TeamController : MainController
    {
        private readonly IMessageBus _bus;
        private readonly ITeamService _teamService;

        public TeamController(IMessageBus bus, ITeamService teamService)
        {
            _bus = bus;
            _teamService = teamService;
        }

        [HttpPost("save-team")]
        public async Task<ActionResult> SaveTeam(TeamDto teamDto)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            var id = Guid.NewGuid();
            var imageResult = await SaveImage(teamDto, id);

            if (!imageResult.ValidationResult.IsValid)
                return CustomResponse();

            var hasSaved = await _teamService.SaveTeam(new Team(Guid.NewGuid(), teamDto.Name, teamDto.AssociationId, id));

            if (hasSaved)
                return CustomResponse(teamDto);

            return CustomResponse();

        }

        private async Task<ResponseMessage> SaveImage(TeamDto team, Guid id)
        {
            var requestedImage = new RequestedImageIntegrationEvent(id, team.FileName, team.ImageData);

            try
            {
                return await _bus.RequestAsync<RequestedImageIntegrationEvent, ResponseMessage>(requestedImage);
            }
            catch
            {
                throw;
            }
        }
    }
}
