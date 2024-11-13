using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace WebAppMVC.Configurations;
public static class CookieSettings1
{
    // Updated method for configuring the cookie settings
    public static void Configure(WebApplicationBuilder builder)
    {
        // Configure the Application Cookie settings for Identity
        builder.Services.ConfigureApplicationCookie(options =>
        {
            options.Cookie.SameSite = SameSiteMode.None; // Allows cookies to be sent across different origins
            options.Cookie.SecurePolicy = CookieSecurePolicy.Always; // Requires cookies to be sent over HTTPS
            options.Cookie.HttpOnly = true; // For security, prevents JavaScript from accessing the cookie
            options.LoginPath = "/Identity/Account/Login"; // The path users will be redirected to if not logged in
            options.LogoutPath = "/Identity/Account/Logout"; // The path for logout
            options.AccessDeniedPath = "/Identity/Account/AccessDenied"; // The path for access denied page
        });
    }
}
public static class SameSiteModeExtensions
{
    public static WebApplication UseSameSiteMode(this WebApplication app)
    {
        return app;
    }
}   
