import { Card } from '@/components/ui/card';
import { GraduationCap, Code, Palette, Cpu, Target, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import photoshopLogo from '@/assets/Photoshop.png';
import canvaLogo from '@/assets/canva-icon.png';
import illustratorLogo from '@/assets/adobe-illustrator-icon.png';
import figmaLogo from '@/assets/figma.png';
import aiToolsLogo from '@/assets/AI TOOLS.jpg';

const AboutSection = () => {
  
  const education = [
    {
      degree: "B.Tech in CSE-AIML",
      institution: "Gokaraju Rangaraju Institute Of Engineering",
      year: "Expected 2028",
      status: "current"
    },
    {
      degree: "Diploma in CSE",
      institution: "Govt. Polytechnic, Warangal",
      year: "2025",
      status: "completed"
    },
    {
      degree: "SSC",
      institution: "Wisdom Group Of Institutions",  
      year: "2022",
      status: "completed"
    }
  ];

  const skills = [
    { icon: Palette, name: "Design", desc: "Photoshop, Canva, AI Tools" },
    { icon: Target, name: "Thumbnail Strategy", desc: "Click-through optimization, audience targeting" },
    { icon: Sparkles, name: "Editing/Retouching", desc: "Photo manipulation, color grading, enhancements" },
    { icon: Clock, name: "Trends & Research", desc: "Staying updated with YouTube trends, analytics, and best practices" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-darker-surface">
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
            About <span className="text-fire-red">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0"
          >
            Passionate about design, technology, and creating impactful digital experiences
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8 glass-morphism backdrop-blur-sm">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-fire-red">My Creative Journey</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  From the moment I first opened Photoshop, I knew I had found my calling. What started as a hobby 
                  creating thumbnails for friends has evolved into a passion for crafting digital experiences that 
                  not only look stunning but drive real results.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  Currently pursuing my B.Tech in Computer Science Engineering (AI & ML) at 
                  Gokaraju Rangaraju Institute of Engineering and Technology, I'm bridging the gap between 
                  <span className="text-fire-red font-semibold"> creative design</span> and 
                  <span className="text-deep-red font-semibold"> cutting-edge technology</span>. 
                  My education in AI & Machine Learning isn't just academic—it's shaping how I approach 
                  design problems with data-driven insights and innovative solutions.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  As a freelance thumbnail designer, I've discovered that the best designs aren't just beautiful—they're 
                  strategic. Every click, every view, every engagement is a testament to understanding both 
                  <span className="text-primary font-semibold"> human psychology</span> and 
                  <span className="text-fire-red font-semibold"> digital trends</span>. My goal? To become the 
                  go-to designer for creators who want their content to not just exist, but to thrive in the 
                  competitive digital landscape.
                </p>
              </Card>
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-fire-red"
            >
              Education
            </motion.h3>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full mt-2 ${
                      edu.status === 'current' ? 'bg-fire-red animate-glow-pulse' : 'bg-deep-red'
                    }`}></div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex-1"
                    >
                      <Card className="p-4 sm:p-6 glass-morphism hover-glass transition-smooth">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-base sm:text-lg">{edu.degree}</h4>
                          <span className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full ${
                            edu.status === 'current' 
                              ? 'bg-fire-red/20 text-fire-red' 
                              : 'bg-deep-red/20 text-deep-red'
                          }`}>
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">{edu.institution}</p>
                      </Card>
                    </motion.div>
                  {index < education.length - 1 && (
                    <div className="w-0.5 h-4 sm:h-6 bg-border ml-1.5 sm:ml-2 mt-2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      {/* Skills Section - Thumbnail/Graphic Designer */}
      <section id="skills" className="py-16 sm:py-20 relative overflow-hidden">
        {/* Background gradient to match Hero section */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-darker-surface to-deep-black"></div>
        {/* Optional: Parallax or animated background elements can be added here if desired */}
        <div className="container mx-auto flex flex-col items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter mb-2">
              <span className="text-fire-red">Creative Skills</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium px-4 sm:px-0">
              The art and tools behind every scroll-stopping thumbnail
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center gap-3 sm:gap-4 my-6 sm:my-8"
            >
              <motion.img
                whileHover={{ scale: 1.13, filter: 'brightness(1.2) saturate(1.2)' }}
                transition={{ duration: 0.18 }}
                src={photoshopLogo}
                alt="Photoshop"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain cursor-pointer select-none"
              />
              <motion.img
                whileHover={{ scale: 1.13, filter: 'brightness(1.2) saturate(1.2)' }}
                transition={{ duration: 0.18 }}
                src={canvaLogo}
                alt="Canva"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain cursor-pointer select-none"
              />
              <motion.img
                whileHover={{ scale: 1.13, filter: 'brightness(1.2) saturate(1.2)' }}
                transition={{ duration: 0.18 }}
                src={illustratorLogo}
                alt="Illustrator"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain cursor-pointer select-none"
              />
              <motion.img
                whileHover={{ scale: 1.13, filter: 'brightness(1.2) saturate(1.2)' }}
                transition={{ duration: 0.18 }}
                src={figmaLogo}
                alt="Figma"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain cursor-pointer select-none"
              />
              <motion.img
                whileHover={{ scale: 1.13, filter: 'brightness(1.2) saturate(1.2)' }}
                transition={{ duration: 0.18 }}
                src={aiToolsLogo}
                alt="AI Tools"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain cursor-pointer select-none rounded"
              />
            </motion.div>
          </motion.div>
          {/* Timeline/Roadmap for Skills */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 flex-wrap w-full relative mb-12 sm:mb-16">
              {/* Animated connector line (now relative to timeline container) */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}
                className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-fire-red/60 to-fire-red/10 z-0 origin-left"
                style={{transform: 'translateY(-50%)'}}
              />
              {/* Skills */}
              {(() => {
                const skillsData = [
                  { icon: Palette, label: 'Visual Design', desc: 'Color theory, typography, composition, brand identity' },
                  { icon: Target, label: 'Brand Strategy', desc: 'Click optimization, audience targeting, conversion' },
                  { icon: Sparkles, label: 'Photo Editing', desc: 'Advanced retouching, effects, cutouts, compositing' },
                  { icon: Clock, label: 'Fast Delivery', desc: 'Quick turnaround, multiple revisions, 24/7 support' }
                ];

                return skillsData.map((skill, idx) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.12, boxShadow: '0 0 24px 4px hsl(0,100%,60%,0.25)' }}
                    className="relative z-10 flex flex-col items-center justify-start text-center mx-2 my-6 md:my-0 group !bg-transparent !shadow-none !backdrop-blur-none min-w-[120px]"
                    style={{ minWidth: 120 }}
                  >
                    <motion.div
                      className="relative flex items-center justify-center mb-4 w-16 h-16 md:w-20 md:h-20"
                      whileHover={{ scale: 1.18 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      {/* Animated red glow background */}
                      <motion.div
                        className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
                        style={{ filter: 'blur(16px)' }}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                      >
                        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,0,0,0.35) 0%, rgba(255,0,0,0.12) 60%, transparent 100%)' }} />
                      </motion.div>
                      <span className="relative z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                        <skill.icon className="w-full h-full text-fire-red" />
                      </span>
                    </motion.div>
                    <span className="font-bold text-base text-fire-red mb-1 mt-1 md:mt-2">{skill.label}</span>
                    <span className="text-xs text-muted-foreground font-medium max-w-[140px] md:max-w-[180px]">{skill.desc}</span>
                    {/* Dot connector for mobile */}
                    {idx < 3 && <div className="block md:hidden w-1 h-8 bg-fire-red/40 rounded-full my-2"></div>}
                  </motion.div>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;