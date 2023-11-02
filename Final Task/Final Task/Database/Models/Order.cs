using Final_Task.Contracts;
using Final_Task.Database.Base;

namespace Final_Task.Database.Models;

public class Order : BaseEntity<int>, IAuditable
{
    public OrderStatus Status { get; set; }
    public string TrackingCode { get; set; }

    public int UserId { get; set; }
    public User User { get; set; }


    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public List<OrderItem> OrderItems { get; set; }
}
