import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useMemo, useRef } from "react";

const codeSymbols = ["</>", "{}", "[]", "=>", "//", "**", "&&", "||", "!=", "++", "01", "10"];

interface Particle {
  id: number;
  symbol: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  parallaxFactor: number;
}

const ParticleItem = ({ particle, scrollYProgress }: { particle: Particle; scrollYProgress: MotionValue<number> }) => {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, particle.parallaxFactor * (particle.id % 2 === 0 ? 1 : -1)]
  );

  return (
    <motion.div
      className="absolute font-mono text-primary/20 select-none"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        fontSize: `${particle.size}rem`,
        y,
      }}
      animate={{
        x: [0, 15, -15, 0],
        opacity: [0.1, 0.3, 0.1],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {particle.symbol}
    </motion.div>
  );
};

const FloatingParticles = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.5 + 0.6,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
      parallaxFactor: Math.random() * 200 + 50,
    }));
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <ParticleItem key={particle.id} particle={particle} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
};

export default FloatingParticles;
