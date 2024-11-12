using Microsoft.AspNetCore.Mvc;
using WebAppMVC.Models; // Assuming you have a User model
using Microsoft.Extensions.Logging;
using Core.Entities;
using Microsoft.AspNetCore.Identity;
using WebAppMVC.Areas.Identity.Data;
using WebAppMVC.Models.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Infrastructure.Services;

namespace WebAppMVC.Controllers
{
    [Route("api/[controller]")]
    [ApiController] // Add this attribute for API controllers
    public class MessagesController : ControllerBase
    {
        private readonly ILogger<MessagesController> _logger;
        private readonly MessageManager<Message> _msgManager;

        public MessagesController(ILogger<MessagesController> logger, MessageManager<Message> msgManager)
        {
            _logger = logger;
            _msgManager = msgManager;
        }
        [HttpGet]
        [Authorize] // Ensure that only authenticated users can access this endpoint
        public async Task<IActionResult> GetMessages()
        {
            var messages = await _msgManager.GetMessagesAsync();
            return Ok(messages);
        }
        // Create  a new message
        [HttpPost]
        [Authorize] // Ensure that only authenticated users can access this endpoint
        public async Task<IActionResult> CreateMessage([FromBody] Message message)
        {
            var result = await _msgManager.CreateMessageAsync(message);
            return Ok(result);
        }

        [HttpGet("{userName}/messages")]
        [Authorize] // Ensure that only authenticated users can access this endpoint
        public async Task<IActionResult> GetUserMessages(string userName)
        {
            // Ensure the user is authorized to access their messages.
            if (User.Identity?.Name != userName)
            {
                return Forbid();
            }

            var userMessages = await _msgManager.GetMessagesForUserAsync(userName);
            if (userMessages == null || userMessages.Count == 0)
            {
                return NotFound();
            }

            return Ok(userMessages);
        }

    }


}