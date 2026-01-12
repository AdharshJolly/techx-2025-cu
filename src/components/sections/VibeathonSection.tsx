import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, FileText, Lightbulb, Rocket, Target, Users, Wrench, Zap } from "lucide-react";

const details = [
  { icon: Users, label: "Team Size", value: "3-4 members" },
  { icon: Clock, label: "Duration", value: "6 hours" },
  { icon: Wrench, label: "Tools Allowed", value: "AI & No-code/Low-code" },
  { icon: Rocket, label: "Requirement", value: "Working Prototype" },
];

const deliverables = [
  "Functional prototype",
  "Brief technical documentation",
  "Executive summary",
];

const criteria = [
  { icon: Lightbulb, label: "Innovation" },
  { icon: Target, label: "Feasibility" },
  { icon: Zap, label: "Execution" },
  { icon: Rocket, label: "Impact" },
];

const VibeathonSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const glowScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.8, 1.2, 0.8]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.05, 0.15, 0.05]);

  return (
    <section id="vibeathon" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Intense background glow for spotlight effect with parallax */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <motion.div 
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[150px]" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" 
      />
      
      {/* Parallax decorative dots */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute top-20 left-20 w-3 h-3 bg-primary/30 rounded-full"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute bottom-40 right-32 w-2 h-2 bg-secondary/40 rounded-full"
      />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 mb-6"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-primary">Flagship Competition</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins text-4xl md:text-6xl font-bold mb-4"
            >
              <motion.span 
                className="text-gradient inline-block"
                animate={isInView ? { 
                  textShadow: [
                    "0 0 20px hsl(270 100% 65% / 0.5)",
                    "0 0 40px hsl(270 100% 65% / 0.8)",
                    "0 0 20px hsl(270 100% 65% / 0.5)"
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                VIBEATHON
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              The Innovation Sprint
            </motion.p>
          </div>
          
          {/* Details grid with staggered loading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {details.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.1,
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 40px hsl(270 100% 65% / 0.2)"
                }}
                className="p-4 md:p-6 rounded-xl bg-card/60 border border-primary/30 backdrop-blur-sm text-center transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                </motion.div>
                <p className="font-mono text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold text-sm">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Two columns: Deliverables + Criteria */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ boxShadow: "0 10px 40px hsl(320 100% 60% / 0.15)" }}
              className="p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-5 h-5 text-secondary" />
                <h3 className="font-poppins text-lg font-semibold">Deliverables</h3>
              </div>
              <ul className="space-y-3">
                {deliverables.map((item, i) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.5 }}
                      className="w-2 h-2 rounded-full bg-secondary" 
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Evaluation Criteria */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ boxShadow: "0 10px 40px hsl(270 100% 65% / 0.15)" }}
              className="p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300"
            >
              <h3 className="font-poppins text-lg font-semibold mb-6">Evaluation Criteria</h3>
              <div className="grid grid-cols-2 gap-4">
                {criteria.map((item, i) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted) / 0.5)" }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeathonSection;
