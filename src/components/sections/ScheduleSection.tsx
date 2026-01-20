import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Code, 
  Cpu, 
  MessageSquare, 
  Mic, 
  Zap, 
  Coffee, 
  Utensils, 
  Users, 
  Trophy,
  Flag,
  Sparkles,
  Rocket
} from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

type DayType = "day1" | "day2" | "day3";

const scheduleData = {
  day1: [
    {
      id: "d1-1",
      time: "09:30 AM - 10:30 AM",
      title: "Inauguration & Keynote Address",
      description: "Opening ceremony kicking off TechX 2025 with visionary talks.",
      icon: Mic,
      category: "General",
      color: "primary"
    },
    {
      id: "d1-2",
      time: "10:30 AM - 11:30 AM",
      title: "Technical Workshops – Session 1",
      description: "Deep dive into AI-assisted development and modern tech stacks.",
      icon: Code,
      category: "Workshop",
      color: "blue"
    },
    {
      id: "d1-3",
      time: "11:30 AM - 11:45 AM",
      title: "Hi-Tea & Networking",
      description: "Refreshments and networking opportunity with peers and mentors.",
      icon: Coffee,
      category: "Break",
      color: "green"
    },
    {
      id: "d1-4",
      time: "11:45 AM - 01:00 PM",
      title: "Technical Workshop – Session 2",
      description: "Advanced concepts and hands-on practice.",
      icon: Code,
      category: "Workshop",
      color: "blue"
    },
    {
      id: "d1-5",
      time: "01:00 PM - 02:00 PM",
      title: "Lunch Break",
      description: "Refuel for the afternoon sessions.",
      icon: Utensils,
      category: "Break",
      color: "green"
    },
    {
      id: "d1-6",
      time: "02:00 PM - 03:00 PM",
      title: "Technical Workshops – Session 3",
      description: "Final technical session wrapping up core concepts.",
      icon: Code,
      category: "Workshop",
      color: "blue"
    },
    {
      id: "d1-7",
      time: "03:00 PM - 04:30 PM",
      title: "Ice-Breaking & Engagement",
      description: "Team engagement activities and Nano-Mentoring for interactive students.",
      icon: Users,
      category: "Activity",
      color: "purple"
    }
  ],
  day2: [
    {
      id: "d2-1",
      time: "09:30 AM - 12:00 PM",
      title: "Prompt Engineering Battle",
      description: "Live timed challenges to generate the best outputs using AI models.",
      icon: Zap,
      category: "Competition",
      color: "orange"
    },
    {
      id: "d2-2",
      time: "09:30 AM - 12:00 PM",
      title: "Sector-Wise Idea Debate",
      description: "Teams defend innovative ideas in Education, Healthcare, Finance, and Sustainability.",
      icon: MessageSquare,
      category: "Competition",
      color: "orange"
    },
    {
      id: "d2-3",
      time: "12:00 PM - 01:00 PM",
      title: "Lunch Break",
      description: "Mid-day break.",
      icon: Utensils,
      category: "Break",
      color: "green"
    },
    {
      id: "d2-4",
      time: "01:00 PM - 04:00 PM",
      title: "Activity & Nano-Mentoring",
      description: "Interactive sessions and mentorship opportunities.",
      icon: Sparkles,
      category: "Activity",
      color: "purple"
    }
  ],
  day3: [
    {
      id: "d3-1",
      time: "09:30 AM - 10:00 AM",
      title: "Problem Statement Finalization",
      description: "Teams finalize their approach for the main hackathon event.",
      icon: Flag,
      category: "Vibeathon",
      color: "pink"
    },
    {
      id: "d3-2",
      time: "10:00 AM - 03:00 PM",
      title: "VIBEATHON Build Phase",
      description: "6-hour innovation sprint. Build, execute, and showcase solutions.",
      icon: Cpu,
      category: "Vibeathon",
      color: "pink"
    },
    {
      id: "d3-3",
      time: "03:00 PM - 05:00 PM",
      title: "Final Demos & Evaluation",
      description: "Presentation of working prototypes to judges.",
      icon: Rocket,
      category: "Vibeathon",
      color: "pink"
    },
    {
      id: "d3-4",
      time: "05:00 PM - 05:30 PM",
      title: "Awards & Closing Ceremony",
      description: "Celebrating winners and closing remarks.",
      icon: Trophy,
      category: "Ceremony",
      color: "primary"
    }
  ]
};

const getColorStyles = (color: string) => {
  switch (color) {
    case "blue":
      return {
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
        badge: "bg-blue-500/5 border-blue-500/20 text-blue-400",
        titleHover: "group-hover:text-blue-400",
        glow: "secondary" as const
      };
    case "green":
      return {
        iconBg: "bg-green-500/10",
        iconColor: "text-green-400",
        badge: "bg-green-500/5 border-green-500/20 text-green-400",
        titleHover: "group-hover:text-green-400",
        glow: "accent" as const
      };
    case "orange":
      return {
        iconBg: "bg-orange-500/10",
        iconColor: "text-orange-400",
        badge: "bg-orange-500/5 border-orange-500/20 text-orange-400",
        titleHover: "group-hover:text-orange-400",
        glow: "secondary" as const
      };
    case "pink":
      return {
        iconBg: "bg-pink-500/10",
        iconColor: "text-pink-400",
        badge: "bg-pink-500/5 border-pink-500/20 text-pink-400",
        titleHover: "group-hover:text-pink-400",
        glow: "accent" as const
      };
    case "purple":
      return {
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-400",
        badge: "bg-purple-500/5 border-purple-500/20 text-purple-400",
        titleHover: "group-hover:text-purple-400",
        glow: "primary" as const
      };
    default: // primary
      return {
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
        badge: "bg-primary/5 border-primary/20 text-primary",
        titleHover: "group-hover:text-primary",
        glow: "primary" as const
      };
  }
};

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState<DayType>("day1");

  const getDayLabel = (day: DayType) => {
    switch(day) {
      case "day1": return "Day 1";
      case "day2": return "Day 2";
      case "day3": return "Day 3";
    }
  };

  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mb-4"
          >
            Event Timeline
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold mb-8"
          >
            Event <span className="text-gradient">Schedule</span>
          </motion.h2>

          {/* Day Switcher */}
          <div className="flex justify-center mb-12">
            <div className="p-1 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm relative flex">
              <div 
                className="absolute inset-y-1 rounded-full bg-primary/20 transition-all duration-300 ease-in-out border border-primary/50"
                style={{ 
                  left: activeDay === "day1" ? "4px" : activeDay === "day2" ? "33.33%" : "66.66%",
                  width: "calc(33.33% - 4px)",
                  transform: activeDay === "day2" ? "translateX(-2px)" : activeDay === "day3" ? "translateX(-4px)" : "none"
                }} 
              />
              {(["day1", "day2", "day3"] as DayType[]).map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`w-[100px] md:w-[140px] px-2 md:px-6 py-2.5 rounded-full text-sm font-bold transition-colors z-10
                    ${activeDay === day ? "text-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" : "text-muted-foreground hover:text-foreground"}
                  `}
                >
                  {getDayLabel(day)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              {scheduleData[activeDay].map((item, index) => {
                const styles = getColorStyles(item.color);
                return (
                  <GlowCard 
                    key={item.id} 
                    glowColor={styles.glow} 
                    className="flex flex-col md:flex-row items-start gap-6 group"
                    delay={index * 0.1}
                  >
                    <div className={`shrink-0 w-16 h-16 rounded-xl ${styles.iconBg} flex items-center justify-center ${styles.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="outline" className={styles.badge}>
                          {item.category}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1.5" />
                          {item.time}
                        </div>
                      </div>
                      <h3 className={`text-xl font-bold font-poppins ${styles.titleHover} transition-colors`}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </GlowCard>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;