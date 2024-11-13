
namespace WebAppMVC.Configurations;

public static class ConfigureCors1
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