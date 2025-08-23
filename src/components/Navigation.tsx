import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : ''
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display text-xl font-semibold text-glow">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('art')}
              className="text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              Art
            </button>
            <button 
              onClick={() => scrollToSection('articles')}
              className="text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              Articles
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="glow-hover border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;