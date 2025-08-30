import { CloudUpload, Network, ShieldCheck, Search, UserX, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      icon: <CloudUpload className="text-primary text-2xl" />,
      title: "Cloud Security Architecture & HIPAA Compliance",
      description: "Comprehensive security assessment ensuring HIPAA compliance in AWS healthcare systems.",
      achievements: [
        "Identified critical vulnerabilities in healthcare cloud architecture",
        "Designed CloudFormation templates with security controls",
        "Ensured HIPAA compliance for patient data protection"
      ],
      technologies: ["AWS", "HIPAA", "CloudFormation"],
      techColors: ["bg-primary/20 text-primary"]
    },
    {
      icon: <Network className="text-accent text-2xl" />,
      title: "Containerized Doctor's Office App",
      description: "Scalable appointment application deployed on AWS EKS with microservices architecture.",
      achievements: [
        "Developed React frontend with Express.js backend",
        "Implemented CI/CD pipeline with GitHub Actions",
        "Orchestrated with Kubernetes and Docker"
      ],
      technologies: ["EKS", "Docker", "React"],
      techColors: ["bg-accent/20 text-accent"]
    },
    {
      icon: <ShieldCheck className="text-chart-3 text-2xl" />,
      title: "Custom Suricata Rules Development",
      description: "Developed custom IDS rules for malware detection and attack pattern identification.",
      achievements: [
        "Created signatures for DarkGate malware detection",
        "Analyzed PCAP files in Wireshark for C2 communications",
        "Enhanced real-time intrusion detection capabilities"
      ],
      technologies: ["Suricata", "Wireshark", "IDS"],
      techColors: ["bg-chart-3/20 text-chart-3"]
    },
    {
      icon: <Search className="text-chart-4 text-2xl" />,
      title: "Digital Forensics & Incident Response",
      description: "Comprehensive forensic analysis of disk images for malware investigation.",
      achievements: [
        "Conducted forensic analysis using Autopsy and VeraCrypt",
        "Decrypted critical files and discovered attack evidence",
        "Performed network traffic analysis with Wireshark"
      ],
      technologies: ["Autopsy", "DFIR", "VeraCrypt"],
      techColors: ["bg-chart-4/20 text-chart-4"]
    },
    {
      icon: <UserX className="text-chart-5 text-2xl" />,
      title: "Comprehensive Penetration Testing",
      description: "Full penetration testing engagement achieving root privileges and system compromise.",
      achievements: [
        "Exploited command injection via DVWA application",
        "Performed privilege escalation and steganography analysis",
        "Comprehensive threat modeling and vulnerability assessment"
      ],
      technologies: ["Nmap", "Metasploit", "DVWA"],
      techColors: ["bg-chart-5/20 text-chart-5"]
    },
    {
      icon: <ClipboardCheck className="text-orange-500 text-2xl" />,
      title: "CMMC Policy Assessment",
      description: "Security audit against DoD CMMC 2.0 Level 1 requirements with compliance recommendations.",
      achievements: [
        "Audited multi-system network against CMMC policy",
        "Identified critical gaps in access control and protection",
        "Provided actionable compliance recommendations"
      ],
      technologies: ["CMMC 2.0", "DoD", "Compliance"],
      techColors: ["bg-orange-500/20 text-orange-500"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient" data-testid="projects-title">
            University Projects
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="projects-subtitle">
            Academic projects demonstrating practical cybersecurity skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card backdrop-blur-sm border border-border rounded-lg card-hover"
              data-testid={`project-card-${index}`}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold ml-3" data-testid={`project-title-${index}`}>
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} data-testid={`project-achievement-${index}-${achievementIndex}`}>
                      • {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className={`${project.techColors[0]} px-3 py-1 rounded-full text-xs`}
                      data-testid={`project-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
