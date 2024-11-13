using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Logging;
using WebAppMVC.Areas.Identity.Data;

namespace WebAppMVC.Areas.Identity.Pages.Account
{
    public class RegisterModel : PageModel
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IEmailSender _emailSender;
        private readonly ILogger<RegisterModel> _logger;

        public RegisterModel(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IEmailSender emailSender, ILogger<RegisterModel> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _emailSender = emailSender;
            _logger = logger;
        }

        [BindProperty]
        public InputModel Input { get; set; } = new InputModel();

        public string ReturnUrl { get; set; } = "~/";

        public IList<AuthenticationScheme> ExternalLogins { get; set; } = new List<AuthenticationScheme>();

        public class InputModel
        {
            [Display(Name = "Username")]
            [DataType(DataType.Text)]
            [StringLength(50, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 3)]
            public string? UserName { get; set; } // Making this optional

            [Required(ErrorMessage = "Email is required.")]
            [EmailAddress(ErrorMessage = "Invalid email format.")]
            [Display(Name = "Email")]
            public string Email { get; set; }

            [Required(ErrorMessage = "Password is required.")]
            [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
            [DataType(DataType.Password)]
            [Display(Name = "Password")]
            public string Password { get; set; }

            [DataType(DataType.Password)]
            [Display(Name = "Confirm password")]
            [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
            public string ConfirmPassword { get; set; }

            [Required(ErrorMessage = "First Name is required.")]
            [Display(Name = "First Name")]
            public string FirstName { get; set; }

            [Required(ErrorMessage = "Last Name is required.")]
            [Display(Name = "Last Name")]
            public string LastName { get; set; }

            public InputModel()
            {
               
            }
        }


        public async Task OnGetAsync(string returnUrl = null)
        {
            ReturnUrl = returnUrl ?? "~/";
            ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
        }

        public async Task<IActionResult> OnPostAsync(string returnUrl = null)
        {
            returnUrl ??= Url.Content("~/");

            ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();

            // Check if the email is already taken
            var existingUser = await _userManager.FindByEmailAsync(Input.Email);
            if (existingUser != null)
            {
                ModelState.AddModelError(string.Empty, "An account with this email address already exists.");
                return Page();
            }

            if (ModelState.IsValid)
            {
                // Set the username if it's not provided in the form
                var userName = string.IsNullOrEmpty(Input.UserName)
                    ? Input.Email.Replace('@', '_').Replace('.', '_').Replace('+', '_')
                    : Input.UserName;

                // Check if the username is already taken
                var existingUserName = await _userManager.FindByNameAsync(userName);
                if (existingUserName != null)
                {
                    ModelState.AddModelError(string.Empty, "The username is already taken. Please choose another one.");
                    return Page();
                }

                // Create the user instance
                var user = new AppUser
                {
                    Email = Input.Email,
                    UserName = userName,
                    SecurityStamp = Guid.NewGuid().ToString(),
                    FirstName = Input.FirstName,
                    LastName = Input.LastName
                    
                };

                var result = await _userManager.CreateAsync(user, Input.Password);
                
                if (result.Succeeded)
                {
                    // Ensure the user is correctly saved and retrieved before generating the token
                    user = await _userManager.FindByEmailAsync(user.Email);
                    if (user == null)
                    {
                        ModelState.AddModelError(string.Empty, "Unexpected error occurred while trying to create the user.");
                        return Page();
                    }

                    if (string.IsNullOrEmpty(user.SecurityStamp))
                    {
                        ModelState.AddModelError(string.Empty, "Failed to generate a valid user security stamp.");
                        return Page();
                    }

                    // Generate the email confirmation token
                    var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    if (string.IsNullOrEmpty(code))
                    {
                        ModelState.AddModelError(string.Empty, "Failed to generate email confirmation token.");
                        return Page();
                    }

                    code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                    var callbackUrl = Url.Page(
                        "/Account/ConfirmEmail",
                        pageHandler: null,
                        values: new { userId = user.Id, code = code },
                        protocol: Request.Scheme);

                    await _emailSender.SendEmailAsync(Input.Email, "Confirm your email",
                        $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");

                    _logger.LogInformation("User registered successfully. Confirmation email sent.");
                    return RedirectToPage("RegisterConfirmation", new { email = Input.Email });
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }

            // If we got this far, something failed, redisplay form
            return Page();
        }


    }
}
