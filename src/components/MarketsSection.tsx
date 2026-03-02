import { useEffect, useRef } from "react";

const MarketsSection = () => {
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
    <section ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-16 scroll-reveal">
          Dos mercados, <span className="text-primary">un estándar</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Ecuador */}
          <div className="scroll-reveal glass-card rounded-2xl p-8 md:p-10">
            <p className="text-4xl mb-4">🇪🇨</p>
            <h3 className="mb-4">Ecuador</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Para restaurantes, consultorios, tiendas, abogados, constructoras y cualquier negocio que quiera presencia digital profesional.
            </p>
            <p className="text-3xl font-display font-bold text-primary font-mono">$300 USD</p>
          </div>

          {/* Australia */}
          <div className="scroll-reveal glass-card rounded-2xl p-8 md:p-10" style={{ transitionDelay: "0.15s" }}>
            <p className="text-4xl mb-4">🇦🇺</p>
            <h3 className="mb-4">Australia</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              For small businesses paying $5,000–$25,000 AUD for the same result. Our AI delivers agency-quality work at a fraction of the cost.
            </p>
            <p className="text-3xl font-display font-bold text-primary font-mono">$300 USD <span className="text-lg text-muted-foreground">· ~$480 AUD</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;
