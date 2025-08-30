import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationSection() {
  const certifications = [
    {
      title: "CompTIA Security+",
      issuer: "LinkedIn Learning",
      date: "Feb 2025",
      color: "bg-primary/20 text-primary"
    },
    {
      title: "Become an Ethical Hacker",
      issuer: "LinkedIn Learning",
      date: "Apr 2025",
      color: "bg-accent/20 text-accent"
    },
    {
      title: "Digital Forensics Essential",
      issuer: "EC-Council",
      date: "Aug 2023",
      color: "bg-chart-3/20 text-chart-3"
    },
    {
      title: "Certified Information Security and Ethical Hacker",
      issuer: "Pristine InfoSolutions",
      date: "May 2022",
      color: "bg-chart-4/20 text-chart-4"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient" data-testid="education-title">
              Education & Certifications
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="education-subtitle">
              Academic foundation and professional certifications in cybersecurity
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="bg-card backdrop-blur-sm border border-border rounded-lg card-hover" data-testid="education-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center" data-testid="education-heading">
                  <GraduationCap className="text-primary mr-3" />
                  Education
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-lg font-semibold text-foreground" data-testid="masters-degree">
                      Master of Engineering in Cybersecurity
                    </h4>
                    <p className="text-primary font-medium" data-testid="masters-university">
                      University of Maryland, College Park
                    </p>
                    <p className="text-muted-foreground text-sm mb-2" data-testid="masters-date">
                      Expected May 2025
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="masters-coursework">
                      Relevant Coursework: Penetration Testing, Cloud Security, Network Security, 
                      Binary Exploitation, Advanced Hacking in Linux
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-lg font-semibold text-foreground" data-testid="bachelors-degree">
                      Bachelor of Engineering in Information Technology
                    </h4>
                    <p className="text-accent font-medium" data-testid="bachelors-university">
                      Gujarat Technological University, India
                    </p>
                    <p className="text-muted-foreground text-sm mb-2" data-testid="bachelors-date">
                      May 2021
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="bachelors-coursework">
                      Relevant Coursework: DSA, Networking, Programming in C and Python, 
                      Distributed Databases
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Certifications */}
            <Card className="bg-card backdrop-blur-sm border border-border rounded-lg card-hover" data-testid="certifications-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center" data-testid="certifications-heading">
                  <Award className="text-accent mr-3" />
                  Certifications
                </h3>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg"
                      data-testid={`certification-${index}`}
                    >
                      <div>
                        <h4 className="font-semibold text-foreground" data-testid={`cert-title-${index}`}>
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground" data-testid={`cert-issuer-${index}`}>
                          {cert.issuer}
                        </p>
                      </div>
                      <Badge className={`text-xs ${cert.color} px-2 py-1 rounded`} data-testid={`cert-date-${index}`}>
                        {cert.date}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
