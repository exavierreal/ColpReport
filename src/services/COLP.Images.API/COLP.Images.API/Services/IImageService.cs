using COLP.Images.API.Models;

namespace COLP.Images.API.Services
{
    public interface IImageService
    {
        Image GetImage(Guid id);
    }
}
