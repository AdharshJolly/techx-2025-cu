import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Schedule", href: "#schedule" },
  { label: "Vibeathon", href: "#vibeathon" },
  { label: "Prizes", href: "#prizes" },
  { label: "Register", href: "#registration" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Secondary accent glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Column 1: Brand & Address (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/images/techx_logo.png"
                  alt="TechX Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                The flagship technical event fostering innovation, creativity,
                and collaboration among future tech leaders.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p>
                  CHRIST (Deemed to be University),
                  <br />
                  Kengeri Campus, Bangalore - 560074
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:ieee.cs@christuniversity.in"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer"
                >
                  ieee.cs@christuniversity.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm flex items-center gap-2 group cursor-pointer hover:translate-x-1"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-all"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-lg mb-6">Connect With Us</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Follow us on social media for the latest updates and
              announcements.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_hsl(270_100%_65%/0.4)] cursor-pointer will-change-transform"
                  aria-label={social.label}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2025 IEEE Computer Society. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-foreground transition-all duration-300 cursor-pointer hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-all duration-300 cursor-pointer hover:text-primary"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-all duration-300 cursor-pointer hover:text-primary"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
