using Microsoft.EntityFrameworkCore;
using Core.Entities;

namespace Infrastructure.Persistence.AsmDBContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Message> Messages { get; set; }

        // Add more DbSet<> properties for other entities

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Adjust configuration for Message table
            modelBuilder.Entity<Message>()
                .Property(m => m.DateSent)
                .HasDefaultValueSql("NOW(6)"); // Change from CURRENT_TIMESTAMP to NOW(6), which works better for MySQL.

        }
    }
}
