import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, QrCode, Ticket, Users, Calendar } from "lucide-react";

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
    <section id="registration" className="py-32 md:py-40 relative overflow-hidden">
      {/* Section separator gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      {/* Creative Background Images */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 0.3, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-20 left-0 w-80 h-96 rounded-r-3xl overflow-hidden hidden xl:block"
      >
        <img 
          src="/assets/images/registration/registration.jpg" 
          alt="Event registration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute bottom-8 left-8">
          <Users className="w-10 h-10 text-white/90 mb-2" />
          <span className="text-white font-poppins font-bold text-lg">400+ Attendees</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 0.3, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-20 right-0 w-72 h-80 rounded-l-3xl overflow-hidden hidden xl:block"
      >
        <img 
          src="/assets/images/registration/ticket.jpg" 
          alt="Event ticket"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-secondary/50 to-transparent" />
        <div className="absolute bottom-8 right-8 text-right">
          <Calendar className="w-10 h-10 text-white/90 mb-2 ml-auto" />
          <span className="text-white font-poppins font-bold text-lg">3 Days</span>
          <p className="text-white/80 text-sm">of innovation</p>
        </div>
      </motion.div>

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
              <motion.div
                key={tier.id}
                onClick={() => setSelectedTier(tier)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  cursor-pointer p-4 rounded-xl border transition-all duration-300 flex items-center justify-between will-change-transform
                  ${selectedTier.id === tier.id 
                    ? `bg-${tier.color}/10 border-${tier.color} shadow-[0_0_20px_hsl(var(--${tier.color})_/_0.2)]` 
                    : "bg-card/50 border-border/50 hover:bg-card hover:border-border hover:shadow-lg"}
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
                <span className="font-mono font-bold">₹{tier.price} <span className="text-[10px] text-muted-foreground ml-1 font-normal">(+ GST)</span></span>
              </motion.div>
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
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src="/assets/images/registration/ticket.jpg" 
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                
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
                      <div className="text-right flex flex-col items-end">
                         <span className={`text-3xl font-bold font-mono
                            ${selectedTier.color === 'primary' ? 'text-primary' : 
                              selectedTier.color === 'secondary' ? 'text-secondary' : 'text-accent'}
                         `}>₹{selectedTier.price}</span>
                         <span className="text-xs text-muted-foreground/80 mt-1 font-medium tracking-wide">(+ GST)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Perforated Divider */}
                <div className="relative h-px w-full bg-white/20 my-2">
                  <div className="absolute left-0 -top-3 w-6 h-6 bg-background rounded-full -ml-3" />
                  <div className="absolute right-0 -top-3 w-6 h-6 bg-background rounded-full -mr-3" />
                </div>

                {/* Bottom Section (Note) */}
                <div className="p-6 bg-black/20 text-center">
                  <p className="text-xs text-muted-foreground">
                    Present this digital pass at the venue
                  </p>
                  <QrCode className="w-16 h-16 mx-auto mt-4 text-muted-foreground/50" />
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