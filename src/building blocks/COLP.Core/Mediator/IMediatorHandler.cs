using COLP.Core.Messages;
using FluentValidation.Results;

namespace COLP.Core.Mediator
{
    public interface IMediatorHandler
    {
        Task PublishEvent<T> (T evt) where T : Event;
        Task<ValidationResult> SendCommand<T>(T command) where T : Command;
    }
}
