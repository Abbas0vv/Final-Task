using Final_Task.Database;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using NETCore.MailKit.Core;

namespace Final_Task
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            //Services
            builder.Services
                .AddControllersWithViews()
                .AddRazorRuntimeCompilation();

            builder.Services
                .AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme);

            builder.Services
                .AddDbContext<LimakDbContext>(o =>
                {
                    o.UseNpgsql(builder.Configuration.GetConnectionString("Default"));
                });
            builder.Services
            .AddSignalR();

            var app = builder.Build();

            //Middleware (Chain of responsibily)
            app.UseStaticFiles();

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllerRoute("default", "{controller=Home}/{action=Index}");

            app.Run();
        }
    }
}