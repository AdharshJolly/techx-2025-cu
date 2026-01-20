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
  { src: "/assets/images/previous_event/1.jpg", alt: "TechX Previous Event Highlight 1" },
  { src: "/assets/images/previous_event/2.jpg", alt: "TechX Previous Event Highlight 2" },
  { src: "/assets/images/previous_event/3.jpg", alt: "TechX Previous Event Highlight 3" },
  { src: "/assets/images/previous_event/4.jpg", alt: "TechX Previous Event Highlight 4" },
];

const PreviousEventSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

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
            A glimpse into the energy, innovation, and community that defines TechX.
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
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-1">
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group">
                      <CardContent className="flex aspect-[16/10] items-center justify-center p-0 relative">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-white font-poppins font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                TechX Highlights
                            </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 hover:border-primary text-primary hover:bg-primary/10" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/20 hover:border-primary text-primary hover:bg-primary/10" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default PreviousEventSection;
