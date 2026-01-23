import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import OrganizersSection from "@/components/sections/OrganizersSection";
import AboutSection from "@/components/sections/AboutSection";
import JourneySection from "@/components/sections/JourneySection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import VibeathonSection from "@/components/sections/VibeathonSection";
import PrizesSection from "@/components/sections/PrizesSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import CollaboratorsSection from "@/components/sections/CollaboratorsSection";
import Footer from "@/components/sections/Footer";
import FloatingParticles from "@/components/ui/FloatingParticles";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageLoader from "@/components/ui/PageLoader";
import NeuralBackground from "@/components/ui/NeuralBackground";
import PreviousEventSection from "@/components/sections/PreviousEventSection";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isLoaded && location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100); // Small delay to ensure layout stability
      }
    }
  }, [isLoaded, location.hash]);

  return (
    <>
      <PageLoader onLoadComplete={() => setIsLoaded(true)} />
      <div
        className={`min-h-screen relative transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <NeuralBackground />
        <FloatingParticles />
        <ScrollProgress />
        <Navigation />
        <main>
          <HeroSection />
          <CollaboratorsSection />
          <PreviousEventSection />
          <AboutSection />
          <JourneySection />
          <ScheduleSection />
          <VibeathonSection />
          <PrizesSection />
          <RegistrationSection />
          <OrganizersSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
