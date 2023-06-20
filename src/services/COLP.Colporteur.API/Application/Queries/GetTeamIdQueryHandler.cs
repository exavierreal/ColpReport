using COLP.Person.API.Data.Repository;
using MediatR;

namespace COLP.Person.API.Application.Queries
{
    public class GetTeamIdQueryHandler : IRequestHandler<GetTeamIdQuery, Guid?>
    {
        private readonly IColporteurRepository _repository;

        public GetTeamIdQueryHandler(IColporteurRepository repository)
        {
            _repository = repository;
        }

        public async Task<Guid?> Handle(GetTeamIdQuery request, CancellationToken cancellationToken)
        {
            return await _repository.GetTeamIdByUserId(request.UserId);
        }
    }
}
