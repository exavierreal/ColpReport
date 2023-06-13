using COLP.Core.Controllers;
using COLP.Core.Messages.Integration;
using COLP.Images.API.Integration;
using COLP.Management.API.Models;
using COLP.Management.API.Services.Team;
using COLP.Management.API.ViewModels.Team;
using COLP.MessageBus;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Management.API.Controllers
{
    [Route("api/[controller]")]
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
        public async Task<ActionResult> SaveTeam(TeamViewModel teamDto)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            var id = Guid.NewGuid();
            var imageResult = await SaveImage(teamDto, id);

            if (!imageResult.ValidationResult.IsValid)
                return CustomResponse();

            var hasTeamSaved = await _teamService.SaveTeam(new TeamModel(Guid.NewGuid(), teamDto.Name, teamDto.AssociationId, id));

            if (hasTeamSaved)
                return CustomResponse(teamDto);

            return CustomResponse();

        }

        private async Task<ResponseMessage> SaveImage(TeamViewModel team, Guid id)
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
