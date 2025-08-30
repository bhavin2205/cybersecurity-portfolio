import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground cyber-pattern">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border" data-testid="footer">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-4" data-testid="footer-copyright">
              © 2025 Bhavin Panchal. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/bhavinkpanchal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/bhavin2205" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:bhavinkp05@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="footer-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
