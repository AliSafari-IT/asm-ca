using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;

namespace WebAppMVC.Areas.Identity.Data;



public class AppUser : IdentityUser<Guid>
{
    public Guid Id { get; set; }
    public string? Email { get; set; }

    public string? FirstName { get; set; } = string.Empty;
    public string? LastName { get; set;} = string.Empty;

    public bool? EmailConfirmed { get; set; } = false;

    public string UserName
    {
        get => Email?.Split('@')[0].Replace(".", "");
        set => base.UserName = value;
    }

    // Other properties...
}

