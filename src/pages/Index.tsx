import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Benefits from "@/components/Benefits";
import WhatWeAutomate from "@/components/WhatWeAutomate";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import ROICalculator from "@/components/ROICalculator";
import UseCases from "@/components/UseCases";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Deliverables from "@/components/Deliverables";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import Leadership from "@/components/Leadership";
import FooterCTA from "@/components/FooterCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBadges />
      <Benefits />
      <WhatWeAutomate />
      <Services />
      <HowItWorks />
      <Packages />
      <ROICalculator />
      <UseCases />
      <Testimonials />
      <About />
      <Industries />
      <Deliverables />
      <CaseStudy />
      <Leadership />
      <FooterCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
