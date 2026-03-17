import { useEffect, useRef } from "react";

const industries = [
  {
    emoji: "📣",
    name: "Agencias de marketing",
    desc: "Propuestas que se envían y nadie da seguimiento. Leads que se enfrían porque el follow-up es manual. Reportes que toman medio día armar.",
  },
  {
    emoji: "👔",
    name: "Consultoras y servicios profesionales",
    desc: "Cotizaciones por email que se pierden en el inbox. Facturación que depende de una persona. Onboarding de clientes que toma días en vez de horas.",
  },
  {
    emoji: "🏪",
    name: "Comercio y distribución",
    desc: "Pedidos que llegan por WhatsApp y se pierden entre chats. Cuadrar inventario en Excel al final del día. Facturas que salen tarde porque son manuales.",
  },
  {
    emoji: "🏥",
    name: "Salud privada",
    desc: "Recepción dedicando horas a confirmar citas por WhatsApp. Historiales que se buscan a mano. Seguimiento a pacientes que nadie hace.",
  },
  {
    emoji: "🔧",
    name: "Construcción y oficios (AU)",
    desc: "Cotizaciones por teléfono que toman 20 min cada una. Facturas que salen días después. Trabajos que se pierden porque nadie hizo follow-up.",
  },
];

const IndustriesSection = () => {
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
    <section id="industrias" ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-4 scroll-reveal">
          Trabajamos con empresas <span className="text-primary">como la tuya</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 scroll-reveal">
          Si tu equipo pierde tiempo en tareas repetitivas, podemos ayudar.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="scroll-reveal bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:border-primary/40"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="text-3xl mb-4 block">{ind.emoji}</span>
              <h3 className="text-base font-display font-semibold text-foreground mb-2">{ind.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
