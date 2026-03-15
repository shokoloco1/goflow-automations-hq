import { useEffect, useRef } from "react";

const industries = [
  {
    emoji: "🏪",
    name: "Comercio mayorista y distribución",
    desc: "Distribuidoras y mayoristas que gestionan pedidos por WhatsApp y cierran el día cuadrando todo en Excel.",
  },
  {
    emoji: "🏭",
    name: "Manufactura y producción",
    desc: "Plantas que coordinan pedidos, producción y entregas con hojas de cálculo que 'solo entiende una persona'.",
  },
  {
    emoji: "👔",
    name: "Servicios profesionales",
    desc: "Consultoras, agencias y despachos que pierden clientes por falta de seguimiento automático a propuestas enviadas.",
  },
  {
    emoji: "🏥",
    name: "Salud privada",
    desc: "Clínicas y consultorios donde la recepción pasa horas confirmando citas por WhatsApp en lugar de atender pacientes.",
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
        <h2 className="text-center mb-16 scroll-reveal">
          Trabajamos con empresas <span className="text-primary">como la tuya</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="scroll-reveal bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:border-primary/40"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="text-4xl mb-4 block">{ind.emoji}</span>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{ind.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
