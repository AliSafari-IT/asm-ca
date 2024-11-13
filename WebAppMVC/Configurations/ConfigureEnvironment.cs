
namespace WebAppMVC.Configurations;

public static class ConfigureEnvironment1
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
            //         options.ListenAnyIP(int.Parse(httpPort));
            //     });
            // }
            // else
            // {
            //     builder.WebHost.UseKestrel(options =>
            //     {
            //         options.ListenLocalhost(5146); // HTTP (local dev)
            //         options.ListenLocalhost(44337, listenOptions => listenOptions.UseHttps());
            //     });
            // }

    }
}