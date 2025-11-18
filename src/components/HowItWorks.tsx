import { Search, FileText, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery Call",
    description: "We analyze your business goals and current processes."
  },
  {
    number: "02",
    icon: FileText,
    title: "Automation Blueprint",
    description: "We design the ideal smart workflow for your business."
  },
  {
    number: "03",
    icon: Wrench,
    title: "Full Implementation",
    description: "We build your chatbot, booking flows, CRM integration and post-sale automation."
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimization and Support",
    description: "We maintain, improve and scale your automations every month."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Connector Line (hidden on mobile and last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent" />
                  )}
                  
                  <div className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth border border-border/50 hover:border-primary/30 group">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl mb-3">{step.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
