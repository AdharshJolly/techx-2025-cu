import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 3, label: "Days", suffix: "" },
  { value: 400, label: "Expected Attendees", suffix: "+" },
  { value: 6, label: "Workshops", suffix: "+" },
  { value: 32000, label: "Prize Pool", prefix: "₹" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag mb-4"
          >
            About The Event
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold mb-8"
          >
            What is <span className="text-gradient">TECHX</span>?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              TECHX 2025 is a flagship technical and innovation event hosted by the IEEE Computer Society at CHRIST University, Kengeri Campus.
            </p>
            <p>
              Spanning three immersive days, the event introduces students to modern development paradigms such as <span className="text-primary font-medium">vibe coding</span>, <span className="text-primary font-medium">AI-assisted development</span>, <span className="text-primary font-medium">prompt engineering</span>, and <span className="text-primary font-medium">rapid prototyping</span>.
            </p>
            <p>
              TECHX brings together students from diverse disciplines to collaborate, experiment, and innovate using emerging technologies, culminating in a high-intensity innovation sprint called <span className="text-secondary font-semibold">VIBEATHON</span>.
            </p>
          </motion.div>
          
          {/* Stats with loading animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 40px hsl(270 100% 65% / 0.2)"
                }}
                className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40"
              >
                <p className="font-poppins text-3xl md:text-4xl font-bold text-gradient">
                  <AnimatedCounter 
                    value={stat.value} 
                    prefix={stat.prefix || ""} 
                    suffix={stat.suffix || ""} 
                  />
                </p>
                <p className="font-mono text-sm text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
