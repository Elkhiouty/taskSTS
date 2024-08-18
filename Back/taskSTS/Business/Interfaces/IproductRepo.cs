using taskSTS.Business.DTO;

namespace taskSTS.Business.Interfaces
{
    public interface IproductRepo
    {
        public Task<serviceResponse<ICollection<productDto>>> getAll();
        public Task<serviceResponse<ICollection<productDto>>> getProductsByCategory(int id);

    }
}
