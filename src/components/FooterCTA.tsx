import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FooterCTA = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">{t('footerCta.title')}</h2>
          <p className="text-xl text-muted-foreground mb-2 font-light">
            {t('footerCta.subtitle')}
          </p>
          <p className="text-sm text-muted-foreground/80 mb-8 font-light">
            {t('footerCta.noObligation')}
          </p>
          <Button 
            size="lg" 
            className="text-base px-10 py-7 shadow-glow hover:shadow-xl transition-smooth group font-medium"
            onClick={scrollToContact}
          >
            {t('footerCta.button')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
