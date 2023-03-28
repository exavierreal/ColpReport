using COLP.Core.Controllers;
using COLP.Core.Messages.Integration;
using COLP.Management.API.Data.Repository;
using COLP.Management.API.DTOs;
using COLP.Management.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace COLP.Management.API.Controllers
{
    public class TeamController : MainController
    {
        private readonly ITeamRepository _repository;

        public TeamController(ITeamRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("save-team")]
        public async Task<ActionResult> SaveTeam(TeamDto teamDto)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            var team = new Team(
                Guid.NewGuid(),
                teamDto.Name,
                teamDto.AssociationId
            );

            _repository.Insert(team);
            await _repository.UnitOfWork.Commit();

            return Ok(team);
        }

        private async Task<ResponseMessage> SaveImage(TeamDto team)
        {

        }
    }
}
