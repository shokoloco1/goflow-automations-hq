import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import MarketsSection from "@/components/MarketsSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
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
      <PainPointsSection />
    </div>
    <SectionDivider />
    <div className="lazy-section">
      <ServicesSection />
    </div>
    <SectionDivider />
    <div className="lazy-section">
      <IndustriesSection />
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
      <LeadCaptureForm />
    </div>
    <SectionDivider />
    <div className="lazy-section">
      <FinalCTA />
    </div>
    <Footer />
    <WhatsAppButton />
    <MobileCTABanner />
  </div>
);

export default Index;
