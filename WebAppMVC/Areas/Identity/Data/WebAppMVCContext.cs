using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Reflection.Emit;
using WebAppMVC.Areas.Identity.Data.Config;

namespace WebAppMVC.Areas.Identity.Data;
public class WebAppMVCContext : IdentityDbContext<AppUser, IdentityRole<Guid>, Guid>
{
    public WebAppMVCContext(DbContextOptions<WebAppMVCContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.ApplyConfiguration(new AppUserConfig());
    }
}

