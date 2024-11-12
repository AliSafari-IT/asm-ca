using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;

namespace WebAppMVC.Areas.Identity.Data;



public class AppUser : IdentityUser<Guid>
{

    public Guid Id { get; set; }
    public string UserName { get; set; }
    public string? Email { get; set; }

    public bool? EmailConfirmed { get; set; }


    // Other properties...
}

