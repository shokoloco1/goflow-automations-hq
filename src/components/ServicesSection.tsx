import { useEffect, useRef } from "react";
import { Code, TrendingUp, Settings, Brain } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Sitio Web Profesional",
    subtitle: "Entrega en 72 horas",
    badge: "MÁS POPULAR",
    featured: true,
    items: ["5 páginas completas", "Optimizado para celular", "SEO básico incluido", "WhatsApp integrado", "Hosting no incluido"],
    cta: "Empezar ahora →",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento en Google",
    subtitle: "SEO automático con IA",
    items: ["Contenido semanal con IA", "Auditoría técnica continua", "Reporte mensual"],
    cta: "Consultar →",
  },
  {
    icon: Settings,
    title: "Automatiza tu negocio",
    subtitle: "Automatización inteligente",
    items: ["WhatsApp automático", "Facturación electrónica", "Conexión con CRM"],
    cta: "Consultar →",
  },
  {
    icon: Brain,
    title: "Estrategia con IA",
    subtitle: "Consultoría inteligente",
    items: ["Análisis financiero", "Plan de marketing", "Dashboard de métricas"],
    cta: "Consultar →",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    el.querySelectorAll(".scroll-reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="servicios" ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4 scroll-reveal">
          Todo lo que necesita <span className="text-primary">tu negocio</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 scroll-reveal">
          Desde tu primera página web hasta automatización completa.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`scroll-reveal rounded-2xl p-8 relative ${s.featured ? "glass-card border-primary/30 glow-green-soft" : "glass-card"}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {s.badge && (
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {s.badge}
                </span>
              )}
              <s.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{s.subtitle}</p>
              <ul className="space-y-2 mb-8">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-primary text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/593992189290"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full text-center py-3 rounded-xl font-medium text-sm transition-all cursor-none ${
                  s.featured
                    ? "bg-primary text-primary-foreground hover:glow-green"
                    : "border border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
