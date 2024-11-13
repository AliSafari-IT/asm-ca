using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.UI.Services;

namespace WebAppMVC.Services
{
    public class NoOpEmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            // Do nothing or log the email to console/debug output.
            return Task.CompletedTask;
        }
    }
}
