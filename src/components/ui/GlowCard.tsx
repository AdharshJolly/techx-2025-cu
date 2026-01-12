import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary" | "accent";
  delay?: number;
  hover?: boolean;
}

const glowColors = {
  primary: "hover:shadow-[0_0_40px_hsl(270_100%_65%/0.3)] hover:border-primary/60",
  secondary: "hover:shadow-[0_0_40px_hsl(320_100%_60%/0.3)] hover:border-secondary/60",
  accent: "hover:shadow-[0_0_40px_hsl(280_100%_70%/0.3)] hover:border-accent/60",
};

const GlowCard = ({ 
  children, 
  className = "", 
  glowColor = "primary",
  delay = 0,
  hover = true 
}: GlowCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={`
        relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm
        transition-all duration-300
        ${hover ? glowColors[glowColor] : ""}
        ${className}
      `}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>
      
      {children}
    </motion.div>
  );
};

export default GlowCard;
