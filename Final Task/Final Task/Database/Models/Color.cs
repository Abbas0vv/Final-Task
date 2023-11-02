using Final_Task.Database.Base;

namespace Final_Task.Database.Models;

public class Color : BaseEntity<int>, IAuditable
{
    public string Name { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public List<ProductColor> ProductColors { get; set; }
}

