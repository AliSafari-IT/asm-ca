namespace WebAppMVC.Configurations
{
    internal class ConfigureSessions1
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