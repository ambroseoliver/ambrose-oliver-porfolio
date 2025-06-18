
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Oliver, a <span className="text-cyber-blue font-semibold">multidisciplinary tech specialist</span> with 
              expertise in full-stack development, digital marketing, graphic design, and cybersecurity. 
              I love creating seamless digital experiences — sleek in design, powerful in performance, 
              and secure at the core.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My personality blends <span className="text-cyber-purple font-semibold">adaptability</span>, 
              <span className="text-cyber-teal font-semibold"> passion</span>, and 
              <span className="text-cyber-blue font-semibold"> precision</span> — always fitting in, always delivering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-cyber-blue">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-cyber-purple">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-cyber-teal">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="cyber-border bg-card/50 backdrop-blur-sm animate-slide-up">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-cyber-blue/10">
                    <GraduationCap className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground mb-1">BSc in Computer Technology</p>
                    <p className="text-sm text-cyber-blue">Murang'a University of Technology</p>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      2020 - 2024
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cyber-border bg-card/50 backdrop-blur-sm animate-slide-up">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-cyber-purple/10">
                    <MapPin className="h-6 w-6 text-cyber-purple" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Core Values</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Innovation through continuous learning</li>
                      <li>• Security-first approach to development</li>
                      <li>• User-centered design thinking</li>
                      <li>• Collaborative problem-solving</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
