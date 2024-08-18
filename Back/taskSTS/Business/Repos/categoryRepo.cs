using Microsoft.EntityFrameworkCore;
using taskSTS.Business.Interfaces;
using taskSTS.Context;
using taskSTS.Context.Models;

namespace taskSTS.Business.Repos
{
    public class categoryRepo : IcategoryRepo
    {
        private dbContext _dbContext;
        public categoryRepo(dbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<serviceResponse<ICollection<category>>> getAll()
        {
            var categories = await _dbContext.categories.ToListAsync();
            return new serviceResponse<ICollection<category>>()
            {
                Data = categories
            };
        }
    }
}
