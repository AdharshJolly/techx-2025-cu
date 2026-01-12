import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#workshops", label: "Workshops" },
  { href: "#vibeathon", label: "Vibeathon" },
  { href: "#prizes", label: "Prizes" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`
            flex items-center justify-between transition-all duration-300
            ${
              isScrolled
                ? "w-full max-w-5xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] py-3 px-6"
                : "w-full max-w-7xl bg-transparent py-4 px-4"
            }
          `}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50 group-hover:bg-primary/30 transition-colors">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <div className="font-poppins font-bold text-3xl tracking-tight">
              <span className="text-white">TECH</span>
              <span className="text-primary">X</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 mr-4 bg-white/5 rounded-full p-1 border border-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-white transition-colors rounded-full hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Button
              variant="default"
              size="sm"
              className="rounded-full px-6 shadow-[0_0_15px_hsl(270_100%_65%/0.4)] hover:shadow-[0_0_25px_hsl(270_100%_65%/0.6)]"
              asChild
            >
              <a href="#registration">Register</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-foreground border border-white/10"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <span className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  <Terminal className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a
                  href="#registration"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
