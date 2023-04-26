﻿using COLP.Core.Controllers;
using COLP.Core.Mediator;
using COLP.Images.API.Application.Commands;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Images.API.Controllers
{
    public class ImageController : MainController
    {
        private readonly IMediatorHandler _mediatorHandler;

        public ImageController(IMediatorHandler mediatorHandler)
        {
            _mediatorHandler = mediatorHandler;
        }

        [HttpGet("image")]
        public async Task<IActionResult> Index()
        {
            var result = await _mediatorHandler.SendCommand(new SaveImageCommand(Guid.NewGuid(), "arquivo.jpeg", "data:image/jpeg;base64,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"));

            return CustomResponse(result);
        }
    }
}
