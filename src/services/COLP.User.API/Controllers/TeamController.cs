using COLP.Core.Controllers;
using COLP.Core.Messages.Integration;
using COLP.Images.API.Integration;
using COLP.Management.API.Models;
using COLP.Management.API.Services;
using COLP.Management.API.ViewModels.Team;
using COLP.MessageBus;
using COLP.Operation.API.Integration;
using COLP.Operation.API.Services;
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
        private readonly IColporteurService _colporteurService;
        private readonly IGoalService _goalService;

        public TeamController(IMessageBus bus, ITeamService teamService, IColporteurService colporteurService, IGoalService goalService)
        {
            _bus = bus;
            _teamService = teamService;
            _colporteurService = colporteurService;
            _goalService = goalService;
        }

        [HttpGet("get-team-by-userid")]
        public async Task<ActionResult> GetTeamByUserId(Guid userId)
        {
            var result = await GetTeamById(userId);

            if (result == null)
            {
                return CustomResponse();
            }

            return CustomResponse(result);
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
                {
                    if (!leaderTeamResult.ValidationResult.IsValid)
                    {
                        // TODO: Delete the GoalResult that was saved.
                    }

                    return CustomResponse();
                }
                    

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
            var requestedGoal = new RequestedGoalIntegrationEvent(value, goalName, teamId, null, null);

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
        
        private async Task<TeamViewModel> GetTeamById(Guid userId)
        {
            var colporteur = await _colporteurService.GetColporteurById(userId);

            if (colporteur == null || colporteur.TeamId == null) return null;

            var team = await _teamService.GetTeamById((Guid)colporteur.TeamId);
            var goal = await _goalService.GetGoalByTeamId(team.Id);
            var imageData = team.ImageId != null ? Convert.ToBase64String(team.Image.ImageData) : null;

            return new TeamViewModel
            {
                Name = team.Name,
                AssociationId = team.AssociationId,
                ImageData = imageData,
                Goal = goal.Value
            };
        }

        #endregion
    }
}
