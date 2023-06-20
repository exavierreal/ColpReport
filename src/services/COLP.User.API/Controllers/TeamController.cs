using COLP.Core.Controllers;
using COLP.Core.Messages.Integration;
using COLP.Images.API.Integration;
using COLP.Management.API.Models;
using COLP.Management.API.Services;
using COLP.Management.API.ViewModels.Team;
using COLP.MessageBus;
using COLP.Operation.API.Integration;
using COLP.Person.API.Application.Queries;
using COLP.Person.API.Integration;
using COLP.Person.API.Services;
using MediatR;
using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("get-team-by-userid")]
        public async Task<ActionResult> GetTeamByUserId(Guid userId)
        {
            var result = GetTeamById(userId);

            if (team == null)
            {
                return CustomResponse();
            }

            return CustomResponse(team);
        }

        //[Authorize]
        [HttpPost("save-team")]
        public async Task<ActionResult> SaveTeam(TeamViewModel teamDto)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            if (!Request.Headers.TryGetValue("X-User-Id", out var userIdValue))
                return CustomResponse();

            if (!Guid.TryParse(userIdValue, out var userId))
                return CustomResponse();

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
                var leaderTeamResult = await AddTeamForLeader(teamId, userId);

                if (!goalResult.ValidationResult.IsValid || !leaderTeamResult.ValidationResult.IsValid)
                    return CustomResponse();

                return CustomResponse(teamDto);
            }
            
            return CustomResponse();

        }


        #region Private Methods

        private async Task<ResponseMessage> SaveImage(TeamViewModel team, Guid id)
        {
            var requestedImage = new RequestedImageIntegrationEvent(id, team.FileName, team.ImageData, true);

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
            var requestedGoal = new RequestedGoalIntegrationEvent(value, goalName, teamId, null);

            try
            {
                return await _bus.RequestAsync<RequestedGoalIntegrationEvent, ResponseMessage>(requestedGoal);
            }
            catch
            {
                throw;
            }
        }
        
        private async Task<ResponseMessage> AddTeamForLeader(Guid teamId, Guid userId)
        {
            var requestedColporteur = new RequestedColporteurIntegrationEvent(userId, teamId);

            try
            {
                return await _bus.RequestAsync<RequestedColporteurIntegrationEvent, ResponseMessage>(requestedColporteur);
            } catch
            {
                throw;
            }
        }
        
        private async Task<Team> GetTeamById(Guid userId)
        {
            var query = new GetTeamIdQuery { UserId = userId };
            var teamId = _bus.RequestAsync<GetTeamIdQuery, ResponseMessage>(query);

            if (teamId == Guid.Empty)
            {
                return CustomResponse();
            }

            var team = _teamService.GetTeamById((Guid)teamId);
        }
        #endregion
    }
}
