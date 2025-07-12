import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Zap, RefreshCw, Target, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  
  const features = [
    {
      icon: Target,
      title: "High-Converting Design",
      description: "Thumbnails crafted to maximize click-through rates and viewer engagement"
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality - perfect for content creators"
    },
    {
      icon: RefreshCw,
      title: "Multiple Revisions",
      description: "Unlimited revisions until you're 100% satisfied with the final result"
    },
    {
      icon: Sparkles,
      title: "Niche Customization",
      description: "Tailored designs that match your content style and target audience"
    },
    {
      icon: Palette,
      title: "Professional Tools",
      description: "Created using industry-standard software like Photoshop and AI-enhanced tools"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always available to discuss your project needs and provide updates"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-inter mb-6"
          >
            What I <span className="text-fire-red">Offer</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Professional YouTube thumbnail design services to help your content stand out and drive engagement
          </motion.p>
        </motion.div>

        {/* Main Service Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="p-8 md:p-12 glass-red shadow-elegant">
            <div className="text-center mb-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="w-20 h-20 mx-auto mb-6 rounded-full gradient-red-glass p-1"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Palette className="w-8 h-8 text-fire-red" />
                </div>
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4"
              >
                Freelance Thumbnail Design
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground mb-6"
              >
                High-converting YouTube thumbnails that drive clicks, engagement, and results for creators, influencers, and brands
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-fire-red">Professional Tools & Process</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Adobe Creative Suite (Photoshop, Illustrator, After Effects)</li>
                  <li>• Canva Pro & Figma for collaboration</li>
                  <li>• AI-Enhanced Design Tools & Analytics</li>
                  <li>• Custom Graphics, Icons & Brand Assets</li>
                  <li>• A/B Testing & Performance Optimization</li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-deep-red">Deliverables & Results</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High-converting, click-worthy designs</li>
                  <li>• Multiple formats (1280x720, mobile-optimized)</li>
                  <li>• Source files & editable templates</li>
                  <li>• Performance analytics & optimization tips</li>
                  <li>• Unlimited revisions until satisfaction</li>
                </ul>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="xl" onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  Start Your Project
                </Button>
              </motion.div>
            </motion.div>
          </Card>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 glass-morphism hover-glow-red transition-smooth group">
                <feature.icon className="w-10 h-10 text-fire-red mb-4 group-hover:text-deep-red transition-smooth" />
                <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;