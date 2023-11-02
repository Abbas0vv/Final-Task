using Final_Task.Database.Base;

namespace Final_Task.Database.Models;

public class Product : BaseEntity<int>, IAuditable
{
    public Product(string name, string decription, decimal price, int categoryId, string physicalImageName)
    {
        Name = name;
        Description = decription;
        Price = price;
        CategoryId = categoryId;
        PhysicalImageName = physicalImageName;
    }


    public Product() { }

    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int CategoryId { get; set; }
    public string PhysicalImageName { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public List<CategoryProduct> CategoryProducts { get; set; }
    public List<ProductColor> ProductColors { get; set; }
}
