using Microsoft.AspNetCore.Mvc;
using taskSTS.Business;
using taskSTS.Business.Interfaces;
using taskSTS.Context.Models;

namespace taskSTS.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class productController : Controller
    {
        private IproductRepo _productRepo;
        public productController(IproductRepo productRepo)
        {
            _productRepo = productRepo;
        }

        [HttpGet("all")]
        public async Task<ActionResult<serviceResponse<ICollection<product>>>> getAll()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var Response = await _productRepo.getAll();
            if (Response.Success)
                return Ok(Response);
            else
                return BadRequest(Response);
        }
        [HttpGet("category/{id}")]
        public async Task<ActionResult<serviceResponse<ICollection<product>>>> getByCAtegory(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var Response = await _productRepo.getProductsByCategory(id);
            if (Response.Success)
                return Ok(Response);
            else
                return BadRequest(Response);
        }
    }
}
