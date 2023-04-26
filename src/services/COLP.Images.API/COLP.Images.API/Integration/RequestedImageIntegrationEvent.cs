using COLP.Core.Messages.Integration;

namespace COLP.Images.API.Integration
{
    public class RequestedImageIntegrationEvent : IntegrationEvent
    {
        public Guid Id { get; private set; }
        public string Filename { get; private set; }
        public string ImageData { get; private set; }

        public RequestedImageIntegrationEvent(Guid id, string filename, string imageData)
        {
            Id = id;
            Filename = filename;
            ImageData = imageData;
        }
    }
}
