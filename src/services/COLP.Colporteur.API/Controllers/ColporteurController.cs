using COLP.Core.Controllers;
using COLP.Core.Mediator;
using COLP.Person.API.Application.Commands;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Person.API.Controllers
{
    [Route("api/[controller]")]
    public class ColporteurController : MainController
    {
        private readonly IMediatorHandler _mediatorHandler;

        public ColporteurController(IMediatorHandler mediatorHandler)
        {
            _mediatorHandler = mediatorHandler;
        }

        [HttpGet("colporteurs")]
        public async Task<IActionResult> Index()
        {
            var result = await _mediatorHandler.SendCommand(new RegisterColporteurCommand(Guid.NewGuid(), "Ericson", "Xavier"));

            return CustomResponse(result);
        }
    }
}
