using Microsoft.EntityFrameworkCore;
using taskSTS.Context.Models;

namespace taskSTS.Context
{
    public class dbContext :DbContext
    {
        public dbContext(DbContextOptions<dbContext> options):base(options) { }


        public DbSet<category> categories { get; set; }
        public DbSet<product> products { get; set; }
    }
}
