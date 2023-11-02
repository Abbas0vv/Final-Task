using Final_Task.Database.Base;

namespace Final_Task.Database.Models;

public class Size : BaseEntity<int>, IAuditable
{
    public string Name { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public List<ProductSize> ProductSizes { get; set; }
}

