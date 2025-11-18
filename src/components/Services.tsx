import { Button } from "@/components/ui/button";
import { Bot, Calendar, Heart, Database, Lightbulb, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Bot,
    title: "AI Virtual Assistant",
    description: "Your 24/7 intelligent assistant that answers questions, qualifies leads and manages appointments automatically through website, Instagram or WhatsApp.",
    color: "primary"
  },
  {
    icon: Calendar,
    title: "Lead and Booking Automation",
    description: "Automated workflows that capture leads from forms, WhatsApp, Instagram or your website and convert them into confirmed bookings with reminders.",
    color: "secondary"
  },
  {
    icon: Heart,
    title: "Post-Sale Automation",
    description: "Thank you sequences, Google review requests, reactivation flows and custom follow-up systems to retain clients and boost engagement.",
    color: "primary"
  },
  {
    icon: Database,
    title: "CRM Integration",
    description: "We connect your WhatsApp, forms, booking tools and chatbots into a central CRM with automated tasks and dashboards.",
    color: "secondary"
  },
  {
    icon: Lightbulb,
    title: "AI Consulting",
    description: "We analyze your processes and design a smart automation blueprint for you to operate efficiently with less manual work.",
    color: "primary"
  }
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-700 border border-border/50 hover:border-primary/30 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${service.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${service.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg"
            className="shadow-soft hover:shadow-glow transition-smooth group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More About Our Solutions
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
