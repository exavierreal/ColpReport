using COLP.Core.DomainObjects;

namespace COLP.Images.API.Models
{
    public class Image : Entity, IAggregateRoot
    {
        public string Filename { get; private set; }
        public byte[] ImageData { get; private set; }
        public bool IsProfileImageActive { get; private set; }

        protected Image() { }

        public Image(Guid id, string filename, byte[] imageData, bool isProfileImageActive)
        {
            Id = id;
            Filename = filename;
            ImageData = imageData;
            IsProfileImageActive = isProfileImageActive;
        }
    }
}
