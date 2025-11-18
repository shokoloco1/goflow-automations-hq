import { User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          {/* Company Description */}
          <div className={`space-y-6 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              GoFlow AI is an intelligent automation agency that helps service businesses run smarter, faster and with far less manual work. We design AI-powered systems that handle enquiries, bookings, follow-ups, CRM updates and customer communication across WhatsApp, web and social channels—24/7.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              We work with clinics, wellness centres, gyms, restaurants and other service-based businesses in Australia, Ecuador and Chile. Every solution is custom-built around your real processes: how people find you, book, buy and come back.
            </p>
            
            <div className="text-lg text-foreground/80 leading-relaxed font-light">
              <p className="mb-4">Our approach is simple and practical:</p>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li><strong>Understand your operations</strong> – we map your current customer journey and internal workflows.</li>
                <li><strong>Identify bottlenecks</strong> – we spot where time is wasted, leads are lost or customers drop off.</li>
                <li><strong>Automate intelligently</strong> – we design and implement AI workflows that reduce response times, increase bookings and improve customer retention.</li>
              </ol>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              We don&apos;t just plug in tools and leave. We track performance and refine your automation so it keeps driving measurable business results: more revenue, lower operating costs and a better experience for your customers.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              Our solutions are fully bilingual (English and Spanish), making GoFlow AI a strong partner for businesses in multicultural markets. We understand the nuances of serving diverse audiences and ensure your automations work seamlessly across languages and cultures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

