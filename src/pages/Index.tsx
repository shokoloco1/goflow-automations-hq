import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MarketsSection from "@/components/MarketsSection";
import StatsSection from "@/components/StatsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

const Index = () => (
  <div className="min-h-screen">
    <CustomCursor />
    <GrainOverlay />
    <Navigation />
    <HeroSection />
    <SectionDivider />
    <div className="lazy-section">
      <ProblemSection />
    </div>
    <SectionDivider />
    <div className="lazy-section">
      <SolutionSection />
    </div>
    <SectionDivider />
    <div className="lazy-section">
      <HowItWorksSection />
    </div>
    <SectionDivider />
    <div className="lazy-section">
      <ServicesSection />
    </div>
    <SectionDivider />
    <div className="lazy-section">
      <MarketsSection />
    </div>
    <SectionDivider />
    <div className="lazy-section">
      <StatsSection />
    </div>
    <SectionDivider />
    <div className="lazy-section">
      <FinalCTA />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
