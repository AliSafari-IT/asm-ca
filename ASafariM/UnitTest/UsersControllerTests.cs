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

namespace UnitTest
{
    public class UsersControllerTests
    {
        private readonly UsersController _controller;
        private readonly UserManager<AppUser> _userManager;

        public UsersControllerTests()
        {
            // Setup in-memory database for UserManager<AppUser>
            var options = new DbContextOptionsBuilder<WebAppMVCContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            var dbContext = new WebAppMVCContext(options);

            // Seed the in-memory database with test data if needed
            dbContext.Users.Add(new AppUser { UserName = "testuser01", EmailConfirmed = true });
            dbContext.Users.Add(new AppUser { UserName = "testuser02", EmailConfirmed = false });
            dbContext.SaveChanges();

            var userStore = new UserStore<AppUser, IdentityRole<Guid>, WebAppMVCContext, Guid>(dbContext);
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
            var result = await _controller.GetUsers();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnedUsers = Assert.IsAssignableFrom<IEnumerable<UserDto>>(okResult.Value);
            Assert.Equal(2, returnedUsers.Count());
            Assert.Equal("testuser01", returnedUsers.First().UserName);
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
