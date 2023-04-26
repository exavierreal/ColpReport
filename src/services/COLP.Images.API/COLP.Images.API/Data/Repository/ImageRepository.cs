using COLP.Core.Data;
using COLP.Images.API.Models;

namespace COLP.Images.API.Data.Repository
{
    public class ImageRepository : IImageRepository
    {
        private readonly ImageContext _context;

        public ImageRepository(ImageContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public void Add(Image image)
        {
            _context.Image.Add(image);
        }

        public Image GetById(Guid id)
        {
            return _context.Image.Where(x => x.Id == id).FirstOrDefault();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
