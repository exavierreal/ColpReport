﻿using COLP.Core.Messages;
using COLP.Images.API.Application.Validations;

namespace COLP.Images.API.Application.Commands
{
    public class SaveImageCommand : Command
    {
        public Guid Id { get; private set; }
        public string FileName { get; private set; }
        public string ImageData { get; private set; }
        public bool IsProfileImageActive { get; private set; }

        public SaveImageCommand(Guid id, string fileName, string imageData, bool isProfileImageActive)
        {
            AggregateId = id;
            Id = id;
            FileName = fileName;
            ImageData = imageData;
            IsProfileImageActive = isProfileImageActive;
        }

        public override bool IsValid()
        {
            ValidationResult = new SaveImageValidation().Validate(this);
            return ValidationResult.IsValid;
        }
    }
}
