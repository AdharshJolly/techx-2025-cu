import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Flag,
  Lightbulb,
  Trophy,
  Users,
  Calendar,
  Mic,
  Zap,
} from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

const days = [
  {
    day: "Day 1",
    title: "Foundation & Engagement",
    icon: Flag,
    color: "primary" as const,
    hex: "hsl(291, 56%, 33%)",
    image: "/assets/images/journey/keynote.jpg",
    accentIcon: Mic,
    items: [
      "Inauguration Ceremony",
      "Inspiring Keynote Address",
      "Technical Workshops",
      "Ice-breaking Activities",
    ],
  },
  {
    day: "Day 2",
    title: "Skill & Strategy",
    icon: Lightbulb,
    color: "secondary" as const,
    hex: "hsl(291, 38%, 47%)",
    image: "/assets/images/journey/workshop.jpg",
    accentIcon: Zap,
    items: [
      "Prompt Engineering Battle",
      "Sector-wise Idea Debate",
      "Mentoring Sessions",
      "Interactive Activities",
    ],
  },
  {
    day: "Day 3",
    title: "Innovation & Awards",
    icon: Trophy,
    color: "accent" as const,
    hex: "hsl(291, 30%, 61%)",
    image: "/assets/images/journey/activities.jpg",
    accentIcon: Calendar,
    items: [
      "VIBEATHON Finale",
      "Final Product Demonstrations",
      "Awards Ceremony",
      "Closing Remarks",
    ],
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-32 md:py-40 relative overflow-hidden">
      {/* Section separator gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-tag mb-4 inline-block">Event Roadmap</span>
            <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold">
              Your Path to <span className="text-gradient">Innovation</span>
            </h2>
          </motion.div>

          {/* Timeline with Cards */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-1 bg-muted -z-10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent origin-left"
              />
            </div>

            {/* Connecting Line (Mobile) */}
            <div className="md:hidden absolute left-8 top-12 bottom-24 w-1 bg-muted -z-10">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="w-full h-full bg-gradient-to-b from-primary via-secondary to-accent origin-top"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {days.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="flex flex-row md:flex-col items-center gap-4 mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                      className={`
                        relative z-10 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full 
                        bg-background border-4 transition-all duration-300 shadow-xl
                        ${index === 0 ? "border-primary" : index === 1 ? "border-secondary" : "border-accent"}
                      `}
                      style={{ boxShadow: `0 0 25px ${day.hex}40` }}
                    >
                      <day.icon
                        className={`w-7 h-7 md:w-10 md:h-10 ${
                          index === 0
                            ? "text-primary"
                            : index === 1
                              ? "text-secondary"
                              : "text-accent"
                        }`}
                      />

                      {/* Ripple Effect */}
                      <div
                        className={`absolute inset-0 rounded-full opacity-20 animate-ping ${
                          index === 0
                            ? "bg-primary"
                            : index === 1
                              ? "bg-secondary"
                              : "bg-accent"
                        }`}
                      />
                    </motion.div>

                    {/* Day Label */}
                    <span
                      className={`font-mono text-sm md:text-base font-bold uppercase tracking-wider ${
                        index === 0
                          ? "text-primary"
                          : index === 1
                            ? "text-secondary"
                            : "text-accent"
                      }`}
                    >
                      {day.day}
                    </span>
                  </div>

                  {/* Content Card */}
                  <GlowCard glowColor={day.color} delay={0} className="h-full">
                    {/* Day Image */}
                    <div className="h-40 -mx-4 -mt-4 mb-4 rounded-t-xl overflow-hidden relative">
                      <img
                        src={day.image}
                        alt={day.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-b from-transparent ${
                          day.color === "primary"
                            ? "via-primary/20 to-primary/80"
                            : day.color === "secondary"
                              ? "via-secondary/20 to-secondary/80"
                              : "via-accent/20 to-accent/80"
                        }`}
                      />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <day.accentIcon className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">
                          {day.day}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-poppins text-xl font-bold mb-4">
                        {day.title}
                      </h3>

                      <ul className="space-y-3">
                        {day.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.5 + index * 0.15 + i * 0.05,
                            }}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <span
                              className={`mt-1 w-2 h-2 rounded-full shrink-0 ${
                                index === 0
                                  ? "bg-primary"
                                  : index === 1
                                    ? "bg-secondary"
                                    : "bg-accent"
                              }`}
                            />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
