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

       // POST api/users
       [HttpPost]
       public async Task<IActionResult> CreateUser([FromBody] AppUser user)
       {
           if (user == null)
           {
               _logger.LogInformation("User data is null.");
               return BadRequest("User data is null.");
           }
       
           var userDto = await _userManager.Users
               .Select(u => new UserDto
               {
                   UserName = u.UserName,
                   EmailConfirmed = (bool)u.EmailConfirmed
               })
               .FirstOrDefaultAsync(u => u.UserName == user.UserName);
       
           if (userDto != null)
           {
               _logger.LogInformation($"User '{user.UserName}' already exists.");
               return BadRequest($"User '{user.UserName}' already exists.");
           }
       
           var newUser = new AppUser
           {
               UserName = user.UserName,
               Email = user.Email,
               EmailConfirmed = user.EmailConfirmed
           };
       
           var result = await _userManager.CreateAsync(newUser, user.PasswordHash);
       
           if (result.Succeeded)
           {
               _logger.LogInformation($"User '{user.UserName}' created successfully.");
               return Ok("User created successfully.");
           }
           else
           {
               _logger.LogInformation($"User '{user.UserName}' creation failed.");
               return StatusCode(500, "User creation failed.");
           }
       }
       
        // GET api/users
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userManager.Users
                .Select(u => new UserDto
                {
                    UserName = u.UserName,
                    EmailConfirmed = (bool)u.EmailConfirmed
                })
                .ToListAsync();

            _logger.LogInformation("Retrieved list of users.");

            return Ok(users);
        }

        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetCurrentUser()
        {
            // Extract the username from the ClaimsPrincipal
            var userName = User?.Identity?.Name;

            // Check if the user is not authenticated
            if (string.IsNullOrEmpty(userName))
            {
                _logger.LogInformation("User is not authenticated.");
                return Unauthorized();
            }

            // Attempt to find the user in the database
            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName == userName);

            // If the user is not found, return NotFound
            if (user == null)
            {
                _logger.LogInformation($"User '{userName}' not found.");
                return NotFound();
            }

            // If the user is found, return the user data
            var userDto = new UserDto
            {
                UserName = user.UserName,
                EmailConfirmed = (bool)user.EmailConfirmed,
                IsLoggedIn = true
            };

            return Ok(userDto);
        }
    }
}
