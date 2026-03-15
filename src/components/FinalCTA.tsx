import { useEffect, useRef } from "react";

const FinalCTA = () => {
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
    <section
      id="cta-final"
      ref={ref}
      className="py-24 md:py-32 px-4"
      style={{ background: "linear-gradient(180deg, hsl(0 0% 4%) 0%, hsl(262 100% 8%) 100%)" }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 scroll-reveal space-y-4">
          <h2>
            ¿Cuántas horas pierde tu equipo{" "}
            <span className="text-primary">esta semana?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            En 20 minutos te digo exactamente qué puedes automatizar y cuánto tiempo recuperas. Sin compromiso.
          </p>
        </div>

        {/* Calendly embed */}
        <div className="scroll-reveal rounded-2xl overflow-hidden bg-card border border-border" style={{ transitionDelay: "0.2s" }}>
          <iframe
            src="https://calendly.com/davids-goflowaai/30min"
            width="100%"
            height="660"
            frameBorder="0"
            title="Agendar diagnóstico gratuito"
            className="w-full"
          />
        </div>

        {/* Contact info */}
        <div className="scroll-reveal text-center mt-10 space-y-2 text-sm text-muted-foreground" style={{ transitionDelay: "0.3s" }}>
          <p>📍 David Shaw · GoFlow AI · Brisbane, Australia</p>
          <p>🇪🇨 Atiendo Ecuador: 5pm–7pm hora Ecuador</p>
          <p>🇦🇺 Atiendo Australia: 9am–5pm AEST</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
