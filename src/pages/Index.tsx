import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import JourneySection from "@/components/sections/JourneySection";
import WorkshopsSection from "@/components/sections/WorkshopsSection";
import VibeathonSection from "@/components/sections/VibeathonSection";
import PrizesSection from "@/components/sections/PrizesSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import Footer from "@/components/sections/Footer";
import FloatingParticles from "@/components/ui/FloatingParticles";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageLoader from "@/components/ui/PageLoader";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <PageLoader onLoadComplete={() => setIsLoaded(true)} />
      <div
        className={`min-h-screen relative transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <FloatingParticles />
        <ScrollProgress />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <JourneySection />
          <WorkshopsSection />
          <VibeathonSection />
          <PrizesSection />
          <RegistrationSection />
          {/* <SponsorsSection /> */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
