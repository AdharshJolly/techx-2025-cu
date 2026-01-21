import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const collaborators = [
  { name: "IEEE Computer Society", logo: "/assets/images/ieee_computer_societ.png", h: "h-16 md:h-20" },
  { name: "IEEE", logo: "/assets/images/ieee_logo.png", h: "h-12 md:h-16" },
  { name: "IEEE CS CU", logo: "/assets/images/ieee_cs_cu.png", h: "h-20 md:h-24" },
  { name: "IEEE SYP Activities", logo: "/assets/images/ieee_syp_activites.png", h: "h-14 md:h-18" },
];

const CollaboratorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collaborators" className="py-20 relative overflow-hidden bg-background/50 border-t border-white/5">
      <div className="container relative z-10 mb-10">
        <div className="text-center" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag mb-4"
          >
            In Collaboration With
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* Scrolling Content - Tripled for smoother infinite loop on wide screens */}
        <motion.div
          className="flex items-center gap-16 md:gap-32 py-4 pr-16 md:pr-32"
          animate={{ x: [0, "-33.33%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {[...collaborators, ...collaborators, ...collaborators].map((collab, index) => (
            <div
              key={`${collab.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 filter"
            >
              <img 
                src={collab.logo} 
                alt={collab.name} 
                className={`${collab.h} w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
