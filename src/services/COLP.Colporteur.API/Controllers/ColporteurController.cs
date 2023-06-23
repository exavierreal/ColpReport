using COLP.Core.Controllers;
using COLP.Core.Mediator;
using COLP.Core.Messages.Integration;
using COLP.Images.API.Integration;
using COLP.MessageBus;
using COLP.Person.API.Application.Commands;
using COLP.Person.API.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Person.API.Controllers
{
    [Route("api/[controller]")]
    public class ColporteurController : MainController
    {
        private readonly IMessageBus _bus;

        public ColporteurController(IMessageBus bus)
        {
            _bus = bus;
        }

        [HttpPost("leader")]
        public async Task<IActionResult> SaveLeader(LeaderViewModel leaderDto)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            if (!Request.Headers.TryGetValue("X-User-Id", out var userIdValue))
                return CustomResponse();

            var imageId = Guid.Empty;
            ResponseMessage imageResult;

            if (leaderDto.ImageData != null)
            {
                imageId = Guid.NewGuid();
                imageResult = await SaveImage(leaderDto, imageId); 
            }

            return CustomResponse(userIdValue);
        }

        #region Private Methods

        private async Task<ResponseMessage> SaveImage(LeaderViewModel leader, Guid id)
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
    }
}
