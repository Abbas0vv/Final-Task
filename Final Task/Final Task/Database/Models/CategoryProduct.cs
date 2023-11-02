using System.ComponentModel.DataAnnotations;

namespace Final_Task.Database.Models;

public class CategoryProduct
{
    [Key]
    public int ProductId { get; set; }
    public Product Product { get; set; }

    [Key]
    public int CategoryId { get; set; }
    public Category Category { get; set; }
}
