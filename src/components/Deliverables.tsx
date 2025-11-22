import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const deliverables = [
  { titleKey: 'deliverables.item1.title', descKey: 'deliverables.item1.desc' },
  { titleKey: 'deliverables.item2.title', descKey: 'deliverables.item2.desc' },
  { titleKey: 'deliverables.item3.title', descKey: 'deliverables.item3.desc' },
  { titleKey: 'deliverables.item4.title', descKey: 'deliverables.item4.desc' },
  { titleKey: 'deliverables.item5.title', descKey: 'deliverables.item5.desc' },
  { titleKey: 'deliverables.item6.title', descKey: 'deliverables.item6.desc' },
  { titleKey: 'deliverables.item7.title', descKey: 'deliverables.item7.desc' },
  { titleKey: 'deliverables.item8.title', descKey: 'deliverables.item8.desc' },
  { titleKey: 'deliverables.item9.title', descKey: 'deliverables.item9.desc' },
];

const Deliverables = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  
  return (
    <section id="deliverables" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">{t('deliverables.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        {/* Deliverables List */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className={`flex flex-col gap-3 bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-700 border border-border/50 hover:border-primary/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-foreground font-semibold mb-2 text-lg">{t(item.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
