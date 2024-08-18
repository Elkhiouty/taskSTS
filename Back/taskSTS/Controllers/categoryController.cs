using Microsoft.AspNetCore.Mvc;
using taskSTS.Business;
using taskSTS.Business.Interfaces;
using taskSTS.Business.Repos;
using taskSTS.Context.Models;

namespace taskSTS.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class categoryController : Controller
    {
        private IcategoryRepo _categoryRepo;
        public categoryController(IcategoryRepo categoryRepo)
        {
            _categoryRepo = categoryRepo;
        }

        [HttpGet]
        public async Task<ActionResult<serviceResponse<ICollection<category>>>> getAll()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var Response = await _categoryRepo.getAll();
            if (Response.Success)
                return Ok(Response);
            else
                return BadRequest(Response);
        }

    }
}
