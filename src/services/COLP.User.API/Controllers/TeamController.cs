using COLP.Core.Controllers;
using COLP.Core.Messages.Integration;
using COLP.Images.API.Integration;
using COLP.Management.API.Models;
using COLP.Management.API.Services;
using COLP.Management.API.ViewModels.Team;
using COLP.MessageBus;
using COLP.Operation.API.Integration;
using COLP.Operation.API.Models;
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
            var result = await GetTeamByColpId(userId);

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
            var hasTeamSaved = false;

            if (await hasUserRegisteredTeam(userId))
            {
                hasTeamSaved = await UpdateTeam(userId, teamDto, imageId);
                teamId = await GetTeamId(userId);
            }
            else
            {
                hasTeamSaved = await InsertTeam(imageId, teamDto, teamId);
            }
            
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

        #region Save Image
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

        #endregion

        #region Save Goal
        private async Task<ResponseMessage> SaveGoal(decimal value, Guid teamId)
        {
            try
            {
                Goal goalTeam = await _goalService.GetGoalByTeamId(teamId);
                var goalName = "Meta Inicial";
                var requestedGoal = new RequestedGoalIntegrationEvent(value, goalName, teamId, null, null);

                if (goalTeam != null)
                {
                    requestedGoal = new RequestedGoalIntegrationEvent(value, goalName, teamId, null, goalTeam.Id);
                }

                return await _bus.RequestAsync<RequestedGoalIntegrationEvent, ResponseMessage>(requestedGoal);
            }
            catch
            {
                throw;
            }
        }

        #endregion

        #region Save Team
        private async Task<bool> InsertTeam(Guid imageId, TeamViewModel teamDto, Guid teamId)
        {
            if (imageId != Guid.Empty)
                return await _teamService.SaveTeam(new Team(teamId, teamDto.Name, teamDto.AssociationId, imageId));

            return await _teamService.SaveTeam(new Team(teamId, teamDto.Name, teamDto.AssociationId, null));
        }

        #endregion

        #region Update Team
        private async Task<bool> UpdateTeam(Guid userId, TeamViewModel teamDto, Guid imageId)
        {
            try
            {
                var colporteur = await _colporteurService.GetColporteurById(userId);

                var team = await _teamService.GetTeamById((Guid)colporteur.TeamId);

                team.UpdateTeamProperties(teamDto.Name, teamDto.AssociationId, null);

                if (imageId != Guid.Empty)
                    team.UpdateTeamProperties(teamDto.Name, teamDto.AssociationId, imageId);

                return await _teamService.UpdateTeam(team);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        #endregion

        #region Adding the Team For Leader
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

        #endregion

        #region Get the Team of Leader
        private async Task<TeamViewModel> GetTeamByColpId(Guid userId)
        {
            try
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

            }catch(Exception e )
            {
                throw;
            }
        }

        #endregion

        #region Verify if the user has a Team registered
        private async Task<bool> hasUserRegisteredTeam (Guid userId)
        {
            var colporteur = await _colporteurService.GetColporteurById(userId);

            if (colporteur == null || colporteur.TeamId == null) return false;

            var team = await _teamService.GetTeamById((Guid)colporteur.TeamId);

            return team != null;
        }

        #endregion

        #region Get Team Id
        private async Task<Guid> GetTeamId(Guid userId)
        {
            var colporteur = await _colporteurService.GetColporteurById(userId);
            var team = await _teamService.GetTeamById((Guid)colporteur.TeamId);

            return team.Id;
        }

        #endregion

        #endregion
    }
}
