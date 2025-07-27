import { Github, Linkedin, Instagram, Twitter, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/Palak0230", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#achievements", label: "Awards" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">
                Palak<span className="text-muted-foreground">Pandey</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                BTech CSE Student passionate about AI, full-stack development, and creating 
                innovative solutions. Always eager to learn and contribute to impactful projects.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon 
                      size={20} 
                      className="text-muted-foreground group-hover:text-foreground transition-colors" 
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:palakpandey3232@gmail.com"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                palakpandey3232@gmail.com
              </a>
              <p className="text-muted-foreground">VIT Bhopal, India</p>
              <p className="text-sm text-muted-foreground">
                Open to collaborations and new opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Palak Pandey. Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Built with React & Tailwind CSS</span>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="rounded-full w-10 h-10 p-0"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;