import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import revanthProfile from '@/assets/revanth-profile.jpg';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'bg-background/90 backdrop-blur-sm shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={revanthProfile} 
              alt="Revanth Adepu" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-fire-red/20 glow-red"
            />
            <div className="text-lg sm:text-2xl font-bold font-inter">
              <span className="text-fire-red">Revanth</span>{' '}
              <span className="text-foreground">Adepu</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
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
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </Button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" onClick={() => scrollToSection('contact')}>
              Hire Me
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border mt-4 py-4"
          >
            <div className="flex flex-col space-y-4 px-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-foreground/80 hover:text-fire-red transition-fast py-2 border-b border-border/20 last:border-b-0"
                >
                  {item}
                </button>
              ))}
              <div className="pt-2">
                <Button 
                  variant="hero" 
                  size="sm" 
                  onClick={() => scrollToSection('contact')}
                  className="w-full"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;