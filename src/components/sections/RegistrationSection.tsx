import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, QrCode, Ticket } from "lucide-react";

const pricingTiers = [
  {
    id: "ieee-cs",
    title: "IEEE CS Member",
    price: 299,
    color: "primary",
  },
  {
    id: "ieee",
    title: "IEEE Member",
    price: 399,
    color: "secondary",
  },
  {
    id: "non-ieee",
    title: "Non-IEEE Member",
    price: 499,
    color: "accent",
  },
];

const benefits = [
  "Full 3-Day Event Access",
  "Workshops & Challenges",
  "VIBEATHON Eligibility",
  "Official Certificate",
  "Refreshments Included",
];

const RegistrationSection = () => {
  const [selectedTier, setSelectedTier] = useState(pricingTiers[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="registration" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-tag mb-4"
          >
            Get Your Pass
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold mb-8"
          >
            Secure Your <span className="text-gradient">Spot</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Ticket Selection */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold font-poppins mb-6">Select your category:</h3>
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier)}
                className={`
                  cursor-pointer p-4 rounded-xl border transition-all duration-300 flex items-center justify-between
                  ${selectedTier.id === tier.id 
                    ? `bg-${tier.color}/10 border-${tier.color} shadow-[0_0_20px_hsl(var(--${tier.color})_/_0.2)]` 
                    : "bg-card/50 border-border/50 hover:bg-card hover:border-border"}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center
                    ${selectedTier.id === tier.id ? `border-${tier.color} bg-${tier.color}` : "border-muted-foreground"}
                  `}>
                    {selectedTier.id === tier.id && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span className={`font-semibold ${selectedTier.id === tier.id ? "text-foreground" : "text-muted-foreground"}`}>
                    {tier.title}
                  </span>
                </div>
                <span className="font-mono font-bold">₹{tier.price}</span>
              </div>
            ))}
          </motion.div>

          {/* Right: The Holographic Ticket */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="perspective-1000"
          >
            <div className="relative w-full aspect-[3/5] md:aspect-[4/5] max-w-sm mx-auto">
              {/* Ticket Glow */}
              <div className={`absolute inset-0 transition-colors duration-500 blur-[60px] rounded-full
                 ${selectedTier.color === 'primary' ? 'bg-primary/20' : 
                   selectedTier.color === 'secondary' ? 'bg-secondary/20' : 'bg-accent/20'}
              `} />
              
              <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10" />
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 animate-shimmer pointer-events-none z-10" />

                {/* Top Section */}
                <div className={`p-8 transition-colors duration-500 bg-gradient-to-b
                   ${selectedTier.color === 'primary' ? 'from-primary/20' : 
                     selectedTier.color === 'secondary' ? 'from-secondary/20' : 'from-accent/20'}
                   to-transparent
                `}>
                  <div className="flex justify-between items-start mb-8">
                    <Ticket className={`w-8 h-8 
                       ${selectedTier.color === 'primary' ? 'text-primary' : 
                         selectedTier.color === 'secondary' ? 'text-secondary' : 'text-accent'}
                    `} />
                    <span className="font-mono text-xs border border-white/20 px-2 py-1 rounded">2025</span>
                  </div>
                  <h3 className="font-poppins text-3xl font-bold mb-2">TECHX</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest">All Access Pass</p>
                </div>

                {/* Middle Content */}
                <div className="flex-1 p-8 pt-0 flex flex-col justify-between">
                  <div className="space-y-4 my-6">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <Check className={`w-4 h-4 
                           ${selectedTier.color === 'primary' ? 'text-primary' : 
                             selectedTier.color === 'secondary' ? 'text-secondary' : 'text-accent'}
                        `} />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-muted-foreground text-sm">Amount Payable</span>
                      <div className="text-right">
                         <span className={`text-3xl font-bold font-mono
                            ${selectedTier.color === 'primary' ? 'text-primary' : 
                              selectedTier.color === 'secondary' ? 'text-secondary' : 'text-accent'}
                         `}>₹{selectedTier.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Perforated Divider */}
                <div className="relative h-px w-full bg-white/20 my-2">
                  <div className="absolute left-0 -top-3 w-6 h-6 bg-background rounded-full -ml-3" />
                  <div className="absolute right-0 -top-3 w-6 h-6 bg-background rounded-full -mr-3" />
                </div>

                {/* Bottom Section (QR) */}
                <div className="p-6 bg-black/20 flex items-center justify-between gap-4">
                  <div className="text-xs text-muted-foreground">
                    <p>Scan to</p>
                    <p>Register</p>
                  </div>
                  <QrCode className="w-12 h-12 text-white/80" />
                  <Button size="sm" className={`
                     ${selectedTier.color === 'primary' ? 'bg-primary hover:bg-primary/90' : 
                       selectedTier.color === 'secondary' ? 'bg-secondary hover:bg-secondary/90' : 'bg-accent hover:bg-accent/90'}
                     text-white border-0
                  `}>
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;