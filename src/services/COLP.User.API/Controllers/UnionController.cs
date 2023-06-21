using COLP.Core.Controllers;
using COLP.Management.API.Services;
using COLP.Management.API.ViewModels.Association;
using COLP.Management.API.ViewModels.Union;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Management.API.Controllers
{
    [Route("api/[controller]")]
    public class UnionController : MainController
    {
        private readonly IUnionService _service;

        public UnionController(IUnionService service)
        {
            _service = service;
        }

        [HttpGet("get-union-suggestions")]
        public async Task<ActionResult> GetUnionsSuggestions(string filter)
        {
            filter = filter ?? "";

            var unions = await _service.GetUnionsByFilter(filter);

            var unionViewModels = unions.Select(u => new UnionSuggestionsViewModel
            {
                Id = u.Id,
                Name = u.Name,
                Acronym = u.Acronym
            });

            return Ok(unionViewModels);
        }

        [HttpGet("get-union-by-id")]
        public async Task<ActionResult> GetUnionById(Guid unionId)
        {
            var union = await _service.GetUnionById(unionId);

            if (union == null)
                return NotFound();

            var unionVM = new UnionSuggestionsViewModel
            {
                Id = union.Id,
                Name = union.Name,
                Acronym = union.Acronym
            };

            return Ok(unionVM);
        }
    }
}
