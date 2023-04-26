using COLP.Images.API.Application.Commands;
using FluentValidation;

namespace COLP.Images.API.Application.Validations
{
    public class SaveImageValidation : AbstractValidator<SaveImageCommand>
    {
        public SaveImageValidation()
        {
            RuleFor(x => x.Id)
                .NotEqual(Guid.Empty)
                .WithMessage("Id da imagem inválido");

            RuleFor(x => x.FileName)
                .NotEmpty()
                .WithMessage("Nome do arquivo não informado");
        }
    }
}
