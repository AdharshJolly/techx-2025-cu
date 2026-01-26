import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Cpu, MapPin, Trophy, Users, Zap } from "lucide-react";

const highlights = [
  { icon: Calendar, label: "Feb 12-14, 2026" },
  { icon: Cpu, label: "AI-Assisted Dev" },
  { icon: Trophy, label: "₹32k Prize Pool" },
  { icon: Zap, label: "VIBEATHON Finale" },
];

const HeroSection = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms (disabled or reduced on mobile for performance)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 50 : 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -30 : -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 50 : 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4"
    >
      {/* Background grid effect - parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 grid-bg opacity-40"
      />

      {/* Gradient orbs with parallax */}
      <motion.div
        style={{ y: y2, x: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[60px] md:blur-[80px] will-change-transform"
      />
      <motion.div
        style={{ y: y3, x: useTransform(scrollYProgress, [0, 1], [0, 80]) }}
        className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-secondary/15 rounded-full blur-[40px] md:blur-[60px] will-change-transform"
      />

      {/* Animated hexagon decorations (Hidden on mobile to reduce clutter) */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 45]),
        }}
        className="hidden md:block absolute top-20 right-20 w-32 h-32 border border-primary/20 opacity-30"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Main content with fade on scroll */}
      <motion.div
        style={{ opacity, scale }}
        className="container relative z-10 pt-32 pb-12 md:py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Section tag with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6 md:mb-8"
          >
            <span
              className="section-tag px-3 py-1.5 md:px-6 md:py-2 text-[9px] sm:text-[10px] md:text-sm rounded-full bg-primary/10 border border-primary/30 whitespace-normal tracking-normal md:tracking-widest backdrop-blur-md"
              title="Powered by IEEE Student and Young Professionals"
              aria-label="Powered by IEEE Student and Young Professionals"
            >
              Powered by <span className="font-bold">IEEE CS SYP</span>
            </span>
          </motion.div>

          {/* Main headline with staggered letter animation */}
          <h1 className="font-aoboshi text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-none mb-6">
            <motion.span
              className="text-white inline-block drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              Tech
            </motion.span>
            <motion.span
              className="text-primary inline-block relative"
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              <span className="relative z-10 drop-shadow-[0_0_20px_rgba(119,37,131,0.5)]">
                X
              </span>
              <motion.span
                className="absolute inset-0 bg-primary/20 blur-2xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>{" "}
            <br className="sm:hidden" />
            <motion.span
              className="text-white/90 inline-block uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 block sm:inline-block sm:mt-0"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              Bangalore
            </motion.span>
          </h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8 md:mb-10"
          >
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 px-4">
              Vibe Coding • Prompt Engineering • Rapid Innovation
            </p>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/15 border border-primary/40 text-primary font-semibold shadow-[0_10px_40px_rgba(119,37,131,0.25)]"
              aria-label="Event dates Feb 12 to 14, 2026"
            >
              <Calendar className="w-4 h-4" aria-hidden />
              <span className="text-sm sm:text-base tracking-wide">
                Feb 12-14, 2026 • CHRIST University
              </span>
            </motion.div>
          </motion.div>

          {/* Highlights with staggered reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2"
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
                  stiffness: 200,
                }}
                className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm cursor-default"
              >
                <item.icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span className="font-mono text-xs md:text-sm text-foreground/80">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs with glow effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col w-full sm:w-auto sm:flex-row items-center justify-center gap-4 px-4"
          >
            <Button
              variant="hero"
              size="xl"
              className="group w-full sm:w-auto"
              disabled
            >
              <span className="relative z-10">Registrations Opening Soon</span>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="#about">Explore the Event</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator - Hidden on very small screens to save space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
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
