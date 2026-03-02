import { useEffect, useRef } from "react";

const services = [
  {
    emoji: "🌐",
    badge: "ESENCIAL",
    badgeClass: "bg-muted text-muted-foreground",
    title: "Tu presencia digital en 72 horas",
    name: "Sitio Web Profesional",
    desc: "Diseñamos tu sitio web completo, optimizado para celulares y listo para convertir visitantes en clientes. Sin que tengas que preocuparte por nada técnico.",
    cta: "Quiero mi sitio web",
    msg: "Hola, me interesa el servicio de Sitio Web Profesional",
  },
  {
    emoji: "🤖",
    badge: "MÁS POPULAR",
    badgeClass: "bg-primary text-primary-foreground",
    title: "Atención al cliente 24/7 sin contratar a nadie",
    name: "Empleado Digital de WhatsApp",
    desc: "Un agente de inteligencia artificial atiende tus mensajes de WhatsApp a cualquier hora, responde preguntas, agenda citas y califica prospectos. Trabaja mientras tú duermes.",
    cta: "Quiero mi agente",
    msg: "Hola, me interesa el servicio de Empleado Digital de WhatsApp",
  },
  {
    emoji: "📊",
    badge: "NUEVO",
    badgeClass: "bg-secondary text-secondary-foreground",
    title: "Tu contador inteligente que nunca duerme",
    name: "CFO Virtual con IA",
    desc: "Analiza tus finanzas cada semana, genera alertas de flujo de caja, proyecciones a 90 días y recomendaciones concretas para tomar mejores decisiones. Sin hojas de Excel complicadas.",
    cta: "Quiero mis análisis",
    msg: "Hola, me interesa el servicio de CFO Virtual con IA",
  },
  {
    emoji: "🎯",
    badge: "NUEVO",
    badgeClass: "bg-secondary text-secondary-foreground",
    title: "Nuevos clientes en piloto automático",
    name: "Motor de Ventas Automático",
    desc: "Sistema de prospección que identifica negocios que necesitan tus servicios, analiza su situación y les envía mensajes personalizados automáticamente. Tu equipo de ventas que nunca descansa.",
    cta: "Quiero más clientes",
    msg: "Hola, me interesa el servicio de Motor de Ventas Automático",
  },
  {
    emoji: "🎨",
    badge: "ESENCIAL",
    badgeClass: "bg-muted text-muted-foreground",
    title: "Identidad de marca completa en 3 días",
    name: "Marca en 72 Horas",
    desc: "Logo, colores, tipografía, manual de marca y 30 plantillas para redes sociales. Todo diseñado con inteligencia artificial para que tu negocio se vea profesional desde el primer día.",
    cta: "Quiero mi marca",
    msg: "Hola, me interesa el servicio de Marca en 72 Horas",
  },
  {
    emoji: "🔍",
    badge: "EMPIEZA AQUÍ",
    badgeClass: "border border-primary/40 text-primary bg-transparent",
    title: "Descubre qué está frenando tu negocio",
    name: "Diagnóstico Empresarial con IA",
    desc: "Análisis completo de tu empresa en 48 horas. Revisamos finanzas, marketing, operaciones y presencia digital. Recibes un plan de acción con las 10 mejoras más importantes priorizadas por impacto.",
    cta: "Quiero mi diagnóstico",
    msg: "Hola, me interesa el servicio de Diagnóstico Empresarial con IA",
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
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center mb-4 scroll-reveal">
          Soluciones que transforman{" "}
          <span className="text-primary">tu negocio</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto scroll-reveal">
          Tecnología de punta, resultados desde el primer mes
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="scroll-reveal glass-card rounded-2xl p-8 relative transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,229,160,0.3)]"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span
                className={`absolute top-4 right-4 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full ${s.badgeClass}`}
              >
                {s.badge}
              </span>

              <span className="text-4xl mb-4 block">{s.emoji}</span>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                {s.name}
              </p>
              <h3 className="text-lg md:text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {s.desc}
              </p>

              <a
                href={`https://wa.me/593992189290?text=${encodeURIComponent(s.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-3 rounded-xl font-medium text-sm bg-primary text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(0,229,160,0.4)] cursor-none"
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
