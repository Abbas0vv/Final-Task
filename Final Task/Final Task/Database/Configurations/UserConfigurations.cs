using Final_Task.Database.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Final_Task.Database.Configurations;

public class UserConfigurations : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder
            .ToTable("Users");

        builder
           .HasOne<UserActivation>(u => u.Activation)
           .WithOne(ua => ua.User)
           .HasForeignKey<UserActivation>(ua => ua.UserId);
    }
}