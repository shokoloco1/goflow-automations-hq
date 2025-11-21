import { Clock, TrendingUp, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: CheckCircle,
      titleKey: 'benefits.benefit1.title',
      descKey: 'benefits.benefit1.desc'
    },
    {
      icon: Clock,
      titleKey: 'benefits.benefit2.title',
      descKey: 'benefits.benefit2.desc'
    },
    {
      icon: TrendingUp,
      titleKey: 'benefits.benefit3.title',
      descKey: 'benefits.benefit3.desc'
    }
  ];

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">{t('benefits.title')}</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl mb-3 font-medium">{t(benefit.titleKey)}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {t(benefit.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
