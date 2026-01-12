import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Placeholder sponsors data
const sponsors = [
  { name: "TechGiant", type: "Platinum" },
  { name: "InnovateLabs", type: "Platinum" },
  { name: "CodeMasters", type: "Gold" },
  { name: "FutureSystems", type: "Gold" },
  { name: "DevConnect", type: "Silver" },
  { name: "CloudScale", type: "Silver" },
  { name: "DataFlow", type: "Silver" },
  { name: "AI_Dynamics", type: "Bronze" },
  { name: "CyberGuard", type: "Bronze" },
  { name: "PixelPerfect", type: "Bronze" },
];

const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sponsors" className="py-20 md:py-28 relative overflow-hidden bg-background/50">
      <div className="container relative z-10 mb-12">
        <div className="text-center" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag mb-4"
          >
            Our Partners
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold mb-6"
          >
            Supported by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* Scrolling Content - Doubled for seamless loop */}
        <motion.div
          className="flex gap-8 md:gap-12 py-4"
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }} // Note: Framer motion doesn't support pause on hover directly like CSS, but we can try controls or just keep it simple. 
          // Actually, let's stick to simple continuous scroll. For pause on hover, CSS is often easier, but we'll stick to motion for consistency.
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-48 h-24 md:w-64 md:h-32 rounded-xl bg-card/30 border border-border/50 hover:border-primary/30 transition-colors backdrop-blur-sm group/card"
            >
              <div className="text-center">
                <span className="block font-poppins font-bold text-lg md:text-xl text-foreground/80 group-hover/card:text-primary transition-colors">
                  {sponsor.name}
                </span>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {sponsor.type} Sponsor
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
