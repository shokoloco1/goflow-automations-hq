import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import WhatWeAutomate from "@/components/WhatWeAutomate";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
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
      <About />
      <WhatWeAutomate />
      <Services />
      <HowItWorks />
      <UseCases />
      <Industries />
      <Deliverables />
      <CaseStudy />
      <Testimonials />
      <Leadership />
      <FooterCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
