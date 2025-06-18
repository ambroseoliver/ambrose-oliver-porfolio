
import { ExternalLink, Github, TrendingUp, Shield, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      title: "AuraMart E-commerce Transformation",
      description: "Complete e-commerce platform redesign with modern React stack, resulting in 75% organic traffic increase and modernized user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      results: ["75% Traffic Increase", "Modern UX Design", "Mobile Optimization"],
      icon: TrendingUp,
      color: "cyber-blue",
      category: "E-commerce"
    },
    {
      title: "NexusHR – Secure Employee Portal",
      description: "Enterprise-grade HR management system with advanced security features, AES encryption, and Web Application Firewall implementation.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      technologies: ["Laravel", "Vue.js", "MySQL", "AWS"],
      results: ["AES Encryption", "WAF Security", "Compliance Ready"],
      icon: Shield,
      color: "cyber-teal",
      category: "Enterprise"
    },
    {
      title: "EcoGuardians – Brand & Digital Outreach",
      description: "Complete brand identity and digital marketing campaign for environmental organization, achieving 150% engagement boost across all platforms.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      technologies: ["WordPress", "Illustrator", "Facebook Ads", "Analytics"],
      results: ["150% Engagement", "Brand Identity", "Social Growth"],
      icon: Globe,
      color: "cyber-purple",
      category: "Branding"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of successful projects that demonstrate technical expertise and creative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="cyber-border bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyber-blue/10 transition-all duration-300 overflow-hidden group"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${project.color}/20 text-${project.color} border border-${project.color}/30`}>
                      {project.category}
                    </span>
                  </div>
                  <div className={`absolute bottom-4 right-4 p-3 rounded-full bg-${project.color}/10 backdrop-blur-sm`}>
                    <project.icon className={`h-6 w-6 text-${project.color}`} />
                  </div>
                </div>

                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-semibold mb-4">{project.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-cyber-blue">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-cyber-purple">Key Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <div className={`w-2 h-2 rounded-full bg-${project.color} mr-2 flex-shrink-0`}></div>
                            <span className="text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-cyber-dark"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more work or discussing a project?
          </p>
          <Button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-cyber-blue to-cyber-purple text-cyber-dark font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
