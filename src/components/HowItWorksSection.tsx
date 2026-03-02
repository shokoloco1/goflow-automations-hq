import { useEffect, useRef } from "react";
import { MessageCircle, Cpu, Eye, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Nos escribes por WhatsApp",
    desc: "15 minutos para contarnos tu negocio. Sin reuniones largas ni formularios.",
  },
  {
    icon: Cpu,
    num: "02",
    title: "Nuestra IA diseña tu sitio",
    desc: "Construimos todo en 72 horas. Tú no haces absolutamente nada.",
  },
  {
    icon: Eye,
    num: "03",
    title: "Revisas y apruebas",
    desc: "Te mostramos el resultado. Ajustamos lo que necesites.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Publicamos y listo",
    desc: "Tu sitio en vivo, funcionando, atrayendo clientes.",
  },
];

const HowItWorksSection = () => {
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
    <section id="como-funciona" ref={ref} className="py-24 md:py-32 px-4 bg-surface">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-16 scroll-reveal">
          Cómo <span className="text-primary">funciona</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="scroll-reveal text-center md:text-left"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass-card mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-primary font-mono text-xs mb-2">{s.num}</p>
              <h3 className="text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block h-px bg-gradient-to-r from-primary/30 to-transparent mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
