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
      taglineKey: 'packages.start.tagline',
      descKey: 'packages.start.desc',
      idealForKey: 'packages.start.idealFor',
      keyBenefits: [
        'packages.start.benefit1',
        'packages.start.benefit2',
        'packages.start.benefit3',
      ],
      features: [
        'packages.start.feature1',
        'packages.start.feature2',
        'packages.start.feature3',
        'packages.start.feature4',
        'packages.start.feature5',
        'packages.start.feature6',
        'packages.start.feature7',
        'packages.start.feature8',
        'packages.start.feature9',
      ],
      expectedResults: [
        'packages.start.result1',
        'packages.start.result2',
        'packages.start.result3',
      ],
      ctaKey: 'packages.cta.start',
      ctaSubtextKey: 'packages.cta.start.subtext',
      highlighted: false
    },
    {
      nameKey: 'packages.boost.name',
      badgeKey: 'packages.boost.badge',
      taglineKey: 'packages.boost.tagline',
      descKey: 'packages.boost.desc',
      idealForKey: 'packages.boost.idealFor',
      keyBenefits: [
        'packages.boost.benefit1',
        'packages.boost.benefit2',
        'packages.boost.benefit3',
      ],
      features: [
        'packages.boost.feature1',
        'packages.boost.feature2',
        'packages.boost.feature3',
        'packages.boost.feature4',
        'packages.boost.feature5',
        'packages.boost.feature6',
        'packages.boost.feature7',
        'packages.boost.feature8',
        'packages.boost.feature9',
        'packages.boost.feature10',
        'packages.boost.feature11',
        'packages.boost.feature12',
      ],
      expectedResults: [
        'packages.boost.result1',
        'packages.boost.result2',
        'packages.boost.result3',
      ],
      whyPopularKey: 'packages.boost.whyPopular',
      urgencyKey: 'packages.boost.urgency',
      ctaKey: 'packages.cta.boost',
      ctaSubtextKey: 'packages.cta.boost.subtext',
      highlighted: true
    },
    {
      nameKey: 'packages.ultra.name',
      badgeKey: 'packages.ultra.badge',
      taglineKey: 'packages.ultra.tagline',
      descKey: 'packages.ultra.desc',
      idealForKey: 'packages.ultra.idealFor',
      keyBenefits: [
        'packages.ultra.benefit1',
        'packages.ultra.benefit2',
        'packages.ultra.benefit3',
      ],
      features: [
        'packages.ultra.feature1',
        'packages.ultra.feature2',
        'packages.ultra.feature3',
        'packages.ultra.feature4',
        'packages.ultra.feature5',
        'packages.ultra.feature6',
        'packages.ultra.feature7',
        'packages.ultra.feature8',
        'packages.ultra.feature9',
        'packages.ultra.feature10',
        'packages.ultra.feature11',
        'packages.ultra.feature12',
      ],
      expectedResults: [
        'packages.ultra.result1',
        'packages.ultra.result2',
        'packages.ultra.result3',
      ],
      ctaKey: 'packages.cta.ultra',
      ctaSubtextKey: 'packages.cta.ultra.subtext',
      highlighted: false
    }
  ];

  return (
    <section id="packages" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">{t('packages.title')}</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('packages.subtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>
        
        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-6 md:p-8 shadow-card border transition-all duration-700 flex flex-col ${
                pkg.highlighted 
                  ? 'border-primary shadow-glow md:scale-105' 
                  : 'border-border/50 hover:border-primary/30 hover:shadow-glow'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Badge */}
              {pkg.badgeKey && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1 rounded-full text-sm font-medium shadow-lg">
                  {t(pkg.badgeKey)}
                </div>
              )}
              
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{t(pkg.nameKey)}</h3>
                <p className="text-lg font-semibold text-primary mb-2">{t(pkg.taglineKey)}</p>
                <p className="text-sm text-muted-foreground mb-3">{t(pkg.descKey)}</p>
                <p className="text-xs font-medium text-foreground/70 bg-muted px-3 py-2 rounded-lg inline-block">
                  {t(pkg.idealForKey)}
                </p>
              </div>
              
              {/* Key Benefits */}
              <div className="mb-6 bg-secondary/10 rounded-lg p-4">
                <ul className="space-y-2">
                  {pkg.keyBenefits.map((benefitKey, bIndex) => (
                    <li key={bIndex} className="text-sm font-medium">
                      {t(benefitKey)}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* What You Get */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-foreground/80">What You Get:</h4>
                <ul className="space-y-2.5">
                  {pkg.features.map((featureKey, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground/90">{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Expected Results */}
              <div className="mb-6 bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold mb-3">Expected Results:</h4>
                <ul className="space-y-2">
                  {pkg.expectedResults.map((resultKey, rIndex) => (
                    <li key={rIndex} className="text-sm flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>{t(resultKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Why Popular (only for highlighted) */}
              {pkg.whyPopularKey && (
                <div className="mb-6 text-center">
                  <p className="text-xs font-medium text-muted-foreground italic">
                    {t(pkg.whyPopularKey)}
                  </p>
                </div>
              )}
              
              {/* CTA */}
              <div className="mt-auto">
                <Button 
                  className={`w-full mb-2 ${pkg.highlighted ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''}`}
                  variant={pkg.highlighted ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t(pkg.ctaKey)}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  {t(pkg.ctaSubtextKey)}
                </p>
                {pkg.urgencyKey && (
                  <p className="text-xs text-center text-primary font-medium mt-2">
                    {t(pkg.urgencyKey)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* ROI Calculator CTA */}
        <div className={`max-w-2xl mx-auto mt-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-3">{t('packages.calculator.title')}</h3>
            <p className="text-muted-foreground mb-6">{t('packages.calculator.subtitle')}</p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('roi')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              {t('packages.calculator.cta')}
            </Button>
            <p className="text-xs text-muted-foreground mt-3">{t('packages.calculator.time')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
