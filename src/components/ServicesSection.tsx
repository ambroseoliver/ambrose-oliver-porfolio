
import { Code2, TrendingUp, Shield, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Web Development",
      description: "Custom web applications built with modern technologies, responsive design, and scalable architecture.",
      features: [
        "React/Next.js Frontend Development",
        "Laravel/Node.js Backend APIs", 
        "Database Design & Optimization",
        "Mobile-Responsive UI/UX"
      ],
      color: "cyber-blue"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing campaigns to boost your online presence and drive conversions.",
      features: [
        "SEO & Content Strategy",
        "Social Media Management",
        "Google Ads & PPC Campaigns",
        "Analytics & Performance Tracking"
      ],
      color: "cyber-purple"
    },
    {
      icon: Shield,
      title: "Cybersecurity Consulting",
      description: "Protect your digital assets with comprehensive security audits and implementation services.",
      features: [
        "Security Audits & Penetration Testing",
        "Compliance Implementation",
        "Data Encryption Solutions",
        "Web Application Firewalls"
      ],
      color: "cyber-teal"
    },
    {
      icon: Palette,
      title: "Graphic Design & Visual Identity",
      description: "Create compelling visual identities that resonate with your audience and strengthen your brand.",
      features: [
        "Logo & Brand Identity Design",
        "UI/UX Design & Prototyping",
        "Marketing Materials Design",
        "Website Visual Design"
      ],
      color: "cyber-blue"
    }
  ];

  return (
    <section id="services" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs, from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="cyber-border bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/10 group"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-full bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:animate-float`}>
                  <service.icon className={`h-6 w-6 text-${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full bg-${service.color} mr-3 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your project?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-cyber-blue to-cyber-purple text-cyber-dark font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/25"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
