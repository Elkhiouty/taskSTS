using taskSTS.Context.Models;

namespace taskSTS.Business.Interfaces
{
    public interface IcategoryRepo
    {
        public Task<serviceResponse<ICollection<category>>> getAll();
    }
}
