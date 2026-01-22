import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Medal, Trophy, Zap, PieChart, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import GlowCard from "@/components/ui/GlowCard";

const vibeathonWinners = [
  {
    rank: 2,
    label: "Runner-up",
    amount: 5000,
    color: "secondary",
    icon: Medal,
    percent: 15,
  },
  {
    rank: 1,
    label: "Winner",
    amount: 10000,
    color: "primary",
    icon: Crown,
    percent: 31,
  },
  {
    rank: 3,
    label: "2nd Runner-up",
    amount: 3000,
    color: "accent",
    icon: Medal,
    percent: 9,
  },
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
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="prizes"
      ref={containerRef}
      className="py-32 md:py-40 relative bg-muted/20 overflow-hidden"
    >
      {/* Section separator gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-tag mb-4 inline-block">
              Rewards & Recognition
            </span>
            <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Win <span className="text-gradient">Big</span>
            </h2>
          </motion.div>

          {/* Prize Pool Banner with Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-card/50 border border-white/10 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-48 md:h-auto overflow-hidden">
                  <img
                    src="/assets/images/prizes/trophy.jpg"
                    alt="Trophy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy className="w-20 h-20 text-white drop-shadow-2xl" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <PieChart className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">
                        Total Prize Pool
                      </div>
                      <div className="font-poppins font-bold text-4xl text-foreground">
                        <span className="text-primary">₹</span>
                        <AnimatedCounter value={32000} />
                      </div>
                    </div>
                  </div>

                  {/* Distribution Bar */}
                  <div className="h-4 flex rounded-full overflow-hidden mt-4">
                    <div
                      className="h-full bg-primary/80"
                      style={{ width: "31%" }}
                    />
                    <div
                      className="h-full bg-secondary/80"
                      style={{ width: "15%" }}
                    />
                    <div
                      className="h-full bg-accent/80"
                      style={{ width: "9%" }}
                    />
                    <div
                      className="h-full bg-secondary/80"
                      style={{ width: "22%" }}
                    />
                    <div
                      className="h-full bg-accent/80"
                      style={{ width: "23%" }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="text-xs text-muted-foreground">
                      VIBEATHON:
                    </span>
                    <span className="text-xs font-medium text-primary">
                      10K
                    </span>
                    <span className="text-xs font-medium text-secondary">
                      5K
                    </span>
                    <span className="text-xs font-medium text-accent">3K</span>
                    <span className="text-xs text-muted-foreground">|</span>
                    <span className="text-xs text-secondary">Prompt: 7K</span>
                    <span className="text-xs text-accent">Debate: 7K</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Vibeathon Podium */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-card/50 border border-white/10 rounded-3xl p-6 md:p-8 h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <Trophy className="w-6 h-6 text-primary" />
                    <h3 className="font-poppins text-xl font-bold">
                      VIBEATHON Winners
                    </h3>
                  </div>

                  {/* Podium */}
                  <div className="flex flex-row items-end justify-center gap-2 md:gap-6 min-h-[280px]">
                    {vibeathonWinners.map((winner, index) => (
                      <motion.div
                        key={winner.rank}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                        }}
                        className={`w-1/3 relative ${
                          winner.rank === 1
                            ? "order-2 z-10"
                            : winner.rank === 2
                              ? "order-1"
                              : "order-3"
                        }`}
                      >
                        <div
                          className={`
                            relative p-3 md:p-5 rounded-t-xl md:rounded-t-2xl border-t border-x backdrop-blur-sm text-center flex flex-col items-center
                            ${
                              winner.rank === 1
                                ? "h-52 md:h-64 bg-primary/10 border-primary/50"
                                : winner.rank === 2
                                  ? "h-36 md:h-44 bg-secondary/10 border-secondary/50"
                                  : "h-28 md:h-36 bg-accent/10 border-accent/50"
                            }
                          `}
                        >
                          <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2">
                            <winner.icon
                              className={`w-8 h-8 md:w-12 md:h-12 ${
                                winner.rank === 1
                                  ? "text-primary drop-shadow-[0_0_10px_rgba(119,37,131,0.5)]"
                                  : winner.rank === 2
                                    ? "text-secondary"
                                    : "text-accent"
                              }`}
                            />
                          </div>

                          <div className="mt-6 md:mt-8">
                            <p className="font-mono text-xs md:text-sm text-muted-foreground mb-1">
                              {winner.label}
                            </p>
                            <p className="font-poppins font-bold text-xl md:text-3xl">
                              ₹<AnimatedCounter value={winner.amount} />
                            </p>
                          </div>
                        </div>
                        <div
                          className={`h-1.5 md:h-2 w-full rounded-b-sm ${
                            winner.rank === 1
                              ? "bg-primary"
                              : winner.rank === 2
                                ? "bg-secondary"
                                : "bg-accent"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Category Prizes */}
            <div className="lg:col-span-5 space-y-6">
              {categoryPrizes.map((prize, index) => (
                <motion.div
                  key={prize.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <GlowCard
                    glowColor={index === 0 ? "secondary" : "accent"}
                    className="h-full"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`p-4 rounded-xl shrink-0 ${
                          index === 0
                            ? "bg-secondary/10 text-secondary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        <prize.icon className="w-7 h-7" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-poppins font-bold text-lg">
                            {prize.label}
                          </h4>
                          <span className="font-mono font-bold text-2xl">
                            ₹<AnimatedCounter value={prize.amount} />
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Performance Based Award
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}

              {/* Secondary Image Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative h-32 rounded-2xl overflow-hidden"
              >
                <img
                  src="/assets/images/prizes/celebration.jpg"
                  alt="Celebration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/60 to-primary/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Crown className="w-10 h-10 text-white mr-3" />
                  <span className="text-white font-poppins font-bold text-lg">
                    {" "}
                    Glory Awaits!
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
