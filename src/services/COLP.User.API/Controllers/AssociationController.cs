using COLP.Core.Controllers;
using COLP.Management.API.Services.Association;
using COLP.Management.API.ViewModels.Association;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Management.API.Controllers
{
    [Route("api/[controller]")]
    public class AssociationController : MainController
    {
        private readonly IAssociationService _service;

        public AssociationController(IAssociationService service)
        {
            _service = service;
        }

        [HttpGet("get-association-suggestions")]
        public async Task<ActionResult> GetAssociationsSuggestions(string filter)
        {
            var associations = await _service.GetAssociationsByFilter(filter);

            var associationViewModels = associations.Select(a => new AssociationSuggestionsViewModel
            {
                Id = a.Id,
                Name = a.Name,
                Acronym = a.Acronym
            });

            return Ok(associationViewModels);
        }
    }
}
