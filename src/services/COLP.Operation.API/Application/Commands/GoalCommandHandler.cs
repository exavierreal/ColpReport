﻿using COLP.Core.Messages;
using COLP.Operation.API.Application.Events;
using COLP.Operation.API.Data.Repositories;
using COLP.Operation.API.Models;
using FluentValidation.Results;
using MediatR;

namespace COLP.Operation.API.Application.Commands
{
    public class GoalCommandHandler : CommandHandler, IRequestHandler<SaveGoalCommand, ValidationResult>
    {
        private readonly IGoalRepository _goalRepository;

        public GoalCommandHandler(IGoalRepository goalRepository)
        {
            _goalRepository = goalRepository;
        }

        public async Task<ValidationResult> Handle(SaveGoalCommand request, CancellationToken cancellationToken)
        {
            if (!request.IsValid()) return request.ValidationResult;

            var goal = new Goal(request.Value, request.Name);

            _goalRepository.Add(goal);

            goal.AddEvent(new SavedGoalEvent(request.Value, request.Name));

            return await SaveChanges(_goalRepository.UnitOfWork);
        }
    }
}
