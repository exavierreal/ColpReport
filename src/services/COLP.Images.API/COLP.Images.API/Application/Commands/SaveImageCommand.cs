using COLP.Core.Messages;

namespace COLP.Images.API.Application.Commands
{
    public class SaveImageCommand : Command
    {
        public Guid Id { get; private set; }
        public string FileName { get; private set; }
        public string ImageData { get; private set; }

        public SaveImageCommand(Guid id, string fileName, byte[] imageData)
        {
            AggregateId = id;
            Id = id;
            FileName = fileName;
            ImageData = imageData;
        }
    }
}
