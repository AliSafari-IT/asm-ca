using Core.Entities;
using Infrastructure.Persistence.AsmDBContext;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using WebAppMVC.Areas.Identity.Data;

namespace WebAppMVC.Configurations
{
    public class GetConfigServices
    {
        public static void ConfigureServices(WebApplicationBuilder builder)
        {
            var services = builder.Services;

            var defaultConnectionString = builder.Configuration.GetConnectionString("DefaultConnection")
                ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

            // Use WebAppMVCContext for anything related to Identity
            services.AddDbContext<WebAppMVCContext>(options =>
                options.UseMySql(defaultConnectionString, ServerVersion.AutoDetect(defaultConnectionString),
                    mySqlOptions => mySqlOptions.MigrationsAssembly("WebAppMVC"))); // Specify WebAppMVC as the migrations assembly for Identity

            // Use AppDbContext for application-specific entities
            services.AddDbContext<AppDbContext>(options =>
                options.UseMySql(defaultConnectionString, ServerVersion.AutoDetect(defaultConnectionString),
                    mySqlOptions => 
                        mySqlOptions.MigrationsAssembly("Infrastructure") // Specify Infrastructure as the migrations assembly
                        .EnableRetryOnFailure()
                ));

            // Configure Identity services
            services.AddDefaultIdentity<AppUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<WebAppMVCContext>();

            // Register custom services like MessageManager
            services.AddScoped<MessageManager<Message>>();

            // Additional services configuration (if needed)
            services.AddControllersWithViews();
            services.AddRazorPages();
        }
    }
}
