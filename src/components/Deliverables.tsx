import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const deliverables = [
  "Business process audit",
  "Automation blueprint",
  "AI chatbot setup",
  "Lead and booking automation",
  "Post-sale automation",
  "CRM integration",
  "Intelligent workflows",
  "Dashboards and reporting",
  "Training and handover",
  "Documentation",
  "Ongoing monthly support"
];

const Deliverables = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="deliverables" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">What You Get</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        {/* Deliverables List */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 bg-card rounded-xl p-5 shadow-card hover:shadow-glow transition-all duration-700 border border-border/50 hover:border-primary/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-foreground font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
