using Microsoft.EntityFrameworkCore;
using WebAppMVC.Areas.Identity.Data;

public class GetConfigServices
{

    public static void ConfigureServices( WebApplicationBuilder builder)
    {
        var services = builder.Services;
        //var dataConnectionString = builder.Configuration.GetConnectionString("WebAppMVCContextConnection") ?? throw new InvalidOperationException("Connection string 'WebAppMVCContextConnection' not found.");
        var dbConnectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");


        services.AddDbContext<WebAppMVCContext>(options =>
     options.UseMySql(dbConnectionString,
     ServerVersion.AutoDetect(dbConnectionString),
     mySqlOptions => mySqlOptions.EnableRetryOnFailure()));

        services.AddDefaultIdentity<AppUser>(options => options.SignIn.RequireConfirmedAccount = true).AddEntityFrameworkStores<WebAppMVCContext>();

        // Add services to the container.
        services.AddControllersWithViews();
    }
}