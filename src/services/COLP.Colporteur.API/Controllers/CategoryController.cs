using COLP.Core.Controllers;
using COLP.Person.API.Services;
using COLP.Person.API.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Person.API.Controllers
{
    [Route("api/[controller]")]
    public class CategoryController : MainController
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<ActionResult> Index()
        {
            var categories = await _categoryService.GetAll();

            if (categories == null)
                return NotFound();

            var categoryVM = categories.Select(c => new CategoryViewModel
            {
                Id = c.Id,
                Name = c.Name,
                Acronym = c.Acronym,
                Sequential = c.Sequential
            });

            return Ok(categoryVM);
        }
    }
}
