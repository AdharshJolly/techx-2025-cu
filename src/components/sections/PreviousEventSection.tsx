import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const images = [
  {
    src: "/assets/images/previous_event/1.jpg",
    alt: "TechX Previous Event Highlight 1",
  },
  {
    src: "/assets/images/previous_event/2.jpg",
    alt: "TechX Previous Event Highlight 2",
  },
  {
    src: "/assets/images/previous_event/3.jpg",
    alt: "TechX Previous Event Highlight 3",
  },
  {
    src: "/assets/images/previous_event/4.jpg",
    alt: "TechX Previous Event Highlight 4",
  },
];

const PreviousEventSection = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section className="py-24 relative overflow-hidden bg-black/40">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mb-4"
          >
            Legacy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold mb-8"
          >
            Previous <span className="text-gradient">Editions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A glimpse into the energy, innovation, and community that defines
            TechX.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto px-4 sm:px-12"
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/2 pl-4 py-4"
                >
                  <div className="group relative h-full will-change-transform">
                    {/* Main HUD Container with Clip Path */}
                    <div
                      className="relative h-full overflow-hidden bg-black/80 border border-white/10 transition-all duration-300 group-hover:border-secondary/50"
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)",
                      }}
                    >
                      {/* Image Container */}
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <div className="absolute inset-0 bg-neon-violet/10 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Image */}
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-50 group-hover:saturate-100 brightness-75 group-hover:brightness-100"
                        />

                        {/* Scanlines Effect */}
                        <div
                          className="absolute inset-0 pointer-events-none z-20 opacity-30 bg-[linear-gradient(rgba(18,16,20,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]"
                          style={{ backgroundSize: "100% 2px, 3px 100%" }}
                        />

                        {/* Scanner Bar Animation */}
                        <div className="absolute inset-x-0 h-[2px] bg-accent/80 shadow-[0_0_10px_rgba(173,125,189,0.8)] z-30 -translate-y-full group-hover:translate-y-[200%] transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100" />

                        {/* Overlay Content (Top) */}
                        <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/95 via-black/40 to-transparent z-40">
                          <div className="transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-1 h-4 bg-accent/80 rounded-sm" />
                              <span className="text-accent/80 font-mono text-xs tracking-wider uppercase">
                                Event Log 0{index + 1}
                              </span>
                            </div>
                            <h3 className="text-white font-poppins font-bold text-xl tracking-tight drop-shadow-md">
                              TechX Experience
                            </h3>
                          </div>
                        </div>

                        {/* Bottom Vignette */}
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 to-transparent z-20 pointer-events-none" />
                      </div>
                    </div>

                    {/* Decorative Elements outside the clip-path */}
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-accent/30 rounded-br-3xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
                    <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary/30 -z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 hover:border-primary text-primary hover:bg-primary/10 hover:text-white transition-colors" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/20 hover:border-primary text-primary hover:bg-primary/10 hover:text-white transition-colors" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default PreviousEventSection;
