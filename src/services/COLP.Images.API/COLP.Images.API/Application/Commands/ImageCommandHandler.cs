﻿using COLP.Core.Messages;
using COLP.Images.API.Application.Events;
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
            string filename = DateTime.Now.ToString() + ".colporteur." + request.Id;

            var image = new Image(request.Id, filename, fileData, request.IsProfileImageActive);
            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png" };
            var extension = Path.GetExtension(request.FileName);

            if (!allowedExtensions.Contains(extension))
            {
                SetError("Arquivo de imagem enviada inválido.");
                return ValidationResult;
            }
            
            _imageRepository.Add(image);

            image.AddEvent(new SavedImageEvent(request.Id, request.FileName, request.ImageData, request.IsProfileImageActive));

            return await SaveChanges(_imageRepository.UnitOfWork);
        }
    }
}
