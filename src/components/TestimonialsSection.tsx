import { Quote, ArrowRight, X, Check } from "lucide-react";

const testimonials = [
  {
    quote:
      "En 72 horas teníamos la landing page funcionando con WhatsApp integrado. El primer mes recuperamos la inversión con 3 clientes nuevos.",
    name: "Rodrigo M.",
    business: "Distribuidora, Quito",
    service: "Landing Page Pro",
    initials: "RM",
    ring: "ring-primary/60",
    bg: "bg-primary/20",
  },
  {
    quote:
      "Teníamos una web vieja y lenta que espantaba clientes. GoFlow la reemplazó en 5 días. Ahora carga en 1.2 segundos y el tráfico mobile subió 40%.",
    name: "Diana C.",
    business: "Clínica estética, Guayaquil",
    service: "Sitio Web Completo",
    initials: "DC",
    ring: "ring-primary/40",
    bg: "bg-primary/10",
  },
  {
    quote:
      "El manual de marca nos dio identidad. Antes teníamos logo en 4 versiones distintas. Ahora somos una marca real con guía de uso para todo el equipo.",
    name: "Pablo V.",
    business: "Constructora, Cuenca",
    service: "Manual de Marca",
    initials: "PV",
    ring: "ring-primary/60",
    bg: "bg-primary/20",
  },
];

const antes = [
  "Lenta (>5s de carga)",
  "Sin versión mobile",
  "Sin SEO",
  "Sin formularios",
  "Sin analytics",
];

const despues = [
  "Velocidad <2s",
  "100% responsive",
  "Formularios activos",
  "Integrado con WhatsApp",
  "Analytics en tiempo real",
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 px-4 relative overflow-hidden">
    <div className="container mx-auto max-w-6xl">
      {/* Header */}
      <div className="text-center mb-14 space-y-3">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-muted-foreground text-lg">
          Resultados reales de negocios reales
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {testimonials.map((t) => (
          <div
            key={t.initials}
            className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
          >
            <Quote className="w-5 h-5 text-primary/40" />
            <p className="text-foreground/90 text-sm leading-relaxed flex-1">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-border/50">
              <div
                className={`w-10 h-10 rounded-full ${t.bg} ring-2 ${t.ring} flex items-center justify-center text-xs font-bold text-primary`}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </div>
            <span className="inline-block self-start text-[10px] px-2 py-0.5 rounded-full border border-primary/30 text-primary">
              {t.service}
            </span>
          </div>
        ))}
      </div>

      {/* Before / After */}
      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
          Antes vs Después
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Antes */}
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
            <p className="text-sm font-semibold text-destructive mb-4 uppercase tracking-wider">
              Antes
            </p>
            <ul className="space-y-3">
              {antes.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-destructive/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Después */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Después
            </p>
            <ul className="space-y-3">
              {despues.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground/90">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/593992189290?text=Hola%2C%20quiero%20un%20diagn%C3%B3stico%20gratuito%20de%20mi%20sitio%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-sm hover:glow-green transition-all cursor-none"
          >
            ¿Tu sitio está en la columna ANTES? Diagnóstico gratuito en 24h
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
