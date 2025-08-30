import { Server, Bot, Search, Bug, Shield, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  const skills = [
    {
      icon: <Server className="text-primary text-2xl" />,
      title: "Systems",
      category: "skill-category-systems",
      items: ["Linux (Ubuntu, Kali)", "Windows Server"]
    },
    {
      icon: <Bot className="text-accent text-2xl" />,
      title: "Security Automation",
      category: "skill-category-security",
      items: ["Python, Bash, PHP", "Java, C"]
    },
    {
      icon: <Search className="text-chart-3 text-2xl" />,
      title: "Threat Detection",
      category: "skill-category-testing",
      items: ["SIEM Concepts, IDS/IPS", "EDR Concepts, ELK Stack", "IOC Mapping"]
    },
    {
      icon: <Bug className="text-chart-4 text-2xl" />,
      title: "Penetration Testing",
      category: "skill-category-response",
      items: ["Wireshark, Nmap, Burp Suite", "Metasploit, JohnTheRipper", "Hashcat, DirBuster"]
    },
    {
      icon: <Shield className="text-chart-5 text-2xl" />,
      title: "Incident Response",
      category: "skill-category-vulnerability",
      items: ["Alert Analysis", "Root Cause Identification", "Digital Forensics"]
    },
    {
      icon: <Cloud className="text-orange-500 text-2xl" />,
      title: "Cloud Security (AWS)",
      category: "skill-category-cloud",
      items: ["IAM, S3, EC2, CloudTrail", "Security Groups, MFA", "EKS, DynamoDB"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient" data-testid="skills-title">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="skills-subtitle">
            Comprehensive cybersecurity skill set across multiple domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className={`bg-card backdrop-blur-sm border border-border rounded-lg card-hover ${skill.category} border-l-4`}
              data-testid={`skill-card-${skill.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold ml-3" data-testid={`skill-title-${index}`}>
                    {skill.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} data-testid={`skill-item-${index}-${itemIndex}`}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
