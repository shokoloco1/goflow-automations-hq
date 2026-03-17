import { useEffect, useRef } from "react";
import { ArrowRight, MessageSquare, Database, FileText, Zap } from "lucide-react";

const AutomationShowcase = () => {
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

  const flows = [
    {
      title: "Ventas Automáticas",
      steps: [
        { icon: MessageSquare, text: "Lead llega por WhatsApp" },
        { icon: Zap, text: "IA califica y cotiza" },
        { icon: Database, text: "Datos al CRM / Excel" },
        { icon: FileText, text: "Factura generada" },
      ]
    },
    {
      title: "Gestión de Operaciones",
      steps: [
        { icon: Zap, text: "IA detecta stock bajo" },
        { icon: MessageSquare, text: "Notifica a proveedor" },
        { icon: FileText, text: "Orden de compra lista" },
        { icon: Database, text: "Actualiza inventario" },
      ]
    }
  ];

  return (
    <section id="automatizaciones" ref={ref} className="py-24 md:py-32 px-4 bg-surface/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="mb-4">Lo que podemos <span className="text-primary">automatizar</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desde tareas simples hasta flujos operativos complejos. Así es como se ve la eficiencia real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {flows.map((flow, idx) => (
            <div key={idx} className="scroll-reveal glass-card p-8 rounded-3xl" style={{ transitionDelay: `${idx * 0.2}s` }}>
              <h3 className="text-xl mb-8 font-display font-bold">{flow.title}</h3>
              <div className="relative space-y-8">
                {flow.steps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-6 relative">
                    {sIdx < flow.steps.length - 1 && (
                      <div className="absolute left-6 top-10 bottom-[-32px] w-px bg-gradient-to-b from-primary/50 to-transparent" />
                    )}
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground/90 font-medium">{step.text}</p>
                    {sIdx < flow.steps.length - 1 && (
                      <ArrowRight className="absolute right-0 w-4 h-4 text-muted-foreground/30 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 scroll-reveal text-center">
            <div className="inline-block glass-card p-2 rounded-2xl border border-primary/10">
                <div className="bg-[#1a1a2e] rounded-xl p-6 md:px-12 md:py-8 border border-white/5">
                    <p className="text-foreground/80 mb-4">¿Tienes un proceso diferente? Lo construimos a medida.</p>
                    <a href="https://calendly.com/davids-goflowaai/30min" target="_blank" className="text-primary font-bold hover:underline cursor-none">
                        Habla con un consultor →
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationShowcase;
