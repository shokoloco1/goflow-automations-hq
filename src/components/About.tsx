import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="mb-4">{t('about.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          {/* Company Description */}
          <div className={`space-y-6 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              {t('about.p1')}
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              {t('about.p2')}
            </p>
            
            <div className="text-lg text-foreground/80 leading-relaxed font-light">
              <p className="mb-4">{t('about.approach')}</p>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li><strong>{t('about.step1').split(' – ')[0]}</strong> – {t('about.step1').split(' – ')[1]}</li>
                <li><strong>{t('about.step2').split(' – ')[0]}</strong> – {t('about.step2').split(' – ')[1]}</li>
                <li><strong>{t('about.step3').split(' – ')[0]}</strong> – {t('about.step3').split(' – ')[1]}</li>
              </ol>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              {t('about.p4')}
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              {t('about.p5')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

