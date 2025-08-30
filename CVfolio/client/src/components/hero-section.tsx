import { Mail, Download, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = () => {
    // For static deployment, redirect to email for resume request
    const mailtoLink = `mailto:bhavinkp05@gmail.com?subject=Resume Request&body=Hello Bhavin,%0D%0A%0D%0AI would like to request your resume.%0D%0A%0D%0AThank you!`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="about" className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            {/* Profile image container with cybersecurity-themed placeholder */}
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground mb-6 relative">
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 pulse-ring"></div>
              <span data-testid="profile-initials">BP</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient" data-testid="title-cybersecurity">Cybersecurity</span>
            <br />
            <span className="text-foreground" data-testid="title-engineer">Engineer</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
            Passionate cybersecurity professional specializing in threat detection, penetration testing, and cloud security. 
            Dedicated to protecting digital assets and building resilient security infrastructures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              data-testid="button-contact"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              onClick={downloadResume}
              variant="outline"
              className="border border-border hover:bg-secondary text-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              data-testid="button-download-resume"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <a 
              href="tel:2404241992" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
              data-testid="contact-phone"
            >
              <Phone className="h-4 w-4" />
              <span>2404241992</span>
            </a>
            <a 
              href="mailto:bhavinkp05@gmail.com" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
              data-testid="contact-email"
            >
              <Mail className="h-4 w-4" />
              <span>bhavinkp05@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/bhavinkpanchal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
              data-testid="contact-linkedin"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/bhavin2205" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
              data-testid="contact-github"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
