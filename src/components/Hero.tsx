import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/goflow-logo.png";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={logo} 
              alt="GoFlow AI" 
              className="h-28 md:h-36 w-auto mx-auto mb-6 opacity-90 hover:opacity-100 transition-opacity" 
            />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-light text-foreground">{t('hero.badge')}</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="mb-6 font-light tracking-tight">
            {t('hero.headline')}{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-normal">
              GoFlow AI
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            {t('hero.subheadline')}
          </p>
          
          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-foreground/80 font-light">{t('hero.value1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-foreground/80 font-light">{t('hero.value2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-foreground/80 font-light">{t('hero.value3')}</span>
            </div>
          </div>
          
          {/* CTA Buttons - Optimized for conversion */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-base px-10 py-7 shadow-glow hover:shadow-xl transition-smooth group font-medium"
              onClick={scrollToContact}
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base px-10 py-7 border-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-smooth"
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.ctaSecondary')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
