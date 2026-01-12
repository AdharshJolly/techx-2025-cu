import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Cpu, MapPin, Trophy, Users, Zap } from "lucide-react";

const highlights = [
  { icon: Calendar, label: "3-Day Mega Event" },
  { icon: Cpu, label: "AI-Assisted Dev" },
  { icon: Trophy, label: "₹32k Prize Pool" },
  { icon: Zap, label: "VIBEATHON Finale" },
];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid effect - parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 grid-bg opacity-40" 
      />
      
      {/* Gradient orbs with parallax */}
      <motion.div 
        style={{ y: y2, x: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" 
      />
      <motion.div 
        style={{ y: y3, x: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] animate-float" 
      />
      
      {/* Animated hexagon decorations with parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]), rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) }}
        className="absolute top-20 right-20 w-32 h-32 border border-primary/20 opacity-30"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
        className="absolute bottom-32 left-16 w-24 h-24 border border-secondary/20 opacity-30"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* Additional parallax decorative elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 180]) }}
        className="absolute top-1/3 right-1/6 w-2 h-2 bg-primary/40 rounded-full"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -120]) }}
        className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-secondary/30 rounded-full"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 250]) }}
        className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-accent/50 rounded-full"
      />
      
      {/* Main content with fade on scroll */}
      <motion.div 
        style={{ opacity, scale }}
        className="container relative z-10 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Section tag with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="section-tag px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              Flagship IEEE Technical & Innovation Event
            </span>
          </motion.div>
          
          {/* Main headline with staggered letter animation */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
          >
            <motion.span 
              className="text-gradient inline-block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              TECHX
            </motion.span>{" "}
            <motion.span 
              className="text-foreground inline-block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              2025
            </motion.span>
          </motion.h1>
          
          {/* Tagline */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="mb-10"
          >
            <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-4">
              Vibe Coding • Prompt Engineering • Rapid Innovation
            </p>
            <div className="flex items-center justify-center gap-2 text-primary/80 font-medium">
              <MapPin className="w-5 h-5" />
              <span>CHRIST University, Kengeri Campus</span>
            </div>
          </motion.div>
          
          {/* Highlights with staggered reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.9 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px hsl(270 100% 65% / 0.4)"
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm cursor-default transition-colors hover:border-primary/50"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-foreground/80">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTAs with glow effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#registration">
                <span className="relative z-10">Register Now</span>
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#about">Explore the Event</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
