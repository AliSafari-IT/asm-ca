using Microsoft.AspNetCore.Mvc;
using WebAppMVC.Models; // Assuming you have a User model
using Microsoft.Extensions.Logging;
using Core.Entities;
using Microsoft.AspNetCore.Identity;
using WebAppMVC.Areas.Identity.Data;
using WebAppMVC.Models.DTOs;

namespace WebAppMVC.Controllers
{
    [Route("api/[controller]")]
    [ApiController] // Add this attribute for API controllers
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
         private readonly UserManager<AppUser> _userManager;

        // Inject any necessary services, such as a user repository or database context
         public UsersController(UserManager<AppUser> userManager, ILogger<UsersController> logger)
        {
            _userManager = userManager;
            _logger = logger;
        }
        // GET api/users
        // GET: api/users
        [HttpGet]
        public IActionResult GetUsers()
        {
            // Fetch users and project to a DTO to avoid exposing sensitive data
            var users = _userManager.Users.Select(u => new UserDto
            {
                UserName = u.UserName,
                EmailConfirmed = u.EmailConfirmed
            }).ToList();

            _logger.LogInformation("Retrieved list of users.");

            return Ok(users);
        }
    }
}
