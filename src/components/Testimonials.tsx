import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  textKey: string;
  serviceType: 'commercial' | 'residential';
}

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  
  const testimonials: Testimonial[] = [
    {
      name: "Dr. Sarah Mitchell",
      role: t('testimonials.testimonial1.role'),
      company: "Dental Care Brisbane",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      rating: 5,
      textKey: 'testimonials.testimonial1.text',
      serviceType: 'commercial'
    },
    {
      name: "Michael Chen",
      role: t('testimonials.testimonial2.role'),
      company: "Elite Fitness Studio",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      rating: 5,
      textKey: 'testimonials.testimonial2.text',
      serviceType: 'commercial'
    },
    {
      name: "Emma Rodriguez",
      role: t('testimonials.testimonial3.role'),
      company: "Legal Partners LLC",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 5,
      textKey: 'testimonials.testimonial3.text',
      serviceType: 'commercial'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">{t('testimonials.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-light">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-700 border border-border/50 hover:border-primary/30 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-foreground/80 font-light leading-relaxed mb-6">
                "{t(testimonial.textKey)}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground font-light">{testimonial.role}</p>
                  <p className="text-sm text-primary font-light">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Badge */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20">
            <Star className="w-5 h-5 text-secondary fill-secondary" />
            <span className="text-foreground font-medium">{t('testimonials.rating')}</span>
            <span className="text-muted-foreground font-light">• {t('testimonials.reviews')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
