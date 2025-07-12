import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import revanthProfile from '@/assets/revanth-profile.jpg';
import revanthCV from '@/assets/REVANTH CV .pdf';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const downloadCV = () => {
    window.open(revanthCV, '_blank');
  };
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-darker-surface to-deep-black"></div>
      
      {/* Parallax sliding background elements */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-fire-red rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-fire-red rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
      </motion.div>
      
      {/* Animated particles/dots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-fire-red rounded-full opacity-60"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-deep-red rounded-full opacity-40"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-fire-red rounded-full opacity-50"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile picture placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
            className="w-48 h-48 mx-auto mb-8 mt-20 rounded-full glass-red p-2 animate-glow-pulse"
          >
            <img 
              src={revanthProfile} 
              alt="Revanth Adepu" 
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-inter mb-6"
          >
            <span className="text-foreground">Revanth</span>{' '}
            <span className="text-fire-red">Adepu</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            Freelance Thumbnail Designer & CSE-AIML Student
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Creating high-converting YouTube thumbnails that grab attention and drive clicks. 
            Building the future with AI & Machine Learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="hero" size="xl" onClick={() => scrollToSection('portfolio')}>
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="glass" size="xl" onClick={downloadCV}>
                <Download className="mr-2" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown 
                className="w-6 h-6 mx-auto text-fire-red cursor-pointer hover:text-deep-red transition-colors" 
                onClick={() => scrollToSection('about')} 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;