
namespace WebAppMVC.Configurations;

public static class ConfigureCors
{
    private static readonly string _policyName = "AllowFrontend";

    public static void AddPolicy(WebApplicationBuilder builder)
    {
        var services = builder.Services;
        // Add CORS Policy
        // builder.Services.AddCors(options =>
        // {
        //     options.AddPolicy(_policyName, builder =>
        //     {
        //         builder.WithOrigins(
        //             "http://localhost:3000",
        //             "https://asafarim.com",
        //             "https://preview.asafarim.com",
        //             "https://techdocs.asafarim.com"
        //         )
        //             .AllowAnyMethod()
        //             .AllowAnyHeader();
        //     });
        // });

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