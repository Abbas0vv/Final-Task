using Final_Task.Database.Base;

namespace Final_Task.Database.Models;

public class UserActivation : BaseEntity<int>, IAuditable
{
    public Guid Token { get; set; }
    public DateTime ExpireDate { get; set; }

    public int UserId { get; set; }
    public User User { get; set; }
        
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}