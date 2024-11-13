using Xunit;
using Moq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Threading.Tasks;
using WebAppMVC.Areas.Identity.Data;
using WebAppMVC.Controllers;
using WebAppMVC.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Infrastructure.Persistence.AsmDBContext;

namespace UnitTest
{
    public class UsersControllerTests : IAsyncLifetime
    {
        private readonly UsersController _controller;
        private readonly UserManager<AppUser> _userManager;
        private readonly WebAppMVCContext _dbContext;

        public UsersControllerTests()
        {
            // Create a unique database name for each test
            var options = new DbContextOptionsBuilder<WebAppMVCContext>()
                .UseInMemoryDatabase("testDB") // Use an in-memory database for isolation
                .Options;

            _dbContext = new WebAppMVCContext(options);

            // Seed the database with test data
            _dbContext.Users.Add(new AppUser { UserName = "testuser01", EmailConfirmed = true, Email = "V7bB1@example.com" });
            _dbContext.Users.Add(new AppUser { UserName = "testuser02", EmailConfirmed = false, Email = "V7bB2@example.com" });
            _dbContext.SaveChanges();

            var userStore = new UserStore<AppUser, IdentityRole<Guid>, WebAppMVCContext, Guid>(_dbContext);
            _userManager = new UserManager<AppUser>(
                userStore,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                Mock.Of<ILogger<UserManager<AppUser>>>());

            var logger = Mock.Of<ILogger<UsersController>>();
            _controller = new UsersController(_userManager, logger);
        }

        public async Task InitializeAsync()
        {
            // Before each test, ensure the database is created
            await _dbContext.Database.EnsureDeletedAsync();
            await _dbContext.Database.EnsureCreatedAsync();

            // Optional: seed any additional data if needed for each test
            _dbContext.Users.Add(new AppUser { UserName = "testuser01", EmailConfirmed = true, Email = "V7bB1@example.com" });
            _dbContext.Users.Add(new AppUser { UserName = "testuser02", EmailConfirmed = false, Email = "V7bB2@example.com" });
            await _dbContext.SaveChangesAsync();
        }

        public async Task DisposeAsync()
        {
            // After each test, ensure the database is deleted to avoid conflicts
            await _dbContext.Database.EnsureDeletedAsync();
        }

        [Fact]
        public async Task GetCurrentUser_ReturnsNotFound_WhenUserIsNotFound()
        {
            // Arrange
            var httpContext = new DefaultHttpContext
            {
                User = new ClaimsPrincipal(new ClaimsIdentity(new Claim[]
                {
                    new(ClaimTypes.Name, "nonexistentuser")
                }))
            };

            _controller.ControllerContext = new ControllerContext
            {
                HttpContext = httpContext
            };

            // Act
            var result = await _controller.GetCurrentUser();

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task GetUsers_ReturnsOkResult_WithListOfUsers()
        {
            // Act
            var httpContext = new DefaultHttpContext
            {
                User = new ClaimsPrincipal(new ClaimsIdentity(new Claim[]
                {
                    new(ClaimTypes.Name, "testuser01")
                }))
            };

            _controller.ControllerContext = new ControllerContext
            {
                HttpContext = httpContext
            };

            var result = await _controller.GetUsers();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var users = Assert.IsType<List<UserDto>>(okResult.Value);
            Assert.Equal(2, users.Count);
        }

        [Fact]
        public async Task GetCurrentUser_ReturnsUnauthorized_WhenUserIsNotAuthenticated()
        {
            // Arrange
            var httpContext = new DefaultHttpContext();
            _controller.ControllerContext = new ControllerContext
            {
                HttpContext = httpContext
            };

            // Act
            var result = await _controller.GetCurrentUser();

            // Assert
            Assert.IsType<UnauthorizedResult>(result);
        }
    }
}
