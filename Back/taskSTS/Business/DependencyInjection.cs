using Microsoft.EntityFrameworkCore;
using taskSTS.Business.Interfaces;
using taskSTS.Business.Repos;
using taskSTS.Context;

namespace taskSTS.Business
{
    public static class DependencyInjection
    {
        public static void AddDBContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<dbContext>(o => o.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
        }
        public static void AddAllScoped(this IServiceCollection services)
        {
            services.AddScoped<IproductRepo,productRepo>();
            services.AddScoped<IcategoryRepo,categoryRepo>();
        }
    }
}