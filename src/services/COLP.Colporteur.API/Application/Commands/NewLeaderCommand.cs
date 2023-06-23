using COLP.Core.Messages;

namespace COLP.Person.API.Application.Commands
{
    public class NewLeaderCommand : Command
    {
        public Guid Id { get; private set; }
    }
}
