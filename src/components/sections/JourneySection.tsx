import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flag, Lightbulb, Trophy } from "lucide-react";

const days = [
  {
    day: "Day 1",
    title: "Foundation & Engagement",
    icon: Flag,
    items: [
      "Inauguration Ceremony",
      "Inspiring Keynote Address",
      "Technical Workshops",
      "Ice-breaking & Team Engagement Activities",
    ],
  },
  {
    day: "Day 2",
    title: "Skill & Strategy",
    icon: Lightbulb,
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
    items: [
      "VIBEATHON (6-hour innovation sprint)",
      "Final Product Demonstrations",
      "Awards & Closing Ceremony",
    ],
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag mb-4"
          >
            Event Journey
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold"
          >
            3 Days of <span className="text-gradient">Innovation</span>
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {days.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 60px hsl(270 100% 65% / 0.2)"
              }}
              className="group relative p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
            >
              {/* Animated glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon with pulse */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6"
              >
                <day.icon className="w-6 h-6 text-primary" />
              </motion.div>
              
              {/* Day label */}
              <p className="font-mono text-sm text-primary mb-2">{day.day}</p>
              
              {/* Title */}
              <h3 className="font-poppins text-xl md:text-2xl font-semibold mb-4 relative">{day.title}</h3>
              
              {/* Items with staggered animation */}
              <ul className="space-y-3 relative">
                {day.items.map((item, i) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.15 + i * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.5 }}
                      className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" 
                    />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Connector line for desktop */}
              {index < 2 && (
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  className="hidden md:block absolute top-1/2 -right-4 lg:-right-5 w-8 lg:w-10 h-0.5 bg-gradient-to-r from-primary/50 to-transparent origin-left" 
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
