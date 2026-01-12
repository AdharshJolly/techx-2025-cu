import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Clock, Code, FileText, Layout, Lightbulb, Rocket, Target, Terminal, Users, Zap } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

const BinaryRain = () => {
  const [drops, setDrops] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute top-0 text-primary/50 font-mono text-xs writing-vertical-rl"
          style={{ left: `${drop.left}%` }}
          animate={{ top: ["-20%", "120%"] }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 15 }, () => Math.random() > 0.5 ? "1" : "0").join("")}
        </motion.div>
      ))}
    </div>
  );
};

const VibeathonSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="vibeathon" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-background">
      <BinaryRain />
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Header */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-wider text-primary">System Override: Initiated</span>
            </motion.div>
            
            <h2 className="font-poppins text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="relative inline-block">
                <span className="absolute inset-0 translate-x-[2px] translate-y-[2px] text-primary/30 blur-sm">VIBEATHON</span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-shimmer bg-[length:200%_auto]">
                  VIBEATHON
                </span>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              The Ultimate 6-Hour Innovation Sprint. Build. Execute. Dominate.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column: System Status */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlowCard glowColor="primary" className="h-full">
                <div className="flex items-center gap-3 mb-8 border-b border-primary/20 pb-4">
                  <Layout className="w-6 h-6 text-primary" />
                  <h3 className="font-mono text-xl font-bold text-primary">Mission Parameters</h3>
                </div>

                <div className="space-y-6">
                  <div className="group">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Squad Size</span>
                      <span className="font-mono text-primary">3-4 Operatives</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "75%" } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary/80 group-hover:bg-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Time Limit</span>
                      <span className="font-mono text-secondary">6 Hours</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "60%" } : {}}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-secondary/80 group-hover:bg-secondary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <Code className="w-5 h-5 text-primary mb-2" />
                      <div className="text-sm font-semibold">AI Tools</div>
                      <div className="text-xs text-muted-foreground">Authorized</div>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <Zap className="w-5 h-5 text-secondary mb-2" />
                      <div className="text-sm font-semibold">No-Code</div>
                      <div className="text-xs text-muted-foreground">Permitted</div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            {/* Right Column: Objectives */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <GlowCard glowColor="secondary">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-secondary" />
                  <h3 className="font-mono text-xl font-bold text-secondary">Primary Objectives</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Develop a functional prototype",
                    "Generate executive summary",
                    "Final deployment & demo"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                        <span className="font-mono text-sm font-bold text-secondary">0{i + 1}</span>
                      </div>
                      <span className="text-foreground/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </GlowCard>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                  <Rocket className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-sm">Impact</div>
                  <div className="text-xs text-muted-foreground">High Priority</div>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border hover:border-secondary/50 transition-colors group">
                  <Lightbulb className="w-6 h-6 text-secondary mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-sm">Innovation</div>
                  <div className="text-xs text-muted-foreground">Critical</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeathonSection;
