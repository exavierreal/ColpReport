using MediatR;

namespace COLP.Person.API.Application.Queries
{
    public class GetTeamIdQuery : IRequest<Guid?>
    {
        public Guid? UserId { get; set; }
    }
}
