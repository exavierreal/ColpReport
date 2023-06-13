using System.ComponentModel.DataAnnotations;

namespace COLP.Management.API.ViewModels.Team
{
    public class TeamViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Name { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public Guid AssociationId { get; set; }

        public string FileName { get; set; }

        public string ImageData { get; set; }

        public decimal Goal { get; set; }
    }
}
