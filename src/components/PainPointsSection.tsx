import { useEffect, useRef } from "react";

const painPoints = [
  "Tu sitio web se ve mal en celular",
  "Respondes WhatsApp manualmente todo el día",
  "No sabes exactamente cuánto ganas ni pierdes",
  "Consigues clientes solo por referidos",
  "Tu marca no se ve profesional",
  "Tomas decisiones financieras a intuición",
];

const PainPointsSection = () => {
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
    <section ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-16 scroll-reveal">
          ¿Cómo sabemos que tu negocio{" "}
          <span className="text-secondary">necesita ayuda</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="scroll-reveal glass-card rounded-2xl p-6 flex items-start gap-3 transition-all duration-300 hover:border-secondary/60"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="text-xl mt-0.5">🔴</span>
              <p className="text-sm text-foreground/90 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <p className="scroll-reveal text-center text-muted-foreground mt-12 text-lg max-w-2xl mx-auto">
          Si te identificas con alguno de estos puntos, tenemos la solución exacta para ti.
        </p>
      </div>
    </section>
  );
};

export default PainPointsSection;
