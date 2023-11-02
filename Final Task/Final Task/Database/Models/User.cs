using Final_Task.Database.Base;
using System.Data;

namespace Final_Task.Database.Models;

public class User : BaseEntity<int>, IAuditable
{
    public string Name { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public bool IsConfirmed { get; set; }

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public List<Order> Orders { get; set; }

    public UserActivation Activation { get; set; }
    public List<AlertMessage> AlerMessages { get; set; }

}
