using COLP.Core.Messages;

namespace COLP.Images.API.Application.Events
{
    public class SavedImageEvent : Event
    {
        public Guid Id { get; private set; }
        public string FileName { get; private set; }
        public string ImageData { get; private set; }

        public SavedImageEvent(Guid id, string fileName, string imageData)
        {
            AggregateId = id;
            Id = id;
            FileName = fileName;
            ImageData = imageData;
        }
    }
}
