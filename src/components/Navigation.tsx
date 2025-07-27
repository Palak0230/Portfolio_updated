import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Instagram, Twitter, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#achievements", label: "Awards" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Palak0230", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/palak-pandey-3b4849279/", label: "LinkedIn" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "glass-effect backdrop-blur-xl" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="font-bold text-xl lg:text-2xl text-foreground">
            Palak<span className="text-muted-foreground">Pandey</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="ml-2"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-xl rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;