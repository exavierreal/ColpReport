using COLP.Core.Controllers;
using COLP.Management.API.Services;
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
        public async Task<ActionResult> GetAssociationsSuggestions(string filter, Guid unionId)
        {
            filter = filter ?? "";

            var associations = await _service.GetAssociationsByFilter(filter, unionId);

            var associationViewModels = associations.Select(a => new AssociationSuggestionsViewModel
            {
                Id = a.Id,
                Name = a.Name,
                Acronym = a.Acronym
            });

            return Ok(associationViewModels);
        }

        [HttpGet("get-association-by-id")]
        public async Task<ActionResult> GetAssociationById(Guid associationId)
        {
            var association = await _service.GetAssociationsById(associationId);

            if (association == null)
                return NotFound();

            var associationVM = new AssociationViewModel
            {
                Id = association.Id,
                Name = association.Name,
                Acronym = association.Acronym,
                UnionId = association.UnionId
            };

            return Ok(associationVM);
        }
    }
}
