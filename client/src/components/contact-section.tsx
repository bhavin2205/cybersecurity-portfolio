import { useState } from "react";
import { Phone, Mail, Linkedin, Github, Download, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();


  const downloadResume = () => {
    // For static deployment, we'll redirect to a contact method
    toast({
      title: "Resume Available",
      description: "Please contact me via email to request my resume.",
    });
    const mailtoLink = `mailto:bhavinkp05@gmail.com?subject=Resume Request&body=Hello Bhavin,%0D%0A%0D%0AI would like to request your resume.%0D%0A%0D%0AThank you!`;
    window.location.href = mailtoLink;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:bhavinkp05@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your default email application will open with the message pre-filled.",
    });
    
    // Clear form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient" data-testid="contact-title">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="contact-subtitle">
              Ready to discuss cybersecurity opportunities and collaborate on security projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card backdrop-blur-sm border border-border rounded-lg" data-testid="contact-info-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6" data-testid="contact-info-title">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center" data-testid="contact-phone-info">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-muted-foreground">2404241992</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center" data-testid="contact-email-info">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">bhavinkp05@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center" data-testid="contact-linkedin-info">
                      <div className="w-12 h-12 bg-chart-3/20 rounded-lg flex items-center justify-center mr-4">
                        <Linkedin className="text-chart-3" />
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-muted-foreground">linkedin.com/in/bhavinkpanchal/</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center" data-testid="contact-github-info">
                      <div className="w-12 h-12 bg-chart-4/20 rounded-lg flex items-center justify-center mr-4">
                        <Github className="text-chart-4" />
                      </div>
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-muted-foreground">github.com/bhavin2205</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Download Resume */}
              <Card className="bg-card backdrop-blur-sm border border-border rounded-lg" data-testid="resume-download-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4" data-testid="resume-download-title">Download Resume</h3>
                  <p className="text-muted-foreground mb-6" data-testid="resume-download-description">
                    Get the complete overview of my cybersecurity experience and qualifications.
                  </p>
                  <Button 
                    onClick={downloadResume}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center"
                    data-testid="button-download-resume-detailed"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF Resume
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-card backdrop-blur-sm border border-border rounded-lg" data-testid="contact-form-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6" data-testid="contact-form-title">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium mb-2">Name</Label>
                    <Input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-ring focus:border-transparent transition-all" 
                      placeholder="Your Name"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium mb-2">Email</Label>
                    <Input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-ring focus:border-transparent transition-all" 
                      placeholder="your.email@example.com"
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</Label>
                    <Input 
                      type="text" 
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-ring focus:border-transparent transition-all" 
                      placeholder="Subject"
                      data-testid="input-subject"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium mb-2">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none" 
                      placeholder="Your message..."
                      data-testid="input-message"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center"
                    data-testid="button-send-message"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
