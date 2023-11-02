using Microsoft.AspNetCore.Mvc;

namespace Final_Task.Areas.Admin.Controllers;

[Route("a/d")]
[Area("admin")]
public class DashBoardController : Controller
{
    [HttpGet("index")]
    public IActionResult Index() 
    { 
        return View();
    }
}
