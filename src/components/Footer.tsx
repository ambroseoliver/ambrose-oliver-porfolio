
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue/20 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-space font-bold gradient-text mb-2">
              OLIVER ISHIVA
            </div>
            <p className="text-muted-foreground">
              Full-Stack Developer | Digital Marketer | Cybersecurity Specialist
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <p className="text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind
            </p>
            
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="border-cyber-blue/30 hover:bg-cyber-blue/10"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyber-blue/20">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Oliver Ishiva. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
