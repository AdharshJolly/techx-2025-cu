import { motion } from "framer-motion";
import { Flag, Lightbulb, Trophy } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

const days = [
  {
    day: "Day 1",
    title: "Foundation & Engagement",
    icon: Flag,
    color: "primary" as const,
    hex: "hsl(270, 100%, 65%)",
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
    hex: "hsl(320, 100%, 60%)",
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
    hex: "hsl(280, 100%, 70%)",
    items: [
      "VIBEATHON Finale",
      "Final Product Demonstrations",
      "Awards Ceremony",
      "Closing Remarks",
    ],
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mb-4"
          >
            Event Roadmap
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold"
          >
            Your Path to <span className="text-gradient">Innovation</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-1 bg-muted -z-10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent origin-left"
            />
          </div>

          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute left-8 top-12 bottom-24 w-1 bg-muted -z-10">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-b from-primary via-secondary to-accent origin-top"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {days.map((day, index) => (
              <div key={day.day} className="relative group">
                {/* Timeline Node */}
                <div className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-8 mb-4 md:mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.2, type: "spring" }}
                    className={`
                      relative z-10 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full 
                      bg-background border-4 transition-all duration-300 shadow-xl
                      ${index === 0 ? "border-primary" : index === 1 ? "border-secondary" : "border-accent"}
                      group-hover:scale-110
                    `}
                    style={{
                      boxShadow: `0 0 20px ${day.hex}40`,
                    }}
                  >
                    <day.icon 
                      className={`w-6 h-6 md:w-10 md:h-10 transition-colors duration-300
                        ${index === 0 ? "text-primary" : index === 1 ? "text-secondary" : "text-accent"}
                        group-hover:text-foreground
                      `} 
                    />
                    
                    {/* Ripple Effect */}
                    <div className={`absolute inset-0 rounded-full opacity-20 animate-ping ${
                        index === 0 ? "bg-primary" : index === 1 ? "bg-secondary" : "bg-accent"
                    }`} />
                  </motion.div>

                  {/* Date Label (Desktop only for alignment) */}
                  <div className="md:hidden pt-2">
                     <span className={`font-mono text-sm font-bold uppercase tracking-wider
                        ${index === 0 ? "text-primary" : index === 1 ? "text-secondary" : "text-accent"}
                     `}>
                        {day.day}
                     </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="ml-24 md:ml-0">
                  <GlowCard 
                    glowColor={day.color} 
                    delay={0.4 + index * 0.2}
                    className="h-full flex flex-col justify-between"
                  >
                    <div>
                      <span className={`hidden md:block font-mono text-xs font-bold uppercase tracking-wider mb-2
                          ${index === 0 ? "text-primary" : index === 1 ? "text-secondary" : "text-accent"}
                       `}>
                          {day.day}
                      </span>
                      <h3 className="font-poppins text-xl font-bold mb-4">{day.title}</h3>
                      <ul className="space-y-3 mb-6">
                        {day.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0
                                ${index === 0 ? "bg-primary" : index === 1 ? "bg-secondary" : "bg-accent"}
                            `} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
