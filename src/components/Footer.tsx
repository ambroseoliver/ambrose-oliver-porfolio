import { Heart, ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue/20 py-12 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-space font-bold gradient-text mb-2 tracking-wide">
              OLIVER ISHIVA
            </div>
            <p className="text-muted-foreground max-w-sm">
              Full-Stack Developer | Digital Marketer | Cybersecurity Specialist
            </p>
          </div>

          {/* Social + Scroll */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/ambroseoliver"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyber-blue transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/oliver ishiva"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyber-blue transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyber-blue transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="border-cyber-blue/30 hover:bg-cyber-blue/10 transition-all"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-cyber-blue/20 grid md:grid-cols-2 gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left text-muted-foreground">
            <p>&copy; 2024 Oliver Ishiva. All rights reserved.</p>
          </div>

          {/* Quick Links (optional) */}
          <div className="flex justify-center md:justify-end gap-6 text-sm text-muted-foreground">
            <a
              href="#about"
              className="hover:text-cyber-blue transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="hover:text-cyber-blue transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="hover:text-cyber-blue transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-cyber-blue transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
