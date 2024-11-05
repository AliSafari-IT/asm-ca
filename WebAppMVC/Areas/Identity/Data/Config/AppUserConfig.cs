using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace WebAppMVC.Areas.Identity.Data.Config
{
    public class AppUserConfig : IEntityTypeConfiguration<AppUser>
    {
        public void Configure(EntityTypeBuilder<AppUser> builder)
        {

            builder.Property(p => p.FirstName)
                .HasMaxLength(100);

            builder.Property(p => p.LastName)
                .HasMaxLength(50);
        }

    }
}
