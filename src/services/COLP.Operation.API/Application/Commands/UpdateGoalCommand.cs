﻿using COLP.Core.Messages;
using COLP.Operation.API.Application.Validations;

namespace COLP.Operation.API.Application.Commands
{
    public class UpdateGoalCommand : Command
    {
        public decimal Value { get; private set; }
        public string Name { get; private set; }
        public Guid? TeamId { get; private set; }
        public Guid? ColporteurId { get; private set; }
        public Guid GoalId { get; private set; }

        public UpdateGoalCommand(decimal value, string name, Guid? teamId, Guid? colporteurId, Guid goalId)
        {
            Value = value;
            Name = name;
            TeamId = teamId;
            ColporteurId = colporteurId;
            GoalId = goalId;
        }

        public override bool IsValid()
        {
            ValidationResult = new UpdateGoalValidation().Validate(this);
            return ValidationResult.IsValid;
        }
    }
}
