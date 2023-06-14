using COLP.Core.Controllers;
using COLP.Core.Messages.Integration;
using COLP.Images.API.Integration;
using COLP.Management.API.Models;
using COLP.Management.API.Services.Team;
using COLP.Management.API.ViewModels.Team;
using COLP.MessageBus;
using COLP.Operation.API.Integration;
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
            
            var imageId = Guid.Empty;
            ResponseMessage imageResult;

            if (teamDto.ImageData != null)
            {
                imageId = Guid.NewGuid();
                imageResult = await SaveImage(teamDto, imageId);
                
                if (!imageResult.ValidationResult.IsValid)
                    return CustomResponse();
            }

            var teamId = Guid.NewGuid();

            var hasTeamSaved = imageId != Guid.Empty ?
                                    await _teamService.SaveTeam(new Team(teamId, teamDto.Name, teamDto.AssociationId, imageId)) :
                                    await _teamService.SaveTeam(new Team(teamId, teamDto.Name, teamDto.AssociationId, null));

            if (hasTeamSaved)
            {
                var goalResult = await SaveGoal(teamDto.Goal, teamId);

                if (!goalResult.ValidationResult.IsValid)
                    return CustomResponse();

                return CustomResponse(teamDto);
            }
            
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

        private async Task<ResponseMessage> SaveGoal(decimal value, Guid teamId)
        {
            var goalName = "Meta Inicial";
            var requestedGoal = new RequestedGoalIntegrationEvent(teamId, value, goalName, teamId, null);

            try
            {
                return await _bus.RequestAsync<RequestedGoalIntegrationEvent, ResponseMessage>(requestedGoal);
            }
            catch
            {
                throw;
            }
        }
    }
}
