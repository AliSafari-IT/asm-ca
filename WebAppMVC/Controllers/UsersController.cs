using Microsoft.AspNetCore.Mvc;
using WebAppMVC.Models; // Assuming you have a User model
using Microsoft.Extensions.Logging;
using Core.Entities;
using Microsoft.AspNetCore.Identity;
using WebAppMVC.Areas.Identity.Data;
using WebAppMVC.Models.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

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
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userManager.Users
                .Select(u => new UserDto
                {
                    UserName = u.UserName,
                    EmailConfirmed = u.EmailConfirmed
                })
                .ToListAsync();

            _logger.LogInformation("Retrieved list of users.");

            return Ok(users);
        }

        [Authorize] // Ensure that only authenticated users can access this endpoint
        [HttpGet("me")]
        public async Task<IActionResult> GetCurrentUser()
        {
            var userName = User.Identity.Name;
            if (string.IsNullOrEmpty(userName))
            {
                return Unauthorized();
            }

            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName == userName);
            if (user == null)
            {
                return NotFound();
            }

            var userDto = new UserDto
            {
                UserName = user.UserName,
                EmailConfirmed = user.EmailConfirmed,
                IsLoggedIn = true
            };

            return Ok(userDto);
        }
    }
}
