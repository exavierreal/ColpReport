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
        private readonly IColporteurRepository _colporteurRepository;
        private readonly IServiceProvider _serviceProvider;
        private readonly IImageService _imageService;

        public ColporteurService(IColporteurRepository colporteurRepository, IServiceProvider serviceProvider, IImageService imageService)
        {
            _colporteurRepository = colporteurRepository;
            _serviceProvider = serviceProvider;
            _imageService = imageService;
        }

        public async Task<IEnumerable<Colporteur>> GetAllColporteurs(Guid userId)
        {
            var user = await _colporteurRepository.GetById(userId);

            if (user == null)
                return null;

            var colporteurs = await _colporteurRepository.GetAllColporteurs(userId, (Guid)user.TeamId);

            return colporteurs;
        }

        public async Task<Colporteur> GetColporteurById(Guid ColporteurId)
        {
            return await _colporteurRepository.GetById(ColporteurId);
        }

        public async Task LoadImageAsync(Colporteur colporteur)
        {
            if (colporteur.ImageId != null)
            {
                var image = await _imageService.GetImage(colporteur.ImageId.Value);

                colporteur.SetImage(image);
            }
        }

        public async Task<bool> InsertColporteur(ColporteurDto colporteur, Guid userId)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                try
                {
                    var currentColp = await _colporteurRepository.GetById(userId);
                    colporteur.TeamId = currentColp.TeamId;

                    var colporteurCommand = new SaveColporteurCommand(colporteur.Id, colporteur.Name, colporteur.Lastname, colporteur.PhoneNumber, colporteur.CPF, colporteur.RG, colporteur.ShirtSize,
                                                                      colporteur.IsActive, colporteur.SinceDate, (colporteur.ImageId == Guid.Empty ? null : colporteur.ImageId), (Guid)colporteur.TeamId);

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

        public async Task<bool> UpdateColporteur(ColporteurDto colporteur, Guid userId)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                try {
                    var user = await _colporteurRepository.GetById(userId);
                    colporteur.TeamId = user.TeamId;

                    var colporteurCommand = new UpdateColporteurCommand(colporteur.Id, colporteur.Name, colporteur.Lastname, colporteur.PhoneNumber, colporteur.CPF,
                                                        colporteur.RG, colporteur.ShirtSize, colporteur.IsActive, colporteur.SinceDate, (colporteur.ImageId == Guid.Empty ? null : colporteur.ImageId), (Guid)colporteur.TeamId);

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
