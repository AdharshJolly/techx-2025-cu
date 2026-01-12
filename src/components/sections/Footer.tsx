import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Workshops", href: "#workshops" },
  { label: "Vibeathon", href: "#vibeathon" },
  { label: "Prizes", href: "#prizes" },
  { label: "Register", href: "#registration" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="relative bg-background pt-16 pb-8 overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Brand & Address (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <h3 className="font-poppins font-bold text-2xl mb-2">
                <span className="text-gradient">TECHX</span> 2025
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                The flagship technical event fostering innovation, creativity, and collaboration among future tech leaders.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>
                  CHRIST (Deemed to be University),<br />
                  Kengeri Campus, Bangalore - 560074
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:ieee.cs@christuniversity.in" className="hover:text-primary transition-colors">
                  ieee.cs@christuniversity.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-lg mb-6">Connect With Us</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Follow us on social media for the latest updates and announcements.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm hover:shadow-[0_0_15px_hsl(270_100%_65%/0.3)]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2025 IEEE Computer Society. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;