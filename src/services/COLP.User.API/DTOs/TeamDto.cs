using COLP.Management.API.Models;
using System.ComponentModel.DataAnnotations;

namespace COLP.Management.API.DTOs
{
    public class TeamDto
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Name { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public Guid AssociationId { get; set; }

        public string FileName { get; set; }
        
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string ImageData { get; set; }
    }
}
