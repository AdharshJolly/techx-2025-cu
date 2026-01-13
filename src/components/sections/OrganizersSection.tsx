import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Globe, GraduationCap } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/button";

const OrganizersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="organizers" className="py-20 relative">
      <div className="container relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-tag mb-4"
          >
            The Organizers
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-poppins text-3xl md:text-5xl font-bold mb-8"
          >
            Organized <span className="text-gradient">By</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* CHRIST University Card */}
          <GlowCard glowColor="primary" className="h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins text-2xl font-bold">
                CHRIST (Deemed to be University)
              </h3>
            </div>

            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed flex-grow">
              <p>
                CHRIST (Deemed to be University) was born out of the educational
                vision of St Kuriakose Elias Chavara, an educationalist and
                social reformer of the nineteenth century in South India. He
                founded the first Catholic indigenous congregation, Carmelites
                of Mary Immaculate (CMI), in 1831, which administers the
                University.
              </p>
              <p>
                Established in 1969 as Christ College, it undertook
                path-breaking initiatives in Indian higher education with the
                introduction of innovative and modern curricula, insistence on
                academic discipline, imparting of Holistic Education, and
                adoption of global higher education practices.
              </p>
              <p>
                The University Grants Commission (UGC) of India conferred
                Autonomy to Christ College in 2004 and identified it as an
                Institution with Potential for Excellence in 2006. One of the
                first institutions in India to be accredited in 1998 by the
                NAAC, and subsequently in 2004 and 2016, CHRIST (Deemed to be
                University) has the top grade 'A' in the 4-point scale.
              </p>
            </div>

            <div className="mt-2 pt-2 border-t border-border/50">
              <Button
                variant="outline"
                className="w-full sm:w-auto gap-2 group"
                asChild
              >
                <a
                  href="https://christuniversity.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-4 h-4 text-primary group-hover:text-foreground transition-colors" />
                  Visit Website
                </a>
              </Button>
            </div>
          </GlowCard>

          {/* IEEE CS Card */}
          <GlowCard glowColor="secondary" className="h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <Building2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-poppins text-2xl font-bold">
                IEEE Computer Society Bangalore Chapter
              </h3>
            </div>

            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed flex-grow">
              <p>
                IEEE Computer Society Bangalore Chapter is a professional
                chapter of the IEEE Computer Society, which is a growing and
                diverse community of computing professionals and the most
                trusted source for information, inspiration, and collaboration
                in computer science and engineering.
              </p>
              <p>
                Focusing on the regions of the state of Karnataka, India, the
                IEEE Computer Society Bangalore Chapter was founded in the year
                1982. It is one of the largest technical societies of IEEE
                Bangalore.
              </p>
              <p>
                This is the 40th year of its establishment, marking four decades
                of fostering technical excellence and professional growth in the
                region.
              </p>
            </div>

            <div className="mt-2 pt-2 border-t border-border/50">
              <Button
                variant="outline"
                className="w-full sm:w-auto gap-2 group hover:border-secondary/50"
                asChild
              >
                <a
                  href="https://cs.ieeebangalore.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-4 h-4 text-secondary group-hover:text-foreground transition-colors" />
                  Visit Website
                </a>
              </Button>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
