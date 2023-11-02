using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;

namespace Final_Task.Database.Models;

[Table("ProductSize")]
public class ProductSize
{
    public Product Product { get; set; }
    public int ProductId { get; set; }


    public Size Size { get; set; }
    public int SizeId { get; set; }
}