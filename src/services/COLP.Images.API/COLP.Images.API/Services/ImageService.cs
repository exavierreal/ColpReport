using COLP.Images.API.Data.Repository;
using COLP.Images.API.Models;

namespace COLP.Images.API.Services
{
    public class ImageService : IImageService
    {
        private readonly IImageRepository _imageRepository;

        public ImageService(IImageRepository imageRepository)
        {
            _imageRepository = imageRepository;
        }

        public async Task<Image> GetImage(Guid id)
        {
            return await _imageRepository.GetById(id);
        }
    }
}
