import { Heart, Dumbbell, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const IndustriesFocused = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { language } = useLanguage();
  
  const industries = [
    {
      icon: Heart,
      titleEn: "Healthcare & Wellness",
      titleEs: "Salud y Bienestar",
      descEn: "Clinics, physiotherapy, chiropractic, dental, psychology, nutrition, allied health",
      descEs: "Clínicas, fisioterapia, quiropráctica, dental, psicología, nutrición, salud aliada",
      whyEn: "High no-show rates, missed calls cost revenue, compliance required",
      whyEs: "Altas tasas de ausencias, llamadas perdidas cuestan ingresos, cumplimiento requerido"
    },
    {
      icon: Dumbbell,
      titleEn: "Fitness & Wellness",
      titleEs: "Fitness y Bienestar",
      descEn: "Gyms, yoga studios, personal training, wellness centers, spa & beauty services",
      descEs: "Gimnasios, estudios de yoga, entrenamiento personal, centros de bienestar, spa y belleza",
      whyEn: "Class bookings, membership follow-ups, retention challenges",
      whyEs: "Reservas de clases, seguimientos de membresías, desafíos de retención"
    },
    {
      icon: Briefcase,
      titleEn: "Professional Services",
      titleEs: "Servicios Profesionales",
      descEn: "Consultants, coaches, legal, accounting, real estate, mortgage brokers",
      descEs: "Consultores, coaches, legal, contabilidad, bienes raíces, corredores hipotecarios",
      whyEn: "Long sales cycles, high-value clients, need for instant follow-up",
      whyEs: "Ciclos de ventas largos, clientes de alto valor, necesidad de seguimiento instantáneo"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">
            {language === 'en' ? 'Industries We Serve' : 'Industrias Que Servimos'}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            {language === 'en' 
              ? 'We specialize in service businesses that rely on appointments, bookings, and fast response times.'
              : 'Nos especializamos en negocios de servicios que dependen de citas, reservas y tiempos de respuesta rápidos.'}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className={`group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-700 border border-border/50 hover:border-primary/30 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {language === 'en' ? industry.titleEn : industry.titleEs}
                </h3>
                <p className="text-muted-foreground text-sm font-light mb-4">
                  {language === 'en' ? industry.descEn : industry.descEs}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground/80 font-light">
                    <span className="text-primary font-medium">
                      {language === 'en' ? 'Why it fits: ' : 'Por qué encaja: '}
                    </span>
                    {language === 'en' ? industry.whyEn : industry.whyEs}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground font-light">
            {language === 'en' 
              ? "Not sure if you fit? If you take appointments, have inquiries to respond to, or struggle with follow-up—we can help."
              : '¿No estás seguro si encajas? Si tomas citas, tienes consultas que responder, o luchas con el seguimiento—podemos ayudar.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesFocused;
