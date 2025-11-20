import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Deliverables from "@/components/Deliverables";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBadges />
      <About />
      <Services />
      <HowItWorks />
      <Industries />
      <Deliverables />
      <CaseStudy />
      <Testimonials />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
