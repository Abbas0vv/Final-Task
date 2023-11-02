using Final_Task.Database.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Final_Task.Database.Configurations;

public class CategoryProductConfiguration : IEntityTypeConfiguration<CategoryProduct>
{
    public void Configure(EntityTypeBuilder<CategoryProduct> builder)
    {
        builder
             .ToTable("CategoryProducts");

        builder
            .HasKey(cp => new { cp.ProductId, cp.CategoryId });

        builder
            .HasOne<Product>(ct => ct.Product)
            .WithMany(p => p.CategoryProducts)
            .HasForeignKey(ct => ct.ProductId);

        builder
            .HasOne<Category>(ct => ct.Category)
            .WithMany(p => p.CategoryProducts)
            .HasForeignKey(ct => ct.CategoryId);
    }
}