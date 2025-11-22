import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Packages = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  
  const packages = [
    {
      nameKey: 'packages.start.name',
      descKey: 'packages.start.desc',
      ctaKey: 'packages.cta.start',
      features: [
        'packages.start.feature1',
        'packages.start.feature2',
        'packages.start.feature3',
        'packages.start.feature4',
        'packages.start.feature5',
        'packages.start.feature6',
        'packages.start.feature7',
      ],
      highlighted: false
    },
    {
      nameKey: 'packages.boost.name',
      descKey: 'packages.boost.desc',
      badgeKey: 'packages.boost.badge',
      ctaKey: 'packages.cta.boost',
      features: [
        'packages.boost.feature1',
        'packages.boost.feature2',
        'packages.boost.feature3',
        'packages.boost.feature4',
        'packages.boost.feature5',
        'packages.boost.feature6',
        'packages.boost.feature7',
        'packages.boost.feature8',
      ],
      highlighted: true
    },
    {
      nameKey: 'packages.ultra.name',
      descKey: 'packages.ultra.desc',
      ctaKey: 'packages.cta.ultra',
      features: [
        'packages.ultra.feature1',
        'packages.ultra.feature2',
        'packages.ultra.feature3',
        'packages.ultra.feature4',
        'packages.ultra.feature5',
        'packages.ultra.feature6',
        'packages.ultra.feature7',
        'packages.ultra.feature8',
      ],
      highlighted: false
    }
  ];

  return (
    <section id="packages" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">{t('packages.title')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('packages.subtitle')}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>
        
        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-card border transition-all duration-700 ${
                pkg.highlighted 
                  ? 'border-primary shadow-glow scale-105 md:scale-110' 
                  : 'border-border/50 hover:border-primary/30 hover:shadow-glow'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Badge for highlighted package */}
              {pkg.highlighted && pkg.badgeKey && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1 rounded-full text-sm font-medium shadow-lg">
                  {t(pkg.badgeKey)}
                </div>
              )}
              
              {/* Package Name & Description */}
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-3">{t(pkg.nameKey)}</h3>
                <p className="text-muted-foreground text-sm">{t(pkg.descKey)}</p>
              </div>
              
              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((featureKey, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button 
                className={`w-full ${pkg.highlighted ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''}`}
                variant={pkg.highlighted ? 'default' : 'outline'}
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t(pkg.ctaKey)}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
