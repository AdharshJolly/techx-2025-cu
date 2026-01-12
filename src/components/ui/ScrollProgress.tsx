import { motion, useScroll, useSpring } from "framer-motion";
import { Zap } from "lucide-react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-muted/30">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent origin-left"
        style={{ scaleX }}
      />
      <motion.div
        className="absolute top-0 h-6 w-6 -mt-2.5 flex items-center justify-center"
        style={{ left: scaleX.get() * 100 + "%" }}
      >
        <motion.div
          style={{ x: "-50%" }}
          className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_hsl(270_100%_65%/0.8)]"
        >
          <Zap className="w-3 h-3 text-primary-foreground hidden" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollProgress;
