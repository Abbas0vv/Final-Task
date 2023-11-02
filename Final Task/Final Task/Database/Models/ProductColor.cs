using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;

namespace Final_Task.Database.Models;

[Table("ProductColor")]
public class ProductColor
{
    public Product Product { get; set; }
    public int ProductId { get; set; }


    public Color Color { get; set; }
    public int ColorId { get; set; }
}
