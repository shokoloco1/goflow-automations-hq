import { useEffect, useRef } from "react";
import { MessageCircle, PenTool, Rocket, BarChart3, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    time: "Hoy",
    title: "Nos contactas",
    desc: "WhatsApp o formulario. Cuéntanos tu negocio en 5 minutos. Respuesta en menos de 2 horas.",
  },
  {
    icon: PenTool,
    time: "Día 1",
    title: "Diseñamos",
    desc: "Presentamos el diseño inicial. Revisiones incluidas hasta que esté perfecto. Sin costos extra.",
  },
  {
    icon: Rocket,
    time: "72h",
    title: "Entregamos",
    desc: "Sitio publicado, funcionando, con tu dominio. Te enseñamos a usar el panel en 30 minutos.",
  },
  {
    icon: BarChart3,
    time: "Semana 2+",
    title: "Seguimos contigo",
    desc: "1 mes de soporte incluido. Cambios menores sin costo. Eres cliente para siempre.",
  },
];

const HowItWorksSection = () => {
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
    <section id="como-funciona" ref={ref} className="py-24 md:py-32 px-4 bg-surface">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal space-y-3">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            De idea a sitio web en <span className="text-primary">72 horas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Sin reuniones interminables. Sin sorpresas. Entrega garantizada.
          </p>
        </div>

        {/* Timeline: horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden md:block absolute top-7 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" />

          <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
            {steps.map((s, i) => (
              <div
                key={i}
                className="scroll-reveal relative flex md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-0"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Vertical connecting line — mobile only */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[18px] top-[44px] bottom-[-20px] w-px bg-gradient-to-b from-primary/40 to-primary/10 md:hidden" />
                )}

                {/* Numbered circle */}
                <div className="relative shrink-0">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                    {i + 1}
                  </div>
                </div>

                <div className="md:mt-5">
                  {/* Time badge */}
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">
                    {s.time}
                  </span>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl glass-card mb-3 mx-auto md:flex hidden">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="text-base font-display font-semibold text-foreground mb-1">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 scroll-reveal">
          <div className="rounded-xl border-l-4 border-l-primary bg-card/80 border border-border px-6 py-5 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-foreground font-medium text-sm md:text-base">
              Garantía de entrega: si no entregamos en el plazo acordado, el segundo pago es 0.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
