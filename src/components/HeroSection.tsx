import { ArrowDown, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Palak0230", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/palak-pandey-3b4849279/", label: "LinkedIn" },
  ];

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="floating-particle absolute w-2 h-2 bg-muted-foreground/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Palak Pandey
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed">
                BTech CSE Student @VIT Bhopal | Python & Java Developer | ML Enthusiast
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                "Engineering solutions with code — from AI models to real-time apps. 
                Focused on innovation, automation, and building scalable tech."
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`p-3 rounded-full border border-border hover:border-foreground transition-all duration-300 hover:scale-110 fade-in-up stagger-${index + 1}`}
                    aria-label={social.label}
                  >
                    <Icon size={24} className="text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
  <Button 
    size="lg" 
    className="group px-8 py-3 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
    asChild
  >
    <a href="#projects">
      View My Work
      <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
    </a>
  </Button>

  <Button 
    variant="outline" 
    size="lg" 
    className="px-8 py-3 border-border hover:border-foreground transition-all duration-300"
    asChild
  >
    <a href="#contact">Get In Touch</a>
  </Button>

  <Button 
    variant="secondary"
    size="lg"
    className="px-8 py-3 hover:bg-muted-foreground/20 transition-all duration-300"
    asChild
  >
    <a 
      href="/Palak_Pandey_Resume.pdf" 
      download 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Download Resume
    </a>
  </Button>
</div>

          </div>

          {/* Portrait Image */}
          <div className="flex justify-center lg:justify-end fade-in-up stagger-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-muted-foreground/20 to-foreground/20 rounded-full blur-2xl scale-110" />
              
              {/* Portrait */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border hover:border-foreground transition-all duration-500 hover:scale-105">
                <img
                  src={heroPortrait}
                  alt="Palak Pandey"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-muted-foreground/30 rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-foreground/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;