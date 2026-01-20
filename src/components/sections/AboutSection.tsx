import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Users, Zap, Cpu, Sparkles } from "lucide-react";

const stats = [
  { value: 3, label: "Days", suffix: "" },
  { value: 400, label: "Expected Attendees", suffix: "+" },
  { value: 6, label: "Workshops", suffix: "+" },
  { value: 32, label: "Prize Pool", prefix: "₹", suffix: "K" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden">
      {/* Section separator gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Creative Background Images */}
      <motion.div style={{ y: y1 }} className="absolute top-40 left-0 w-80 h-80 hidden lg:block">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
          animate={isInView ? { opacity: 0.6, rotate: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-10 w-56 h-40 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src="/assets/images/about/conference.jpg" 
            alt="Conference audience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute top-60 right-0 w-80 h-80 hidden lg:block">
        <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-secondary/10 to-transparent blur-3xl" />
        <motion.div
          initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
          animate={isInView ? { opacity: 0.6, rotate: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-0 right-10 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src="/assets/images/about/tech-event.jpg" 
            alt="Tech event presentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/20" />
        </motion.div>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="absolute top-1/3 right-1/4 w-16 h-16 hidden lg:flex items-center justify-center rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
      >
        <Cpu className="w-8 h-8 text-primary/50" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="absolute bottom-1/4 left-1/4 w-14 h-14 hidden lg:flex items-center justify-center rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
      >
        <Sparkles className="w-7 h-7 text-secondary/50" />
      </motion.div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag mb-4"
          >
            About The Event
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold mb-8"
          >
            What is <span className="text-gradient">TECHX</span>?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground"
            style={{ lineHeight: '1.8' }}
          >
            <p>
              TECHX 2025 is a flagship technical and innovation event hosted by
              the IEEE Computer Society at CHRIST University, Kengeri Campus.
            </p>
            <p>
              Spanning three immersive days, the event introduces students to
              modern development paradigms such as{" "}
              <span className="text-primary font-medium">vibe coding</span>,{" "}
              <span className="text-primary font-medium">
                AI-assisted development
              </span>
              ,{" "}
              <span className="text-primary font-medium">
                prompt engineering
              </span>
              , and{" "}
              <span className="text-primary font-medium">
                rapid prototyping
              </span>
              .
            </p>
            <p>
              TECHX brings together students from diverse disciplines to
              collaborate, experiment, and innovate using emerging technologies,
              culminating in a high-intensity innovation sprint called{" "}
              <span className="text-secondary font-semibold">VIBEATHON</span>.
            </p>
          </motion.div>

          {/* Integrated Image Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 gap-4 mt-8 mb-12 md:hidden"
          >
            <div className="h-32 rounded-xl overflow-hidden relative">
              <img 
                src="/assets/images/about/innovation.jpg" 
                alt="Innovation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="h-32 rounded-xl overflow-hidden relative">
              <img 
                src="/assets/images/about/conference.jpg" 
                alt="Conference"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Stats with loading animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 15px 60px hsl(270 100% 65% / 0.3)",
                  transition: { duration: 0.2 }
                }}
                className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 cursor-default will-change-transform"
              >
                <p className="font-poppins text-3xl md:text-4xl font-bold text-gradient">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                </p>
                <p className="font-mono text-sm text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
