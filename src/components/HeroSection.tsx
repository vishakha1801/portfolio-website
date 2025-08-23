import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import painting1 from '@/assets/painting-1.jpg';
import painting2 from '@/assets/painting-2.jpg';
import painting3 from '@/assets/painting-3.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-gradient-hero flex items-center justify-center"
      style={{
        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--accent) / 0.1) 0%, transparent 50%)`
      }}
    >
      {/* Floating Art Pieces - WOW FACTOR */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-24 opacity-20 float glow-hover">
          <img 
            src={painting1} 
            alt="Abstract art piece" 
            className="w-full h-full object-cover rounded-lg shadow-2xl transform rotate-12"
          />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 opacity-25 float-delayed glow-hover">
          <img 
            src={painting2} 
            alt="Geometric art piece" 
            className="w-full h-full object-cover rounded-lg shadow-2xl transform -rotate-6"
          />
        </div>
        <div className="absolute bottom-32 left-20 w-20 h-32 opacity-20 float-delayed-2 glow-hover">
          <img 
            src={painting3} 
            alt="Watercolor art piece" 
            className="w-full h-full object-cover rounded-lg shadow-2xl transform rotate-3"
          />
        </div>
        <div className="absolute top-60 left-1/2 w-28 h-28 opacity-15 float glow-hover">
          <img 
            src={painting2} 
            alt="Art piece" 
            className="w-full h-full object-cover rounded-lg shadow-2xl transform -rotate-12"
          />
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-32 opacity-20 float-delayed glow-hover">
          <img 
            src={painting1} 
            alt="Art piece" 
            className="w-full h-full object-cover rounded-lg shadow-2xl transform rotate-6"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-glow">
          Creative Developer
          <span className="block text-secondary font-normal italic">& Artist</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Bridging the worlds of <span className="text-accent font-semibold">technology</span> and{' '}
          <span className="text-secondary font-semibold">creativity</span>, crafting digital experiences 
          that inspire and engage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('projects')}
            size="lg" 
            className="bg-gradient-primary text-primary-foreground glow-hover font-body font-semibold"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('art')}
            variant="outline" 
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground glow-secondary font-body"
          >
            Explore Art
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;