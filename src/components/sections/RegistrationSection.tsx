import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Coffee, Ticket } from "lucide-react";

const pricingTiers = [
  {
    title: "IEEE CS Members",
    price: 299,
    highlight: true,
  },
  {
    title: "IEEE Members",
    price: 399,
  },
  {
    title: "Non-IEEE Members",
    price: 499,
  },
];

const benefits = [
  { icon: Calendar, label: "Access to all workshops and events" },
  { icon: Ticket, label: "VIBEATHON eligibility" },
  { icon: Award, label: "Certificates" },
  { icon: Coffee, label: "Snacks for all three days" },
  { icon: Award, label: "Prize eligibility" },
];

const RegistrationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="registration" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag mb-4"
          >
            Registration
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold mb-4"
          >
            Join <span className="text-gradient">TECHX 2025</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Secure your spot and be part of the most innovative tech event of the year
          </motion.p>
        </div>
        
        {/* Pricing cards with 3D hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + index * 0.1,
                type: "spring"
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: tier.highlight 
                  ? "0 20px 60px hsl(270 100% 65% / 0.3)"
                  : "0 20px 40px hsl(270 100% 65% / 0.15)"
              }}
              className={`relative p-6 md:p-8 rounded-2xl border backdrop-blur-sm text-center transition-all duration-300 cursor-default ${
                tier.highlight
                  ? "bg-gradient-to-b from-primary/20 to-secondary/10 border-primary/50"
                  : "bg-card/50 border-border/50 hover:border-border"
              }`}
            >
              {tier.highlight && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-xs font-semibold text-primary-foreground"
                >
                  Best Value
                </motion.div>
              )}
              
              <p className="font-mono text-sm text-muted-foreground mb-3">{tier.title}</p>
              <p className={`font-poppins text-4xl font-bold ${tier.highlight ? "text-gradient" : "text-foreground"}`}>
                ₹{tier.price}
              </p>
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "100%", opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Benefits with stagger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h3 className="font-poppins text-lg font-semibold text-center mb-6">What's Included</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={benefit.label} 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ x: 5, backgroundColor: "hsl(var(--card) / 0.8)" }}
                className="flex items-center gap-3 p-3 rounded-lg bg-card/30 border border-border/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{benefit.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA with pulse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center"
        >
          <Button variant="hero" size="xl" className="animate-pulse-glow" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;
