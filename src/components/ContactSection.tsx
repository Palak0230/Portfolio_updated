import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus("sending");
    
    // Simulate form submission (replace with actual form service)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Get In <span className="text-muted-foreground">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                and potential collaborations. Whether you have a question, a project idea, 
                or just want to say hello, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-muted/20 flex items-center justify-center">
                  <Mail className="text-muted-foreground" size={20} />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Email</p>
                  <a 
                    href="mailto:palakpandey3232@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    palakpandey3232@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-muted/20 flex items-center justify-center">
                  <MapPin className="text-muted-foreground" size={20} />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">VIT Bhopal, India</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="card-gradient rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3">Response Time</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to emails within 24-48 hours. For urgent matters, 
                please mention "Urgent" in your subject line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div className="card-gradient rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <div className="relative">
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`transition-all duration-300 ${
                        errors.name ? "border-destructive" : "focus:border-foreground"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <div className="flex items-center space-x-1 mt-1 text-destructive text-sm">
                        <AlertCircle size={14} />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`transition-all duration-300 ${
                        errors.email ? "border-destructive" : "focus:border-foreground"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <div className="flex items-center space-x-1 mt-1 text-destructive text-sm">
                        <AlertCircle size={14} />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`min-h-[120px] transition-all duration-300 ${
                        errors.message ? "border-destructive" : "focus:border-foreground"
                      }`}
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {errors.message && (
                      <div className="flex items-center space-x-1 mt-1 text-destructive text-sm">
                        <AlertCircle size={14} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={formStatus === "sending"}
                  className="w-full relative overflow-hidden group"
                >
                  <div className="flex items-center justify-center space-x-2">
                    {formStatus === "sending" && (
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    )}
                    {formStatus === "success" && <CheckCircle size={18} />}
                    {formStatus === "error" && <AlertCircle size={18} />}
                    {formStatus === "idle" && <Send size={18} />}
                    
                    <span>
                      {formStatus === "sending" && "Sending..."}
                      {formStatus === "success" && "Message Sent!"}
                      {formStatus === "error" && "Try Again"}
                      {formStatus === "idle" && "Send Message"}
                    </span>
                  </div>
                </Button>

                {/* Status Messages */}
                {formStatus === "success" && (
                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Thanks for reaching out! I'll get back to you soon.
                    </p>
                  </div>
                )}
                
                {formStatus === "error" && (
                  <div className="text-center space-y-2">
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;