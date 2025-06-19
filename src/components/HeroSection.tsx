
import { ArrowRight, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-orange-400 rounded-full opacity-80"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-white rounded-full opacity-60"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-400 rounded-full opacity-70"></div>
      <div className="absolute top-60 right-40 w-6 h-6 bg-orange-300 rounded-full opacity-80"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-32 right-10 w-20 h-20 border-4 border-white/20 rotate-45"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg rotate-12 opacity-80"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                {/* Available for Projects */}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hello, I'm
                <br />
                <span className="text-orange-400">Oliver Ishiva</span>
                <br />
                {/* <span className="text-3xl md:text-4xl lg:text-5xl text-white/90">
                  A UI/UX Designer
                </span> */}
              </h1>

              <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                I'm a Full-Stack Developer, Digital Marketer, Cybersecurity
                Specialist, and Creative Designer — crafting secure,
                high-performing digital experiences that are as visually
                compelling as they are technically robust.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Intro
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/70">Projects Done</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-white/70">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>

              {/* Profile Image Container */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full p-1">
                  <div className="w-full h-full bg-white rounded-full p-2">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="Oliver Ishiva"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Available
                    </span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      Full stack Dev
                    </div>
                    <div className="text-xs text-gray-600">Dev Oliver</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
