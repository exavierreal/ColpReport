using COLP.Core.Controllers;
using COLP.Management.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Management.API.Controllers
{
    public class UnionController : MainController
    {
        private readonly IUnionService _service;

        public UnionController(IUnionService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult> GetUnionSuggestion(string filter)
        {
            var unions = _service.GetUnionsByFilter(filter);

            return await Task.FromResult(Ok(unions));
        }
    }
}
