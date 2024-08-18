using Microsoft.EntityFrameworkCore;
using taskSTS.Business.DTO;
using taskSTS.Business.Interfaces;
using taskSTS.Context;
using taskSTS.Context.Models;

namespace taskSTS.Business.Repos
{
    public class productRepo : IproductRepo
    {
        private dbContext _dbContext;
        public productRepo(dbContext dbContext)
        {
            _dbContext = dbContext;

        }
        public async Task<serviceResponse<ICollection<productDto>>> getAll()
        {
            var products = await _dbContext.products
                .Select(p => new productDto
                {
                    id = p.id,
                    title = p.title,
                    price = p.price,
                    image = p.image
                }).ToListAsync();
            return new serviceResponse<ICollection<productDto>>
            {
                Data = products
            };
        }

        public async Task<serviceResponse<ICollection<productDto>>> getProductsByCategory(int id)
        {
            var products = await _dbContext.products
                .Where(p => p.category.id == id)
                .Select(p => new productDto
                {
                    id = p.id,
                    title = p.title,
                    price = p.price,
                    image = p.image
                }).ToListAsync();
            return new serviceResponse<ICollection<productDto>>
            {
                Data = products
            };
        }
    }
}
