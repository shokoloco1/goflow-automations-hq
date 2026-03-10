import { useEffect, useRef } from "react";
import { Globe, Bot, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    badge: "ESENCIAL",
    badgeClass: "bg-muted text-muted-foreground",
    name: "Web Growth",
    title: "Tu presencia digital profesional en 72 horas",
    desc: "Sitio web completo, responsive y optimizado para Google. Diseñado para convertir visitantes en clientes desde el primer día.",
    price: "$500 USD",
  },
  {
    icon: Bot,
    badge: "MÁS POPULAR",
    badgeClass: "bg-primary text-primary-foreground",
    name: "AI Business Boost",
    title: "Automatiza tu negocio con inteligencia artificial",
    desc: "Chatbot de WhatsApp, automatización de respuestas y análisis de datos con IA. Tu equipo digital que trabaja 24/7.",
    price: "$1,000 USD",
  },
  {
    icon: Zap,
    badge: "PREMIUM",
    badgeClass: "bg-secondary text-secondary-foreground",
    name: "Automation Essentials",
    title: "Transformación digital completa para escalar",
    desc: "Prospección automática, motor de ventas con IA, reportes financieros y 3 meses de soporte. Todo lo que necesitas para crecer en piloto automático.",
    price: "$2,000 USD",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    el.querySelectorAll(".scroll-reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="servicios" ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-4 scroll-reveal">
          Soluciones que transforman{" "}
          <span className="text-primary">tu negocio</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto scroll-reveal">
          Tecnología de punta, resultados desde el primer mes
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="scroll-reveal glass-card rounded-2xl p-8 relative flex flex-col transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,229,160,0.3)]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span
                  className={`absolute top-4 right-4 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full ${s.badgeClass}`}
                >
                  {s.badge}
                </span>

                <Icon className="w-10 h-10 text-primary mb-4" />
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                  {s.name}
                </p>
                <h3 className="text-lg md:text-xl mb-2">{s.title}</h3>
                <p className="text-2xl font-display font-bold text-primary mb-3">{s.price}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {s.desc}
                </p>

                <a
                  href="https://calendly.com/davids-goflowaai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-3 rounded-xl font-medium text-sm bg-primary text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(0,229,160,0.4)] cursor-none"
                >
                  Agendar llamada →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
