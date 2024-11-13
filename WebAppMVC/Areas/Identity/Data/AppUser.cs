using Microsoft.AspNetCore.Identity;


namespace WebAppMVC.Areas.Identity.Data
{
    public class AppUser : IdentityUser<Guid>
    {
        public Guid Id { get; set; }

        private string? _email;
        public override string? Email
        {
            get => _email;
            set
            {
                _email = value ?? string.Empty;
                // Update UserName whenever Email is set only if UserName is not explicitly provided
                if (string.IsNullOrEmpty(UserName))
                {
                    UserName = _email?.Replace('@', '_')
                                      .Replace('.', '_')
                                      .Replace('+', '_');
                }
                SecurityStamp = Guid.NewGuid().ToString();
            }
        }

        public string? FirstName { get; internal set; }
        public string? LastName { get; internal set; }
    }
}
