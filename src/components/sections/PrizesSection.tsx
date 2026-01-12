import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Medal, Trophy, Zap, PieChart } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import GlowCard from "@/components/ui/GlowCard";

const vibeathonWinners = [
  { rank: 2, label: "Runner-up", amount: 5000, color: "secondary", icon: Medal, percent: 15 },
  { rank: 1, label: "Winner", amount: 10000, color: "primary", icon: Crown, percent: 31 },
  { rank: 3, label: "2nd Runner-up", amount: 3000, color: "accent", icon: Medal, percent: 9 },
];

const categoryPrizes = [
  { label: "Prompt Engineering Battle", amount: 7000, icon: Zap, percent: 22 },
  { label: "Sector Debate Awards", amount: 7000, icon: Trophy, percent: 22 },
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
    <section id="prizes" ref={containerRef} className="py-24 relative bg-muted/20 overflow-hidden">
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
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-poppins text-3xl md:text-5xl font-bold"
            >
              Win <span className="text-gradient">Big</span>
            </motion.h2>

            <div className="hidden md:block w-px h-16 bg-border/50" />

            {/* Compact Total Pool Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, x: 20 }}
              animate={isInView ? { scale: 1, opacity: 1, x: 0 } : {}}
              transition={{ type: "spring", delay: 0.2 }}
              className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-card border border-primary/30 shadow-[0_0_20px_hsl(270_100%_65%/0.1)]"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <PieChart className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Total Prize Pool</div>
                <div className="font-poppins font-bold text-2xl text-foreground">
                  <span className="text-primary">₹</span>
                  <AnimatedCounter value={32000} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Distribution Bar */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto h-4 flex rounded-full overflow-hidden mb-16"
          >
            {/* Vibeathon Segments */}
            <div className="h-full bg-primary/80" style={{ width: "31%" }} title="Vibeathon Winner" />
            <div className="h-full bg-secondary/80" style={{ width: "15%" }} title="Vibeathon Runner-up" />
            <div className="h-full bg-accent/80" style={{ width: "9%" }} title="Vibeathon 2nd Runner-up" />
            {/* Other Segments */}
            <div className="h-full bg-orange-500/80" style={{ width: "22%" }} title="Prompt Battle" />
            <div className="h-full bg-blue-500/80" style={{ width: "23%" }} title="Debate Awards" />
          </motion.div>
        </div>

        {/* Combined Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Vibeathon Podium (Spans 7 cols) */}
          <div className="lg:col-span-7">
             <div className="bg-card/30 rounded-3xl border border-white/5 p-4 md:p-8 h-full">
                <h3 className="text-center font-poppins text-lg font-bold mb-8 flex items-center justify-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  VIBEATHON Winners
                </h3>
                <div className="flex flex-row items-end justify-center gap-2 md:gap-4 min-h-[250px]">
                  {vibeathonWinners.map((winner, index) => (
                    <motion.div
                      key={winner.rank}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                      className={`w-1/3 relative ${winner.rank === 1 ? "order-2 z-10" : winner.rank === 2 ? "order-1" : "order-3"}`}
                    >
                      <div 
                        className={`
                          relative p-2 md:p-4 rounded-t-xl md:rounded-t-2xl border-t border-x backdrop-blur-sm text-center flex flex-col items-center justify-end
                          ${winner.rank === 1 ? "h-48 md:h-56 bg-primary/10 border-primary/50 shadow-[0_-10px_30px_hsl(270_100%_65%/0.15)]" : 
                            winner.rank === 2 ? "h-36 md:h-40 bg-secondary/10 border-secondary/50" : 
                            "h-28 md:h-32 bg-accent/10 border-accent/50"}
                        `}
                      >
                        <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2">
                          <winner.icon 
                            className={`w-8 h-8 md:w-10 md:h-10 
                              ${winner.rank === 1 ? "text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" : 
                                winner.rank === 2 ? "text-secondary" : "text-accent"}
                            `} 
                          />
                        </div>
                        
                        <div className="mt-4">
                          <p className="font-mono text-[10px] md:text-xs text-muted-foreground mb-1 whitespace-nowrap overflow-hidden text-ellipsis w-full">{winner.label}</p>
                          <p className="font-poppins font-bold text-sm md:text-xl lg:text-2xl break-all">₹<AnimatedCounter value={winner.amount} /></p>
                        </div>
                      </div>
                      <div className={`h-1.5 md:h-2 w-full rounded-b-sm ${
                        winner.rank === 1 ? "bg-primary" : winner.rank === 2 ? "bg-secondary" : "bg-accent"
                      }`} />
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>

          {/* Other Categories (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
             {categoryPrizes.map((prize, index) => (
              <GlowCard 
                key={prize.label}
                glowColor={index === 0 ? "secondary" : "accent"}
                delay={0.5 + index * 0.1}
                className="flex-1 flex flex-col justify-center"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${index === 0 ? "bg-orange-500/10 text-orange-500" : "bg-blue-500/10 text-blue-500"}`}>
                    <prize.icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-2xl">₹{prize.amount.toLocaleString()}</span>
                  </div>
                </div>
                <h4 className="font-poppins font-bold text-lg mb-1">{prize.label}</h4>
                <div className="text-sm text-muted-foreground">Performance Based Award</div>
              </GlowCard>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
