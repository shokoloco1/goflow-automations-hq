import { useEffect, useRef } from "react";
import { Clock, Search, Smartphone } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const problems = [
  {
    icon: Clock,
    title: "Carga demasiado lento",
    stat: 53,
    statSuffix: "%",
    description: "de usuarios abandona si tarda +3 segundos",
    orange: true,
  },
  {
    icon: Search,
    title: "Google no te encuentra",
    stat: 75,
    statSuffix: "%",
    description: "de clics van al primer resultado",
    orange: false,
  },
  {
    icon: Smartphone,
    title: "Roto en celular",
    stat: 80,
    statSuffix: "%",
    description: "de tus visitantes navegan desde el teléfono",
    orange: true,
  },
];

const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll(".scroll-reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-16 scroll-reveal">
          Tu sitio actual está{" "}
          <span className="text-secondary">costándote clientes</span>{" "}
          ahora mismo.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`scroll-reveal rounded-2xl p-8 ${p.orange ? "glass-card-orange" : "glass-card"}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <p.icon className={`w-10 h-10 mb-6 ${p.orange ? "text-secondary" : "text-primary"}`} />
              <h3 className="mb-4">{p.title}</h3>
              <div className={`text-5xl font-display font-bold mb-2 ${p.orange ? "text-secondary" : "text-primary"}`}>
                <AnimatedCounter end={p.stat} suffix={p.statSuffix} />
              </div>
              <p className="text-muted-foreground text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
