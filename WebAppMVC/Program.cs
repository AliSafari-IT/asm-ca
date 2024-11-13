using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebAppMVC.Areas.Identity.Data;
using System.Text;
using System.Text.Json.Serialization;

using Microsoft.AspNetCore.Authentication.JwtBearer;

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using WebAppMVC.Configurations;
//using Infrastructure.Services;
using Core.Entities;
using Infrastructure.Persistence.AsmDBContext;
using Microsoft.AspNetCore.Identity.UI.Services;
using Infrastructure.Services;

namespace WebAppMVC
{
    public class Program
    {
        public static void Main(string[] args)
        {


            var builder = WebApplication.CreateBuilder(args);

            // Add session services
            ConfigureSessions.Configure(builder);

            //builder.Services.AddDbContext<WebAppMVCContext>(options => options.UseSqlite(dataConnectionString));
            // Add the database context
            GetConfigServices.ConfigureServices(builder);

            // development setup
            ConfigureEnvironment.Configure(builder);

            // Add services to the container.
            builder.Services.AddControllersWithViews();

            // Add cors policy
            ConfigureCors.AddPolicy(builder);

            // Add cookie settings
            CookieSettings.Configure(builder);


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            // app.MapControllers();

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            ConfigureCors.UseCors(app);

            app.UseAuthentication();
            app.UseAuthorization();

            // Add sessions
            ConfigureSessions.UseSessions(app);

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");
            app.MapRazorPages();

            app.Run();
        }
    }

    internal class ConfigureSessions
    {

        public static void Configure(WebApplicationBuilder builder)
        {
            builder.Services.AddSession();
            builder.Services.AddHttpContextAccessor();
        }

        public static void UseSessions(IApplicationBuilder app)
        {
            app.UseSession();
        }


    }

    public static class ConfigureCors
    {
        private static readonly string _policyName = "AllowFrontend";

        public static void AddPolicy(WebApplicationBuilder builder)
        {
            var services = builder.Services;
            services.AddCors(options =>
                {
                    options.AddPolicy(_policyName,
                    builder =>
                            {
                                builder.WithOrigins("http://localhost:3000")
                                    .AllowAnyHeader()
                                    .AllowAnyMethod()
                                    .AllowCredentials(); // This allows cookies or credentials
                            });
                });

            services.AddControllersWithViews();
            services.AddRazorPages();
        }

        // Configure the HTTP request pipeline.
        public static void UseCors(WebApplication app)
        {
            app.UseCors(_policyName);
        }
    }

    public static class ConfigureEnvironment
    {
        public static void Configure(WebApplicationBuilder builder)
        {
            // var environment = builder.Environment;

            // Configure Kestrel
            // if (environment.IsProduction())
            // {
            //     var httpPort = Environment.GetEnvironmentVariable("HTTP_PORT") ?? "5000";
            //     builder.WebHost.UseKestrel(options =>
            //     {
            //         options.Listen(IPAddress.Any, int.Parse(httpPort), listenOptions =>
            //         {
            //             listenOptions.Protocols = HttpProtocols.Http1AndHttp2;
            //         });
            //     });
            // }
            // }

        }
    }

    public class GetConfigServices
    {
        public static void ConfigureServices(WebApplicationBuilder builder)
        {
            var services = builder.Services;

            var defaultConnectionString = builder.Configuration.GetConnectionString("DefaultConnection")
                ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

            // Register the No-Op Email Sender
            services.AddSingleton<IEmailSender, NoOpEmailSender>();

            // Use WebAppMVCContext for anything related to Identity
            services.AddDbContext<WebAppMVCContext>(options =>
                options.UseMySql(defaultConnectionString, ServerVersion.AutoDetect(defaultConnectionString),
                    mySqlOptions => mySqlOptions.MigrationsAssembly("WebAppMVC")));

            // Use AppDbContext for application-specific entities
            services.AddDbContext<AppDbContext>(options =>
                options.UseMySql(defaultConnectionString, ServerVersion.AutoDetect(defaultConnectionString),
                    mySqlOptions =>
                        mySqlOptions.MigrationsAssembly("Infrastructure").EnableRetryOnFailure()
                ));

            // Configure Identity services
            services.AddIdentity<AppUser, IdentityRole<Guid>>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<WebAppMVCContext>()
                    .AddDefaultTokenProviders();

            // Register custom services like MessageManager
            services.AddScoped<MessageManager<Message>>();

            // Additional services configuration (if needed)
            services.AddControllersWithViews();
            services.AddRazorPages();
        }

    }




    public static class CookieSettings
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

}