using COLP.Core.Controllers;
using COLP.Core.Mediator;
using COLP.Core.Messages.Integration;
using COLP.Images.API.Integration;
using COLP.MessageBus;
using COLP.Operation.API.Integration;
using COLP.Person.API.Application.Commands;
using COLP.Person.API.Services;
using COLP.Person.API.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Person.API.Controllers
{
    [Route("api/[controller]")]
    public class ColporteurController : MainController
    {
        private readonly IMessageBus _bus;
        private readonly ICategoryService _categoryService;
        private readonly IColporteurService _colporteurService;

        public ColporteurController(IMessageBus bus, ICategoryService categoryService, IColporteurService colporteurService)
        {
            _bus = bus;
            _categoryService = categoryService;
            _colporteurService = colporteurService;
        }

        [HttpPost("leader")]
        public async Task<IActionResult> SaveLeader(LeaderViewModel leaderDto)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            if (!Request.Headers.TryGetValue("X-User-Id", out var userIdValue))
                return CustomResponse();

            if (!Guid.TryParse(userIdValue, out var userId))
                return CustomResponse();
            
            var imageId = Guid.Empty;
            if (leaderDto.ImageData != null)
            {
                imageId = Guid.NewGuid();
                var imageResult = await SaveImage(leaderDto, imageId, userId);

                if (!imageResult.ValidationResult.IsValid)
                    return CustomResponse(imageResult.ValidationResult);
            }

            if (!await UpdateColporteur(userId, leaderDto.SinceDate, imageId))
                return CustomResponse();

            var goalResult = await SaveGoal(leaderDto.Goal, userId);
            if (!goalResult.ValidationResult.IsValid)
                return CustomResponse(goalResult.ValidationResult);

            if (!await _categoryService.InsertCategoriesToColporteur(userId, leaderDto.CategoryIds))
                return CustomResponse();


            return CustomResponse(leaderDto);
        }

        #region Private Methods

        #region Saving Image
        private async Task<ResponseMessage> SaveImage(LeaderViewModel leader, Guid id, Guid userId)
        {
            var requestedImage = new RequestedImageIntegrationEvent(id, leader.Filename, leader.ImageData, true);

            try
            {
                return await _bus.RequestAsync<RequestedImageIntegrationEvent, ResponseMessage>(requestedImage);
            }
            catch (Exception)
            {

                throw;
            }
        }

        #endregion

        #region Saving Goal
        private async Task<ResponseMessage> SaveGoal(decimal value, Guid userId)
        {
            var goalName = "Meta Inicial";
            var requestedGoal = new RequestedGoalIntegrationEvent(value, goalName, null, userId, null);

            try
            {
                return await _bus.RequestAsync<RequestedGoalIntegrationEvent, ResponseMessage>(requestedGoal);
            }
            catch
            {
                throw;
            }
        }

        #endregion

        #region Updating Colporteur
        private async Task<bool> UpdateColporteur(Guid userId, DateTime sinceDate, Guid imageId)
        {


            return await _colporteurService.UpdateSinceDateAndImage(userId, sinceDate, imageId);
        }

        #endregion

        #endregion
    }
}
