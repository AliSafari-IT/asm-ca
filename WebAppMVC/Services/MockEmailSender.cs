using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.UI.Services;

namespace WebAppMVC.Tests
{
    public class MockEmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            // Log or store the email for verification during testing.
            return Task.CompletedTask;
        }
    }
}
