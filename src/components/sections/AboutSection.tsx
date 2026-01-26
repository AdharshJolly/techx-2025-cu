import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Users, Zap, Cpu, Sparkles, Calendar, Trophy } from "lucide-react";

const stats = [
  { value: 3, label: "Days", suffix: "" },
  { value: 400, label: "Expected Attendees", suffix: "+" },
  { value: 6, label: "Workshops", suffix: "+" },
  { value: 32, label: "Prize Pool", prefix: "₹", suffix: "K" },
];

const highlights = [
  { icon: Trophy, label: "VIBEATHON", color: "primary" },
  { icon: Users, label: "400+ Attendees", color: "secondary" },
  { icon: Calendar, label: "Feb 12-14, 2026", color: "accent" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden">
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
              About The Event
            </span>
            <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What is <span className="text-gradient">TechX</span>?
            </h2>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold shadow-[0_10px_30px_rgba(119,37,131,0.18)]">
                <Calendar className="w-4 h-4" aria-hidden />
                <span className="text-sm">Feb 12-14, 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            {/* Left: Image Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-full"
              >
                <div className="bg-card/50 border border-white/10 rounded-3xl overflow-hidden h-full">
                  {/* Main Image */}
                  <div className="h-64 md:h-80 -mx-4 -mt-4 mb-6 relative">
                    <img
                      src="/assets/images/about/tech-event.jpg"
                      alt="TechX Event"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/80" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-background/80 backdrop-blur-sm">
                          <Trophy className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-poppins font-bold text-xl text-white">
                            TechX 2025
                          </div>
                          <div className="text-sm text-white/70">
                            IEEE Computer Society
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="px-2 pb-2">
                    <div className="grid grid-cols-3 gap-3">
                      {highlights.map((item, i) => (
                        <div
                          key={i}
                          className={`p-3 rounded-xl text-center ${
                            item.color === "primary"
                              ? "bg-primary/10"
                              : item.color === "secondary"
                                ? "bg-secondary/10"
                                : "bg-accent/10"
                          }`}
                        >
                          <item.icon
                            className={`w-5 h-5 mx-auto mb-2 ${
                              item.color === "primary"
                                ? "text-primary"
                                : item.color === "secondary"
                                  ? "text-secondary"
                                  : "text-accent"
                            }`}
                          />
                          <div className="font-medium text-sm">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  TechX 2025 is a flagship technical and innovation event hosted
                  by the IEEE Computer Society at CHRIST University, Kengeri
                  Campus.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Spanning three immersive days (Feb 12-14, 2026), the event
                  introduces students to modern development paradigms such as{" "}
                  <span className="text-primary font-medium">vibe coding</span>,{" "}
                  <span className="text-primary font-medium">
                    AI-assisted development
                  </span>
                  ,{" "}
                  <span className="text-primary font-medium">
                    prompt engineering
                  </span>
                  , and{" "}
                  <span className="text-primary font-medium">
                    rapid prototyping
                  </span>
                  .
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  TechX brings together students from diverse disciplines to
                  collaborate, experiment, and innovate using emerging
                  technologies, culminating in a high-intensity innovation
                  sprint called{" "}
                  <span className="text-secondary font-semibold">
                    VIBEATHON
                  </span>
                  .
                </p>

                {/* Secondary Image */}
                <div className="pt-4">
                  <div className="h-48 rounded-2xl overflow-hidden relative">
                    <img
                      src="/assets/images/about/conference.jpg"
                      alt="Conference"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 to-accent/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Users className="w-10 h-10 text-white mx-auto mb-2" />
                        <span className="text-white font-poppins font-bold text-lg">
                          Innovation Community
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, scale: 1.02 }}
                className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <p className="font-poppins text-3xl md:text-4xl font-bold text-gradient mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                </p>
                <p className="font-mono text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
