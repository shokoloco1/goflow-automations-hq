import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicePricingSection from "@/components/ServicePricingSection";
import CalculatorSection from "@/components/CalculatorSection";
import IndustriesSection from "@/components/IndustriesSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import MobileCTABanner from "@/components/MobileCTABanner";

const Index = () => (
  <div className="min-h-screen pb-12 md:pb-0">
    <CustomCursor />
    <GrainOverlay />
    <Navigation />
    <HeroSection />
    <div className="lazy-section">
      <ProblemSection />
    </div>
    <div className="lazy-section">
      <HowItWorksSection />
    </div>
    <div className="lazy-section">
      <ServicePricingSection />
    </div>
    <div className="lazy-section">
      <CalculatorSection />
    </div>
    <div className="lazy-section">
      <IndustriesSection />
    </div>
    <FinalCTA />
    <Footer />
    <WhatsAppButton />
    <MobileCTABanner />
  </div>
);

export default Index;
