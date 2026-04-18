import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WorkflowVisualization from "@/components/WorkflowVisualization";
import HowItWorksSection from "@/components/HowItWorksSection";
import AutomationShowcase from "@/components/AutomationShowcase";
import ServicesPricingSection from "@/components/ServicesPricingSection";
import CalculatorSection from "@/components/CalculatorSection";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
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
      <ServicesPricingSection />
    </div>
    <div className="lazy-section">
      <ProblemSection />
    </div>
    <div className="lazy-section">
      <WorkflowVisualization />
    </div>
    <div className="lazy-section">
      <HowItWorksSection />
    </div>
    <div className="lazy-section">
      <AutomationShowcase />
    </div>
    <div className="lazy-section">
      <CalculatorSection />
    </div>
    <div className="lazy-section">
      <IndustriesSection />
    </div>
    <div className="lazy-section">
      <FAQSection />
    </div>
    <div className="lazy-section">
      <AboutSection />
    </div>
    <FinalCTA />
    <Footer />
    <WhatsAppButton />
    <MobileCTABanner />
  </div>
);

export default Index;
