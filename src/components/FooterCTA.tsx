import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterCTA = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4">{t('footerCta.title')}</h2>
          <p className="text-xl text-muted-foreground mb-8 font-light">
            {t('footerCta.subtitle')}
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
