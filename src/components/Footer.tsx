import { Mail, Phone, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:revanthadepu333@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+917386325746",
      label: "Phone"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/revanthinn/",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/revanth.inn",
      label: "Instagram"
    }
  ];

  return (
    <footer className="bg-darker-surface border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center space-y-8">
          {/* Logo/Name */}
          <div className="text-3xl font-bold font-inter">
            <span className="text-electric-blue">R</span>evanth{' '}
            <span className="text-neon-green">A</span>depu
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="w-12 h-12 rounded-full bg-card/30 flex items-center justify-center hover:bg-card/50 transition-smooth hover-glow-blue group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-electric-blue transition-smooth" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="space-y-2 text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-bright-red animate-glow-pulse" /> by Revanth Adepu
            </p>
            <p className="text-sm">
              © {currentYear} Revanth Adepu. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Freelance YouTube Thumbnail Designer • CSE-AIML Student • Available for Projects
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;