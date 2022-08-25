using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace COLP.Identity.API.Controllers
{
    [ApiController]
    public abstract class MainController : Controller
    {
        protected ICollection<string> Errors = new List<string>();

        protected ActionResult CustomResponse(object result = null)
        {
            if(isValid())
            {
                return Ok(result);
            }

            return BadRequest(new ValidationProblemDetails(new Dictionary<string, string[]>
            {
                { "Messages", Errors.ToArray() }
            }));
        }

        protected ActionResult CustomResponse(ModelStateDictionary modelState)
        {
            var errors = modelState.Values.SelectMany(e => e.Errors);

            foreach (var error in errors)
            {
                AddProcessmentError(error.ErrorMessage);
            }

            return CustomResponse();
        }

        protected bool isValid()
        {
            return !Errors.Any();
        }

        protected void AddProcessmentError(string error)
        {
            Errors.Add(error);
        }

        protected void ClearProcessmentErrors()
        {
            Errors.Clear();
        }
    }
}
