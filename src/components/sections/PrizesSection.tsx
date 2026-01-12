import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Medal, Trophy, Zap } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlowCard from "@/components/ui/GlowCard";

const vibeathonWinners = [
  { rank: 2, label: "Runner-up", amount: 5000, color: "secondary", icon: Medal },
  { rank: 1, label: "Winner", amount: 10000, color: "primary", icon: Crown },
  { rank: 3, label: "2nd Runner-up", amount: 3000, color: "accent", icon: Medal },
];

const categoryPrizes = [
  { label: "Prompt Engineering Battle", amount: 7000, icon: Zap },
  { label: "Sector Debate Awards", amount: 7000, icon: Trophy },
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
      {/* Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full" />
      <motion.div style={{ y: y2 }} className="absolute bottom-32 right-16 w-48 h-48 border border-secondary/10 rounded-full" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-tag mb-4"
          >
            Rewards & Recognition
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold mb-8"
          >
            Win <span className="text-gradient">Big</span>
          </motion.h2>

          {/* Total Pool Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-primary/30 shadow-[0_0_30px_hsl(270_100%_65%/0.15)] mb-16"
          >
            <span className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Total Prize Pool</span>
            <div className="flex items-center gap-2 font-poppins font-bold text-4xl md:text-5xl text-foreground">
              <span className="text-primary">₹</span>
              <AnimatedCounter value={32000} />
            </div>
          </motion.div>
        </div>

        {/* Vibeathon Podium */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-center font-poppins text-xl font-bold mb-8 flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            VIBEATHON Winners
          </h3>
          <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8 min-h-[300px]">
            {vibeathonWinners.map((winner, index) => (
              <motion.div
                key={winner.rank}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                className={`w-full md:w-1/3 relative ${winner.rank === 1 ? "order-first md:order-2 z-10" : winner.rank === 2 ? "md:order-1" : "md:order-3"}`}
              >
                <div 
                  className={`
                    relative p-6 rounded-t-2xl border-t border-x backdrop-blur-sm text-center flex flex-col items-center justify-end
                    ${winner.rank === 1 ? "h-64 bg-primary/10 border-primary/50 shadow-[0_-10px_40px_hsl(270_100%_65%/0.2)]" : 
                      winner.rank === 2 ? "h-48 bg-secondary/10 border-secondary/50" : 
                      "h-40 bg-accent/10 border-accent/50"}
                  `}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <winner.icon 
                      className={`w-12 h-12 
                        ${winner.rank === 1 ? "text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" : 
                          winner.rank === 2 ? "text-secondary" : "text-accent"}
                      `} 
                    />
                  </div>
                  
                  <div className="mt-8">
                    <p className="font-mono text-sm text-muted-foreground mb-1">{winner.label}</p>
                    <p className="font-poppins font-bold text-2xl md:text-3xl">₹<AnimatedCounter value={winner.amount} /></p>
                  </div>
                </div>
                {/* Base of podium */}
                <div className={`h-2 w-full rounded-b-sm ${
                   winner.rank === 1 ? "bg-primary" : winner.rank === 2 ? "bg-secondary" : "bg-accent"
                }`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Categories */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categoryPrizes.map((prize, index) => (
            <GlowCard 
              key={prize.label}
              glowColor="secondary"
              delay={0.6 + index * 0.1}
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                  <prize.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-lg">{prize.label}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-muted-foreground block">Pool</span>
                <span className="font-mono font-bold text-xl text-primary">₹{prize.amount.toLocaleString()}</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
