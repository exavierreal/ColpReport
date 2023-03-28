using COLP.Core.Messages;
using COLP.Images.API.Data.Repository;
using COLP.Images.API.Models;
using FluentValidation.Results;
using MediatR;

namespace COLP.Images.API.Application.Commands
{
    public class ImageCommandHandler : CommandHandler, IRequestHandler<SaveImageCommand, ValidationResult>
    {
        private readonly IImageRepository _imageRepository;

        public ImageCommandHandler(IImageRepository imageRepository)
        {
            _imageRepository = imageRepository;
        }

        public async Task<ValidationResult> Handle(SaveImageCommand request, CancellationToken cancellationToken)
        {
            if (!request.IsValid()) return request.ValidationResult;

            if (string.IsNullOrEmpty(request.ImageData))
            {
                SetError("Algo deu errado no upload de sua imagem.");
                return ValidationResult;
            }
            
            byte[] fileData = Convert.FromBase64String(request.ImageData);
            var image = new Image(request.Id, request.FileName, fileData);
            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png" };
            var extension = Path.GetExtension(request.FileName);

            if (!allowedExtensions.Contains(extension))
            {
                SetError("Arquivo de imagem enviada inválido.");
                return ValidationResult;
            }
            
            _imageRepository.Add(image);

            return await SaveChanges(_imageRepository.UnitOfWork);
        }
    }
}
