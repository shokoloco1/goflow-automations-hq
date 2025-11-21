import { Calendar, MessageSquare, Bell, Workflow, FileText, PhoneCall } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatWeAutomate = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  
  const items = [
    { icon: Calendar, textKey: 'automate.item1' },
    { icon: Bell, textKey: 'automate.item2' },
    { icon: MessageSquare, textKey: 'automate.item3' },
    { icon: Workflow, textKey: 'automate.item4' },
    { icon: FileText, textKey: 'automate.item5' },
    { icon: PhoneCall, textKey: 'automate.item6' }
  ];

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">{t('automate.title')}</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className={`bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-smooth border border-border/50 hover:border-primary/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{t(item.textKey)}</p>
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

export default WhatWeAutomate;
