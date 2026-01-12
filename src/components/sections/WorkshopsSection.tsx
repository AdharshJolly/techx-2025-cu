import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, Code, Cpu, MessageSquare, Mic, Zap } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

type TrackType = "workshops" | "challenges";

const workshops = [
  {
    id: "w1",
    title: "Intro to Vibe Coding",
    time: "10:30 AM - 11:30 AM",
    description: "Discover the new paradigm of coding where intuition meets AI. Learn how to 'vibe' with your code using modern AI assistants.",
    icon: Code,
    tags: ["AI-Assisted", "Future Tech", "Coding"],
    level: "Beginner",
  },
  {
    id: "w2",
    title: "AI-Assisted Dev Tools",
    time: "11:45 AM - 01:00 PM",
    description: "Hands-on deep dive into the latest AI development tools. Boost your productivity and learn to build faster.",
    icon: Cpu,
    tags: ["Productivity", "Tools", "DevOps"],
    level: "Intermediate",
  },
  {
    id: "w3",
    title: "Prompt Engineering 101",
    time: "02:00 PM - 03:00 PM",
    description: "Master the art of talking to AI. Learn the fundamental techniques to get the exact output you need from LLMs.",
    icon: MessageSquare,
    tags: ["LLMs", "Prompting", "NLP"],
    level: "All Levels",
  },
];

const challenges = [
  {
    id: "c1",
    title: "Prompt Engineering Battle",
    time: "09:30 AM - 12:00 PM",
    description: "A live, timed showdown where teams compete to generate the most accurate and creative outputs using AI models.",
    icon: Zap,
    tags: ["Team Event", "Live Battle", "Creativity"],
    specs: ["Team Size: 2-3", "Live Evaluation", "Timed Rounds"],
  },
  {
    id: "c2",
    title: "Sector-Wise Idea Debate",
    time: "09:30 AM - 12:00 PM",
    description: "Defend your innovative ideas in Education, Healthcare, Finance, or Sustainability against opposing teams and judges.",
    icon: Mic,
    tags: ["Debate", "Innovation", "Strategy"],
    specs: ["Team Size: 3-4", "Critical Thinking", "Defense"],
  },
];

const WorkshopsSection = () => {
  const [activeTrack, setActiveTrack] = useState<TrackType>("workshops");

  return (
    <section id="workshops" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mb-4"
          >
            Learn & Compete
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold mb-8"
          >
            Tech <span className="text-gradient">Arena</span>
          </motion.h2>

          {/* Track Switcher */}
          <div className="flex justify-center mb-12">
            <div className="p-1 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm relative">
              <div 
                className={`absolute inset-y-1 rounded-full bg-gradient-to-r transition-all duration-300 ease-in-out
                  ${activeTrack === "workshops" ? "from-primary to-accent left-1 w-[140px]" : "from-secondary to-orange-500 left-[145px] w-[140px]"}
                `} 
              />
              <div className="relative flex gap-1">
                <button
                  onClick={() => setActiveTrack("workshops")}
                  className={`w-[140px] px-6 py-2.5 rounded-full text-sm font-bold transition-colors z-10
                    ${activeTrack === "workshops" ? "text-white" : "text-muted-foreground hover:text-white"}
                  `}
                >
                  Workshops
                </button>
                <button
                  onClick={() => setActiveTrack("challenges")}
                  className={`w-[140px] px-6 py-2.5 rounded-full text-sm font-bold transition-colors z-10
                    ${activeTrack === "challenges" ? "text-white" : "text-muted-foreground hover:text-white"}
                  `}
                >
                  Challenges
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTrack === "workshops" ? (
              <motion.div
                key="workshops"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6"
              >
                {workshops.map((workshop, index) => (
                  <GlowCard 
                    key={workshop.id} 
                    glowColor="primary" 
                    className="flex flex-col md:flex-row items-start gap-6 group"
                    delay={index * 0.1}
                  >
                    <div className="shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <workshop.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                          {workshop.level}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1.5" />
                          {workshop.time}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold font-poppins group-hover:text-primary transition-colors">
                        {workshop.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {workshop.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {workshop.tags.map(tag => (
                          <span key={tag} className="text-xs font-mono text-foreground/60 bg-muted/50 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="challenges"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6"
              >
                {challenges.map((challenge, index) => (
                  <GlowCard 
                    key={challenge.id} 
                    glowColor="secondary" 
                    className="flex flex-col md:flex-row items-start gap-6 group border-secondary/20"
                    delay={index * 0.1}
                  >
                    <div className="shrink-0 w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                      <challenge.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="outline" className="bg-secondary/5 border-secondary/20 text-secondary">
                          Day 2 Event
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1.5" />
                          {challenge.time}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold font-poppins group-hover:text-secondary transition-colors">
                        {challenge.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {challenge.description}
                      </p>
                      
                      {/* Battle Specs */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-3 border-t border-border/50 mt-4">
                        {challenge.specs.map(spec => (
                          <div key={spec} className="flex items-center gap-2 text-xs font-mono text-secondary/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;