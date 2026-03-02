import { useEffect, useRef } from "react";

const industries = [
  { emoji: "🏥", name: "Clínicas y médicos" },
  { emoji: "🏠", name: "Inmobiliarias" },
  { emoji: "⚖️", name: "Abogados y estudios jurídicos" },
  { emoji: "🍽️", name: "Restaurantes" },
  { emoji: "🎓", name: "Academias y escuelas" },
  { emoji: "💇", name: "Salud y belleza" },
  { emoji: "🔧", name: "Constructoras" },
  { emoji: "🛍️", name: "Tiendas y comercios" },
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
    <section ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-16 scroll-reveal">
          Trabajamos con negocios{" "}
          <span className="text-primary">como el tuyo</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="scroll-reveal glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(0,229,160,0.2)]"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="text-4xl mb-3 block">{ind.emoji}</span>
              <p className="text-sm font-medium text-foreground/90">{ind.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
