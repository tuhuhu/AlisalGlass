using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AlisalGlass.Startup))]
namespace AlisalGlass
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
