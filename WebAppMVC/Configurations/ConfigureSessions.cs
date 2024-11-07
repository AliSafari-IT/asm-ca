namespace WebAppMVC.Configurations
{
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
}