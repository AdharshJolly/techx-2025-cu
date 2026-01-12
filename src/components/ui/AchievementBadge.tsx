import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AchievementBadgeProps {
  icon: LucideIcon;
  label: string;
  unlocked?: boolean;
  delay?: number;
}

const AchievementBadge = ({ icon: Icon, label, unlocked = true, delay = 0 }: AchievementBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 200 
      }}
      whileHover={{ 
        scale: 1.1, 
        rotateY: 10,
        boxShadow: "0 0 30px hsl(270 100% 65% / 0.5)"
      }}
      className={`
        relative flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm cursor-default
        ${unlocked 
          ? "bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40" 
          : "bg-muted/30 border border-border/30 opacity-50"
        }
      `}
    >
      {/* Glow effect */}
      {unlocked && (
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10" />
      )}
      
      <div className={`
        w-6 h-6 rounded-full flex items-center justify-center
        ${unlocked ? "bg-primary/30" : "bg-muted/50"}
      `}>
        <Icon className={`w-3.5 h-3.5 ${unlocked ? "text-primary" : "text-muted-foreground"}`} />
      </div>
      
      <span className={`font-mono text-sm ${unlocked ? "text-foreground" : "text-muted-foreground"}`}>
        {label}
      </span>
      
      {/* XP indicator */}
      {unlocked && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.3 }}
          className="text-xs font-bold text-accent ml-1"
        >
          +XP
        </motion.span>
      )}
    </motion.div>
  );
};

export default AchievementBadge;
