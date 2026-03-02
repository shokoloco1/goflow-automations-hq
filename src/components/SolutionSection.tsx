import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const points = [
  "Diseño moderno mobile-first",
  "Velocidad optimizada (menos de 2 segundos)",
  "SEO básico configurado",
  "Formulario de contacto funcional",
  "Botón de WhatsApp integrado",
  "Dominio conectado",
  "Sin contratos ni sorpresas",
];

const SolutionSection = () => {
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
      { threshold: 0.1 }
    );
    el.querySelectorAll(".scroll-reveal, .check-animate").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="mb-8 scroll-reveal">
              Nosotros lo resolvemos todo.
              <br />
              <span className="text-primary">En 72 horas. Por $300.</span>
            </h2>

            <div className="space-y-4">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="check-animate flex items-start gap-3"
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/90">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Before/After visual */}
          <div className="scroll-reveal">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-6 md:p-8 border-r border-border/50">
                  <p className="text-xs text-secondary font-mono uppercase tracking-wider mb-4">Antes</p>
                  <div className="space-y-3">
                    <div className="h-3 bg-secondary/10 rounded w-full" />
                    <div className="h-3 bg-secondary/10 rounded w-3/4" />
                    <div className="h-12 bg-secondary/5 rounded mt-4" />
                    <div className="h-3 bg-secondary/10 rounded w-1/2" />
                    <div className="h-3 bg-secondary/10 rounded w-2/3" />
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs text-secondary">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Lento · Sin SEO · Roto
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs text-primary font-mono uppercase tracking-wider mb-4">Después</p>
                  <div className="space-y-3">
                    <div className="h-3 bg-primary/20 rounded w-full" />
                    <div className="h-3 bg-primary/20 rounded w-3/4" />
                    <div className="h-12 bg-primary/10 rounded mt-4 flex items-center justify-center">
                      <div className="w-16 h-5 bg-primary/30 rounded" />
                    </div>
                    <div className="h-3 bg-primary/20 rounded w-1/2" />
                    <div className="h-3 bg-primary/20 rounded w-2/3" />
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Rápido · SEO · Mobile
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
