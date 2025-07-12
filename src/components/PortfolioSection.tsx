import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

import srvImage from '@/assets/srv.jpg';
import teluguConnectsImage from '@/assets/telugu-connects.jpg';
import umaTeluguImage from '@/assets/uma-telugu.jpg';
import sameekshaImage from '@/assets/sameeksha-thumma.jpg';
import mallareddyImage from '@/assets/mallareddy.jpg';
import aiImage from '@/assets/ai.jpg';
import genericImage from '@/assets/image.png';
import naaAnveshanaImage from '@/assets/naa-anveshana.jpg';
import jayapradaImage from '@/assets/jayaprada.png';
import photoshopLogo from '@/assets/Photoshop.png';
import canvaLogo from '@/assets/canva-icon.png';
import illustratorLogo from '@/assets/adobe-illustrator-icon.png';
import figmaLogo from '@/assets/figma.png';
import aiToolsLogo from '@/assets/AI TOOLS.jpg';

const PortfolioSection = () => {
  // Portfolio items categorized by content type
  const portfolioItems = [
    {
      id: 1,
      title: "SRV Channel Thumbnail",
      category: 'Documentary',
      image: srvImage,
      description: "High-converting thumbnail design for SRV channel",
      impact: "Increased CTR by 45%",
      process: "Research → Concept → Design → A/B Testing → Final"
    },
    {
      id: 2,
      title: "Telugu Connects",
      category: 'Podcast',
      image: teluguConnectsImage,
      description: "Engaging thumbnail for Telugu content creator",
      impact: "Boosted engagement by 32%",
      process: "Audience Analysis → Brand Integration → Visual Design"
    },
    {
      id: 3,
      title: "Uma Telugu Channel",
      category: 'Vlog',
      image: umaTeluguImage,
      description: "Professional thumbnail for Telugu entertainment",
      impact: "Improved view duration by 28%",
      process: "Trend Research → Color Psychology → Typography"
    },
    {
      id: 4,
      title: "Sameeksha Thumma",
      category: 'Vlog',
      image: sameekshaImage,
      description: "Eye-catching design for lifestyle content",
      impact: "Enhanced brand recognition by 40%",
      process: "Lifestyle Analysis → Visual Storytelling → Brand Consistency"
    },
    {
      id: 5,
      title: "Mallareddy College",
      category: 'Podcast',
      image: mallareddyImage,
      description: "Educational content thumbnail design",
      impact: "Increased educational reach by 35%",
      process: "Educational Psychology → Visual Learning → Accessibility"
    },
    {
      id: 6,
      title: "AI Technology",
      category: 'Podcast',
      image: aiImage,
      description: "Tech-focused thumbnail with modern aesthetics",
      impact: "Tech audience growth by 50%",
      process: "Tech Trends → Futuristic Design → Innovation Focus"
    },
    {
      id: 7,
      title: "Creative Design",
      category: 'Documentary',
      image: genericImage,
      description: "Versatile thumbnail for multiple use cases",
      impact: "Multi-platform success with 38% avg. improvement",
      process: "Universal Design → Cross-Platform Optimization → Scalability"
    },
    {
      id: 8,
      title: "Naa Anveshana",
      category: 'Vlog',
      image: naaAnveshanaImage,
      description: "Discovery and exploration themed design",
      impact: "Exploration content engagement up 42%",
      process: "Adventure Psychology → Visual Exploration → Curiosity Design"
    },
    {
      id: 9,
      title: "Jayaprada Channel",
      category: 'Vlog',
      image: jayapradaImage,
      description: "Celebrity content thumbnail design",
      impact: "Celebrity content CTR improved by 55%",
      process: "Celebrity Branding → Fan Psychology → Star Power Design"
    }
  ];

  const categories = ['All', 'Vlog', 'Documentary', 'Podcast'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-darker-surface">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter mb-4 sm:mb-6"
          >
            My <span className="text-fire-red">Portfolio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0"
          >
            Showcasing creative thumbnail designs that drive engagement and results
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full transition-smooth text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-fire-red text-white'
                    : 'glass-morphism hover:bg-fire-red/10 text-muted-foreground hover:text-fire-red'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="group overflow-hidden glass-morphism hover-glow-red transition-smooth">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-background/90 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" size="sm" className="text-fire-red hover:bg-fire-red/10">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>
                    <span className="px-2 sm:px-3 py-1 glass-red text-fire-red text-xs rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-fire-red">Impact:</span>
                      <span className="text-xs text-muted-foreground">{item.impact}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto p-6 sm:p-8 glass-red shadow-elegant">
            <motion.div
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Plus className="w-12 h-12 sm:w-16 sm:h-16 text-fire-red mx-auto mb-4 sm:mb-6" />
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
            >
              Ready to Start Your Project?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6"
            >
              Let's create stunning thumbnails that will make your content stand out and drive engagement
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="hero" 
                  size="xl" 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto"
                >
                  Get Started Today
                </Button>
              </motion.div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
