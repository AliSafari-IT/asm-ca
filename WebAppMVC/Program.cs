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


namespace WebAppMVC
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            //builder.Services.AddDbContext<WebAppMVCContext>(options => options.UseSqlite(dataConnectionString));
            // Add the database context
            GetConfigServices.ConfigureServices(builder);

            // development setup
            ConfigureEnvironment.Configure(builder);

            // Add services to the container.
            builder.Services.AddControllersWithViews();

            // Add cors policy
            ConfigureCors.AddPolicy(builder);

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseStaticFiles();

            app.UseRouting();
            ConfigureCors.UseCors(app);
            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");
            app.MapControllers();
            app.MapRazorPages();
            app.Run();
        }
    }
}
