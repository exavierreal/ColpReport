using COLP.Core.Mediator;
using COLP.Images.API.Services;
using COLP.Person.API.Application.Commands;
using COLP.Person.API.Data.Repository;
using COLP.Person.API.Dtos;
using COLP.Person.API.Models;
using FluentValidation.Results;
using Microsoft.AspNetCore.Identity;

namespace COLP.Person.API.Services
{
    public class ColporteurService : IColporteurService
    {
        private readonly IColporteurRepository _repository;
        private readonly IServiceProvider _serviceProvider;
        private readonly IImageService _imageService;

        public ColporteurService(IColporteurRepository repository, IServiceProvider serviceProvider, IImageService imageService)
        {
            _repository = repository;
            _serviceProvider = serviceProvider;
            _imageService = imageService;
        }

        public async Task<Colporteur> GetColporteurById(Guid ColporteurId)
        {
            return await _repository.GetById(ColporteurId);
        }

        public async Task LoadImageAsync(Colporteur colporteur)
        {
            if (colporteur.ImageId != null)
            {
                var image = await _imageService.GetImage(colporteur.ImageId.Value);

                colporteur.SetImage(image);
            }
        }


        public async Task<bool> UpdateColporteur(ColporteurDto colporteur)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                try {
                    var currentColp = await _repository.GetById(colporteur.Id);
                    colporteur.TeamId = currentColp.TeamId;

                    var colporteurCommand = new UpdateColporteurCommand(colporteur.Id, colporteur.Name, colporteur.Lastname, colporteur.PhoneNumber, colporteur.CPF,
                                                        colporteur.RG, colporteur.ShirtSize, colporteur.IsActive, colporteur.SinceDate, (colporteur.Imageid == Guid.Empty ? null : colporteur.Imageid), (Guid)colporteur.TeamId);

                    var mediator = scope.ServiceProvider.GetRequiredService<IMediatorHandler>();
                    var response = await mediator.SendCommand(colporteurCommand);
                    var success = response.IsValid;

                    return success;
                }
                catch (Exception e)
                {
                    throw;
                }
            }
        }
    }
}
