import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Cpu, MessageSquare, Swords, Users, Zap } from "lucide-react";

const workshops = [
  {
    icon: Code,
    title: "Introduction to Vibe Coding",
    description: "Explore intuitive and efficient coding practices.",
  },
  {
    icon: Cpu,
    title: "AI-Assisted Development Tools",
    description: "Learn how to leverage AI tools to accelerate development.",
  },
  {
    icon: MessageSquare,
    title: "Prompt Engineering Fundamentals",
    description: "Master effective AI interaction and output generation.",
  },
];

const challenges = [
  {
    icon: Swords,
    title: "Prompt Engineering Battle",
    description: "Timed, competitive AI prompting challenge.",
  },
  {
    icon: Users,
    title: "Sector-wise Idea Debate",
    description: "Debate innovative ideas across real-world sectors.",
  },
  {
    icon: Zap,
    title: "VIBEATHON",
    description: "The ultimate innovation sprint.",
    highlight: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring" as const,
      stiffness: 150,
    },
  }),
};

const WorkshopsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workshops" className="py-24 md:py-32 relative bg-muted/20">
      <div className="container">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag mb-4"
          >
            Learn & Compete
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold"
          >
            Workshops & <span className="text-gradient">Challenges</span>
          </motion.h2>
        </div>
        
        {/* Workshops */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-poppins text-xl font-semibold mb-6 text-center md:text-left"
          >
            Workshops
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {workshops.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 50px hsl(270 100% 65% / 0.15)"
                }}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <h4 className="font-poppins font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                
                {/* Loading bar at bottom */}
                <div className="mt-4 h-1 rounded-full bg-muted/50 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Challenges */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-poppins text-xl font-semibold mb-6 text-center md:text-left"
          >
            Challenges
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index + 3}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: item.highlight 
                    ? "0 20px 60px hsl(270 100% 65% / 0.25)"
                    : "0 20px 50px hsl(320 100% 60% / 0.15)"
                }}
                className={`group p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-default ${
                  item.highlight
                    ? "bg-gradient-to-br from-primary/20 to-secondary/10 border-primary/50"
                    : "bg-card/50 border-border/50 hover:border-secondary/40"
                }`}
              >
                <motion.div 
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                    item.highlight
                      ? "bg-primary/30 group-hover:bg-primary/40"
                      : "bg-secondary/10 group-hover:bg-secondary/20"
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${item.highlight ? "text-primary" : "text-secondary"}`} />
                </motion.div>
                <h4 className="font-poppins font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                
                {/* Shimmer on highlight */}
                {item.highlight && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <motion.div
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
