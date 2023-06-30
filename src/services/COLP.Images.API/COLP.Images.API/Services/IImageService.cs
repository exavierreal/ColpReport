using COLP.Images.API.Models;

namespace COLP.Images.API.Services
{
    public interface IImageService
    {
        Task<Image> GetImage(Guid id);
    }
}
