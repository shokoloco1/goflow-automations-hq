import { TrendingUp, Clock, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const EarlyResults = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { language } = useLanguage();
  
  const results = [
    {
      icon: Clock,
      metric: language === 'en' ? '23 hours/month saved' : '23 horas/mes ahorradas',
      business: language === 'en' ? 'Healthcare Practice, Brisbane' : 'Práctica de Salud, Brisbane',
      quote: language === 'en' 
        ? '"It\'s like having an assistant who never sleeps"' 
        : '"Es como tener un asistente que nunca duerme"',
    },
    {
      icon: TrendingUp,
      metric: language === 'en' ? '34 new bookings in first month' : '34 nuevas reservas en primer mes',
      business: language === 'en' ? 'Fitness Studio, Sydney' : 'Estudio de Fitness, Sydney',
      quote: language === 'en' 
        ? '"We\'re capturing leads we used to lose"' 
        : '"Estamos capturando prospectos que solíamos perder"',
    },
    {
      icon: DollarSign,
      metric: language === 'en' ? 'No-show rate: 18% → 7%' : 'Tasa de ausencias: 18% → 7%',
      business: language === 'en' ? 'Wellness Center, Melbourne' : 'Centro de Bienestar, Melbourne',
      quote: language === 'en' 
        ? '"ROI was immediate"' 
        : '"El ROI fue inmediato"',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">
            {language === 'en' ? 'Early Results from Beta Partners' : 'Resultados Tempranos de Socios Beta'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            {language === 'en' 
              ? "We're working with select businesses to perfect our automation systems. Here's what they're seeing:"
              : 'Estamos trabajando con negocios selectos para perfeccionar nuestros sistemas de automatización. Esto es lo que están viendo:'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div 
                key={index}
                className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-700 border border-border/50 hover:border-primary/30 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="mb-4">
                  <p className="text-2xl font-semibold text-foreground mb-2">{result.metric}</p>
                  <p className="text-sm text-muted-foreground font-light">{result.business}</p>
                </div>
                
                <p className="text-foreground/80 font-light italic">
                  {result.quote}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            {language === 'en' 
              ? "Want to be part of our success stories?"
              : '¿Quieres ser parte de nuestras historias de éxito?'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyResults;
