using Final_Task.Database.Base;

namespace Final_Task.Database.Models;

public class Category : BaseEntity<int>, IAuditable
{
    public string Name { get; set; }


    public override string ToString()
    {
        return $"Id : {Id}, Name : {Name}";
    }

    public List<CategoryProduct> CategoryProducts { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

