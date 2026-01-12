import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const prizes = [
  { amount: 18000, label: "VIBEATHON", highlight: true },
  { amount: 7000, label: "Prompt Engineering Battle" },
  { amount: 7000, label: "Debate & Workshop Awards" },
];

const PrizesSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="prizes" ref={containerRef} className="py-24 md:py-32 relative bg-muted/20 overflow-hidden">
      {/* Parallax decorative elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-20 h-20 border border-primary/10 rounded-full"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-32 right-16 w-32 h-32 border border-secondary/10 rounded-full"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [80, -80]) }}
        className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
      />
      
      <div className="container relative">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag mb-4"
          >
            Prizes & Incentives
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold mb-6"
          >
            Win <span className="text-gradient">Big</span>
          </motion.h2>
          
          {/* Total prize pool with glow animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 cursor-default"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Trophy className="w-6 h-6 text-primary" />
            </motion.div>
            <span className="font-poppins text-2xl md:text-3xl font-bold">
              ₹<AnimatedCounter value={32000} />
            </span>
            <span className="text-muted-foreground">Total Prize Pool</span>
          </motion.div>
        </div>
        
        {/* Prize breakdown */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.15,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
              }}
              className={`relative p-8 rounded-2xl border backdrop-blur-sm text-center transition-all duration-500 cursor-default ${
                prize.highlight
                  ? "bg-gradient-to-b from-primary/20 to-secondary/10 border-primary/50 hover:shadow-[0_0_50px_hsl(270_100%_65%/0.25)]"
                  : "bg-card/50 border-border/50 hover:border-border hover:shadow-[0_0_30px_hsl(270_100%_65%/0.1)]"
              }`}
            >
              {prize.highlight && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-white"
                >
                  Top Prize
                </motion.div>
              )}
              
              <p className={`font-poppins text-4xl md:text-5xl font-bold mb-3 ${prize.highlight ? "text-gradient" : "text-foreground"}`}>
                ₹<AnimatedCounter value={prize.amount} />
              </p>
              <p className="font-mono text-sm text-muted-foreground">{prize.label}</p>
              
              {/* Shimmer effect on highlight card */}
              {prize.highlight && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
