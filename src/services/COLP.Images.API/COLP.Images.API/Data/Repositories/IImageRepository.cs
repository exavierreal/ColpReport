using COLP.Core.Data;
using COLP.Images.API.Models;

namespace COLP.Images.API.Data.Repository
{
    public interface IImageRepository : IRepository<Image>
    {
        void Add(Image image);

        Task<Image> GetById(Guid id);
    }
}
