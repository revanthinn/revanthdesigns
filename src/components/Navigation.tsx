import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import revanthProfile from '@/assets/revanth-profile.jpg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'bg-background/90 backdrop-blur-sm shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={revanthProfile} 
              alt="Revanth Adepu" 
              className="w-12 h-12 rounded-full object-cover border-2 border-fire-red/20 glow-red"
            />
            <div className="text-2xl font-bold font-inter">
              <span className="text-fire-red">Revanth</span>{' '}
              <span className="text-foreground">Adepu</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground/80 hover:text-fire-red transition-fast relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fire-red transition-smooth group-hover:w-full"></span>
              </button>
            ))}
          </div>
          
          <Button variant="hero" size="sm" onClick={() => scrollToSection('contact')}>
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;