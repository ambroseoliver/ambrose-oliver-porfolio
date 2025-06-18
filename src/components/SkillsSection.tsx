import {
  Code,
  Palette,
  Shield,
  TrendingUp,
  Server,
  Database,
  Smartphone,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Full-Stack Development",
      icon: Code,
      color: "cyber-blue",
      skills: ["React/Next.js", "Laravel/PHP", "Node.js/Express", "TypeScript"],
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      color: "cyber-purple",
      skills: [
        "SEO/SEM",
        "Social Media Marketing",
        "Google Ads",
        "Analytics & Reporting",
      ],
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "cyber-teal",
      skills: [
        "Penetration Testing",
        "Security Auditing",
        "Encryption & WAF",
        "Compliance",
      ],
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "cyber-blue",
      skills: [
        "Figma/Adobe Suite",
        "UI/UX Design",
        "Brand Identity",
        "Prototyping",
      ],
    },
  ];

  const technologies = [
    { name: "React", icon: Code },
    { name: "Laravel", icon: Server },
    { name: "AWS", icon: Database },
    { name: "Figma", icon: Palette },
    { name: "Next.js", icon: Globe },
    { name: "Vue.js", icon: Smartphone },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning development, design, marketing, and
            security
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="cyber-border bg-card/50 backdrop-blur-sm hover: hover:shadow-lg hover:shadow-cyber-blue/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-full bg-${category.color}/10 mr-4`}
                  >
                    <category.icon
                      className={`h-6 w-6 text-${category.color}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="p-3 rounded-lg bg-muted/30 text-center border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors duration-300"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 rounded-full border border-cyber-blue/30 bg-card/30 hover:bg-cyber-blue/10 transition-colors duration-300"
              >
                <tech.icon className="h-4 w-4 text-cyber-blue" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Creative Problem Solving",
              "Team Leadership",
              "Client Communication",
              "Detail-Oriented",
            ].map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-cyber-purple/30 bg-card/20"
              >
                <p className="font-medium text-cyber-purple">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
