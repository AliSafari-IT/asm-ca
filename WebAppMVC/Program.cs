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

            app.UseStaticFiles();

            app.UseRouting();
            ConfigureCors.UseCors(app);
            ConfigureSessions.UseSessions(app);
            app.UseAuthentication();
            app.UseAuthorization();
            // app.UseEndpoints(endpoints =>
            //     {
            //         endpoints.MapControllerRoute(
            //             name: "default",
            //             pattern: "{controller=Home}/{action=Index}/{id?}");
            //         endpoints.MapControllers();
            //         endpoints.MapRazorPages();
            //     });


            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");
            app.MapControllers();
            app.MapRazorPages();
            app.UseHttpsRedirection();
            app.Run();
        }
    }
}
