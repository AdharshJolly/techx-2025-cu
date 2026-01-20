import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Code,
  FileText,
  Layout,
  Lightbulb,
  Rocket,
  Target,
  Terminal,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

const BinaryRain = () => {
  const [drops, setDrops] = useState<
    { id: number; left: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute top-0 text-primary/40 font-mono text-xs writing-vertical-rl"
          style={{ left: `${drop.left}%` }}
          animate={{ top: ["-20%", "120%"] }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 12 }, () =>
            Math.random() > 0.5 ? "1" : "0"
          ).join("")}
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
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="vibeathon"
      ref={containerRef}
      className="py-32 md:py-40 relative overflow-hidden bg-background"
    >
      {/* Section separator gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <BinaryRain />

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-wider text-primary">
                Flagship Competition
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 translate-x-[2px] translate-y-[2px] text-primary/25 blur-sm">
                  VIBEATHON
                </span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-shimmer bg-[length:200%_auto]">
                  VIBEATHON
                </span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            >
              The Ultimate 6-Hour Innovation Sprint. Build. Execute. Dominate.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column - Event Details Card */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <GlowCard glowColor="primary" className="h-full">
                  {/* Card Header Image */}
                  <div className="h-40 -mx-4 -mt-4 mb-6 rounded-t-xl overflow-hidden relative">
                    <img
                      src="/assets/images/vibeathon/team-coding.jpg"
                      alt="Team coding"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/80" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-poppins font-bold text-white">3-4 Members</div>
                        <div className="text-xs text-white/70">Team Size</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                    <Layout className="w-5 h-5 text-primary" />
                    <h3 className="font-mono text-lg font-bold text-primary">
                      Event Details
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <div className="group">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Team Size</span>
                        <span className="font-mono text-primary font-semibold">
                          3-4 Members
                        </span>
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
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-mono text-secondary font-semibold">6 Hours</span>
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

                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="p-3 rounded-lg bg-background/50 border border-border">
                        <Code className="w-5 h-5 text-primary mb-2" />
                        <div className="text-sm font-semibold">AI Tools</div>
                        <div className="text-xs text-muted-foreground">Authorized</div>
                      </div>
                      <div className="p-3 rounded-lg bg-background/50 border border-border">
                        <Zap className="w-5 h-5 text-secondary mb-2" />
                        <div className="text-sm font-semibold">No-Code</div>
                        <div className="text-xs text-muted-foreground">Permitted</div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </div>

            {/* Middle Column - Deliverables */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <GlowCard glowColor="secondary" className="h-full">
                  {/* Card Header Image */}
                  <div className="h-40 -mx-4 -mt-4 mb-6 rounded-t-xl overflow-hidden relative">
                    <img
                      src="/assets/images/vibeathon/collaboration.jpg"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-secondary/80" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                        <Target className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-poppins font-bold text-white">Deliverables</div>
                        <div className="text-xs text-white/70">What to submit</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-6 border-b border-secondary/20 pb-4">
                    <Target className="w-5 h-5 text-secondary" />
                    <h3 className="font-mono text-lg font-bold text-secondary">
                      Deliverables
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      { icon: Code, text: "Develop a functional prototype" },
                      { icon: FileText, text: "Generate executive summary" },
                      { icon: Rocket, text: "Final deployment & demo" },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                      >
                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-foreground/90 text-sm">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-secondary" />
                      <span>Detailed guidelines shared at event</span>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </div>

            {/* Right Column - Stats & Info */}
            <div className="lg:col-span-4 space-y-6">
              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-card/50 border border-border/50 rounded-2xl p-6"
              >
                {/* Image */}
                <div className="h-32 -mx-4 -mt-4 mb-4 rounded-t-xl overflow-hidden relative">
                  <img
                    src="/assets/images/vibeathon/hackathon.jpg"
                    alt="Hackathon"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>

                <h3 className="font-poppins text-lg font-bold mb-4">Competition Stats</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-xl">🏆</span>
                      </div>
                      <div>
                        <div className="font-bold">Total Prize Pool</div>
                        <div className="text-xs text-muted-foreground">₹32,000</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-1 p-3 rounded-lg bg-background/50 text-center">
                      <div className="text-2xl font-bold text-primary">10K</div>
                      <div className="text-xs text-muted-foreground">1st Place</div>
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-background/50 text-center">
                      <div className="text-2xl font-bold text-secondary">5K</div>
                      <div className="text-xs text-muted-foreground">2nd Place</div>
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-background/50 text-center">
                      <div className="text-2xl font-bold text-accent">3K</div>
                      <div className="text-xs text-muted-foreground">3rd Place</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Impact & Innovation Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
                  <Rocket className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-bold mb-1">Impact</div>
                  <div className="text-xs text-muted-foreground">High Priority</div>
                </div>
                <div className="p-4 rounded-xl bg-card/50 border border-border hover:border-secondary/50 transition-all duration-300 group hover:-translate-y-1">
                  <Lightbulb className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-bold mb-1">Innovation</div>
                  <div className="text-xs text-muted-foreground">Critical</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12"
          >
            <div className="bg-card/30 border border-white/10 rounded-3xl p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-poppins text-lg font-bold flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Last Edition Highlights
                </h3>
                <span className="text-xs text-muted-foreground">2024 VIBEATHON</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { src: "/assets/images/vibeathon/team-coding.jpg", label: "Team Work" },
                  { src: "/assets/images/vibeathon/team-working.jpg", label: "Coding" },
                  { src: "/assets/images/vibeathon/collaboration.jpg", label: "Strategy" },
                  { src: "/assets/images/vibeathon/hackathon.jpg", label: "Innovation" },
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="relative h-32 rounded-xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-white font-medium text-sm">{img.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VibeathonSection;
