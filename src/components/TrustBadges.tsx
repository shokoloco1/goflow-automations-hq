import { Shield, Award, Headphones, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustBadges = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  
  const badges = [
    {
      icon: Shield,
      titleKey: 'trust.badge1.title',
      descKey: 'trust.badge1.desc'
    },
    {
      icon: Award,
      titleKey: 'trust.badge2.title',
      descKey: 'trust.badge2.desc'
    },
    {
      icon: Headphones,
      titleKey: 'trust.badge3.title',
      descKey: 'trust.badge3.desc'
    },
    {
      icon: TrendingUp,
      titleKey: 'trust.badge4.title',
      descKey: 'trust.badge4.desc'
    }
  ];

  return (
    <section className="py-16 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index}
                className="text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-medium text-foreground mb-1">{t(badge.titleKey)}</h4>
                <p className="text-sm text-muted-foreground font-light">{t(badge.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
