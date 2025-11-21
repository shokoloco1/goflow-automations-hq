import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const UseCases = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  
  const cases = [
    'useCases.case1',
    'useCases.case2',
    'useCases.case3',
    'useCases.case4'
  ];

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">{t('useCases.title')}</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {cases.map((caseKey, index) => (
              <div 
                key={index}
                className={`bg-muted/50 rounded-xl p-6 flex items-center gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-foreground font-light">{t(caseKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
