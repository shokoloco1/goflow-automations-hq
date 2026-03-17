import { useEffect, useRef } from "react";
import { MessageSquare, FileSpreadsheet, Phone, FileText, ArrowRight, Bot, BarChart3, Zap } from "lucide-react";

const beforeSteps = [
  { icon: Phone, label: "Llamada entra", color: "text-red-400" },
  { icon: MessageSquare, label: "WhatsApp manual", color: "text-red-400" },
  { icon: FileSpreadsheet, label: "Copiar a Excel", color: "text-red-400" },
  { icon: FileText, label: "Factura a mano", color: "text-red-400" },
];

const afterSteps = [
  { icon: MessageSquare, label: "Lead entra", color: "text-primary" },
  { icon: Bot, label: "IA responde", color: "text-primary" },
  { icon: Zap, label: "Cotiza automático", color: "text-primary" },
  { icon: BarChart3, label: "Factura + reporte", color: "text-primary" },
];

const WorkflowVisualization = () => {
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
        <h2 className="text-center mb-4 scroll-reveal">
          De manual a <span className="gradient-text">automático</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 scroll-reveal max-w-xl mx-auto">
          Así se ve tu operación antes y después de GoFlow AI.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* ANTES */}
          <div className="scroll-reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-mono uppercase tracking-wider text-red-400 bg-red-400/10 px-3 py-1 rounded-full border border-red-400/20">
                Antes — Manual
              </span>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-0">
              {beforeSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i}>
                    <div className="flex items-center gap-4 py-4">
                      <div className="w-10 h-10 rounded-lg bg-red-400/10 border border-red-400/20 flex items-center justify-center shrink-0">
                        <Icon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      <span className="text-foreground text-sm font-medium">{step.label}</span>
                      <span className="text-muted-foreground text-xs ml-auto">⏱ 15-30 min</span>
                    </div>
                    {i < beforeSteps.length - 1 && (
                      <div className="flex items-center gap-4 py-1">
                        <div className="w-10 flex justify-center">
                          <div className="w-px h-4 bg-red-400/30" />
                        </div>
                        <span className="text-red-400/50 text-[10px] font-mono">manual</span>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 border-t border-border text-center">
                <span className="text-red-400 text-sm font-medium">~2-3 horas por día en admin</span>
              </div>
            </div>
          </div>

          {/* DESPUÉS */}
          <div className="scroll-reveal" style={{ transitionDelay: "0.25s" }}>
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-mono uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Después — Con GoFlow AI
              </span>
            </div>
            <div className="gradient-border-card p-6 md:p-8 space-y-0">
              {afterSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i}>
                    <div className="flex items-center gap-4 py-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Icon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      <span className="text-foreground text-sm font-medium">{step.label}</span>
                      <span className="text-primary text-xs ml-auto">⚡ Automático</span>
                    </div>
                    {i < afterSteps.length - 1 && (
                      <div className="flex items-center gap-4 py-1">
                        <div className="w-10 flex justify-center">
                          <div className="w-px h-4 bg-primary/40" />
                        </div>
                        <span className="text-primary/50 text-[10px] font-mono">automático</span>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 border-t border-border text-center">
                <span className="text-primary text-sm font-medium">~0 horas — corre solo, 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowVisualization;
