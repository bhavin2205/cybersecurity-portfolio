import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient" data-testid="experience-title">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="experience-subtitle">
            Building expertise through hands-on cybersecurity projects and contributions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Cloud Village Volunteer */}
          <Card className="bg-card backdrop-blur-sm border border-border rounded-lg mb-8 card-hover" data-testid="experience-cloud-village">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="job-title-cloud-village">
                    Cloud Village Volunteer
                  </h3>
                  <p className="text-accent font-semibold" data-testid="job-location-cloud-village">Remote</p>
                </div>
                <div className="text-muted-foreground font-medium" data-testid="job-dates-cloud-village">
                  Feb 2025 - April 2025
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold text-primary mb-3" data-testid="project-leaky-systems">
                    Cloud CTF Challenge Developer - LeakySystemsINC
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <ChevronRight className="text-primary mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                      <span data-testid="achievement-ssrf">
                        Developed intermediate-level AWS CTF challenge simulating real-world SSRF vulnerability with IMDSv1 exploitation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-primary mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                      <span data-testid="achievement-iam">
                        Engineered complex scenario for bypassing AWS IAM restrictions via AWS CLI with leaked credentials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-primary mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                      <span data-testid="achievement-github-actions">
                        Integrated GitHub Actions and OIDC for simulating GitHub Actions abuse scenarios
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-primary mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                      <span data-testid="achievement-terraform">
                        Automated infrastructure provisioning using Terraform for scalable CTF deployments
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-lg font-semibold text-accent mb-3" data-testid="project-dragons-records">
                    Cloud CTF Challenge Developer - The Dragon's Akashic Records
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                      <span data-testid="achievement-elk-stack">
                        Designed "Easy" difficulty CTF challenge with vulnerable ELK stack exposing AWS CloudTrail logs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                      <span data-testid="achievement-kibana">
                        Guided participants through targeted log analysis within Kibana for credential extraction
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                      <span data-testid="achievement-python-logs">
                        Utilized Python to generate and upload simulated AWS logs with embedded credentials
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security & Community Contributions */}
          <Card className="bg-card backdrop-blur-sm border border-border rounded-lg mb-8 card-hover" data-testid="experience-security-community">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="job-title-security-community">
                    Security & Community Contributions
                  </h3>
                  <p className="text-accent font-semibold" data-testid="job-location-security-community">Open-Source</p>
                </div>
                <div className="text-muted-foreground font-medium" data-testid="job-dates-security-community">
                  April 2025 – Present
                </div>
              </div>
              
              <div className="border-l-4 border-chart-3 pl-6">
                <h4 className="text-lg font-semibold text-chart-3 mb-3" data-testid="project-purplebox">
                  PurpleBox – MITRE ATT&CK-Based Attack Simulation & Detection Toolkit
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <ChevronRight className="text-chart-3 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span data-testid="achievement-virtualized-env">
                      Set up virtualized project environment with modular framework for security testing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-chart-3 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span data-testid="achievement-powershell-detection">
                      Implemented detection logic for PowerShell execution (T1059.001) parsing Windows Event ID 4104
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-chart-3 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span data-testid="achievement-detection-accuracy">
                      Enhanced detection accuracy with PowerShell Script Block Logging and custom Python tools
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-chart-3 mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                    <span data-testid="achievement-cli">
                      Developed user-friendly CLI in Python for technique simulation and detection
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
