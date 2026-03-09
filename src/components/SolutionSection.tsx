import { useEffect, useRef } from "react";
import { Check, X as XIcon } from "lucide-react";

const points = [
  "Diseño moderno mobile-first",
  "Velocidad optimizada (menos de 2 segundos)",
  "SEO básico configurado",
  "Formulario de contacto funcional",
  "Botón de WhatsApp integrado",
  "Dominio conectado",
  "Sin contratos ni sorpresas",
];

const antes = [
  "Carga lenta (>5 segundos)",
  "No se ve bien en celular",
  "Sin SEO — invisible en Google",
  "Sin formulario de contacto",
  "Sin analytics ni métricas",
];

const despues = [
  "Velocidad <2 segundos",
  "100% responsive en todo dispositivo",
  "SEO optimizado desde el inicio",
  "Formularios + WhatsApp integrado",
  "Analytics en tiempo real",
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
              <span className="text-primary">En 72 horas. Sin complicaciones.</span>
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

          {/* Right: Before/After comparison */}
          <div className="scroll-reveal">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2">
                {/* Antes */}
                <div className="p-6 md:p-8 border-r border-border/50">
                  <p className="text-xs text-secondary font-mono uppercase tracking-wider mb-5 font-semibold">
                    Antes
                  </p>
                  <ul className="space-y-3">
                    {antes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XIcon className="w-4 h-4 text-secondary/60 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-2 text-xs text-secondary">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Lento · Sin SEO · Roto
                  </div>
                </div>

                {/* Después */}
                <div className="p-6 md:p-8">
                  <p className="text-xs text-primary font-mono uppercase tracking-wider mb-5 font-semibold">
                    Después
                  </p>
                  <ul className="space-y-3">
                    {despues.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
