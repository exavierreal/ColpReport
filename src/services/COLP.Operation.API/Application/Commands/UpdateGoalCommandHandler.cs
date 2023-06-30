using COLP.Core.Messages;
using COLP.Operation.API.Application.Events;
using COLP.Operation.API.Data.Repositories;
using COLP.Operation.API.Models;
using FluentValidation.Results;
using MediatR;

namespace COLP.Operation.API.Application.Commands
{
    public class UpdateGoalCommandHandler : CommandHandler, IRequestHandler<UpdateGoalCommand, ValidationResult>
    {
        private readonly IGoalRepository _goalRepository;

        public UpdateGoalCommandHandler(IGoalRepository goalRepository)
        {
            _goalRepository = goalRepository;
        }

        public async Task<ValidationResult> Handle(UpdateGoalCommand request, CancellationToken cancellationToken)
        {
            if (!request.IsValid()) return request.ValidationResult;

            var goal = await _goalRepository.GetById(request.GoalId);

            goal.UpdateProperties(request.Value, request.Name, request.TeamId, request.ColporteurId);

            _goalRepository.Update(goal);

            goal.AddEvent(new SavedGoalEvent(request.Value, request.Name, request.TeamId, request.ColporteurId));

            return await SaveChanges(_goalRepository.UnitOfWork);
        }
    }
}
