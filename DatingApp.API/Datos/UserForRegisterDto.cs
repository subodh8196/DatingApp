using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Datos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8,MinimumLength = 4, ErrorMessage = "You Must Specify password between 4 and 8 char")]
        public string Password { get; set; }
    }
}  