import { useEffect, useRef } from "react";
import { Check, Clock, ShieldCheck, DollarSign } from "lucide-react";

const features = [
  "Captura automática de consultas (WhatsApp / formulario web)",
  "Generación de cotización personalizada en menos de 2 minutos",
  "Follow-up automático si no responde en 24h",
  "Generación de factura al confirmar el pedido",
  "Reporte diario de ventas sin abrir Excel",
];

const ServicePricingSection = () => {
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
    <section id="servicio" ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 scroll-reveal space-y-3">
          <h2 className="gradient-text inline-block">Quote-to-Cash Automation</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            El flujo completo: desde que entra un lead hasta que se genera la factura.
          </p>
        </div>

        <div className="scroll-reveal gradient-border-card p-8 md:p-10" style={{ transitionDelay: "0.2s" }}>
          {/* Features */}
          <div className="space-y-4 mb-8">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              Qué incluye
            </p>
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground text-sm md:text-base">{f}</span>
              </div>
            ))}
          </div>

          {/* Pricing details */}
          <div className="border-t border-border pt-8 grid sm:grid-cols-3 gap-6 text-center mb-8">
            <div>
              <DollarSign className="w-5 h-5 text-primary mx-auto mb-1" />
              <span className="block text-3xl font-display font-bold text-foreground">$400</span>
              <span className="text-muted-foreground text-xs">USD · pago único</span>
            </div>
            <div>
              <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
              <span className="block text-3xl font-display font-bold text-foreground">72h</span>
              <span className="text-muted-foreground text-xs">entrega garantizada</span>
            </div>
            <div>
              <ShieldCheck className="w-5 h-5 text-primary mx-auto mb-1" />
              <span className="block text-3xl font-display font-bold text-foreground">7 días</span>
              <span className="text-muted-foreground text-xs">o devolución completa</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#cta-final"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-2xl text-base font-bold pulse-glow transition-all cursor-none"
            >
              Quiero esto para mi empresa
            </a>
          </div>

          {/* Australia note */}
          <p className="text-center text-muted-foreground text-xs mt-6">
            También disponible para Brisbane, Australia: $700 AUD
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicePricingSection;
