using Final_Task.Database.Base;
using Final_Task.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace Final_Task.Database;

public class LimakDbContext : DbContext
{
    public LimakDbContext(DbContextOptions<LimakDbContext> options)
    : base(options) { }

    public override int SaveChanges()
    {
        foreach (var entry in ChangeTracker.Entries())
        {
            if (entry.Entity is not IAuditable)
                continue;

            IAuditable auditable = (IAuditable)entry.Entity;

            if (entry.State == EntityState.Added)
            {
                auditable.CreatedAt = DateTime.UtcNow;
                auditable.UpdatedAt = DateTime.UtcNow;
            }
            else if (entry.State == EntityState.Modified)
            {
                auditable.UpdatedAt = DateTime.UtcNow;
            }
        }

        return base.SaveChanges();
    }

    protected override void     OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(LimakDbContext).Assembly);

        base.OnModelCreating(modelBuilder);

    }
    public DbSet<Product> Products { get; set; }
    public DbSet<CategoryProduct> CategoryProducts { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Size> Sizes { get; set; }
    public DbSet<Color> Colors { get; set; }
    public DbSet<EmailMessage> EmailMessages { get; set; }
    public DbSet<ProductColor> ProductColors { get; set; }
    public DbSet<ProductSize> ProductSizes { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }
    public DbSet<UserActivation> UserActivations { get; set; }
    public DbSet<AlertMessage> AlertMessages { get; set; }
}

