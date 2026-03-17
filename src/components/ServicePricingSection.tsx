import { useEffect, useRef } from "react";
import { Check, Clock, ShieldCheck, Zap, Rocket, Crown } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$400",
    currency: "USD",
    period: "pago único",
    delivery: "72 horas",
    icon: Zap,
    description: "Un flujo automatizado de principio a fin.",
    features: [
      "1 proceso automatizado (cotización, seguimiento o facturación)",
      "Conexión con tus herramientas actuales (WhatsApp, Excel, CRM)",
      "Capacitación para tu equipo",
      "Soporte 7 días post-entrega",
    ],
    guarantee: "Garantía: 7 días o devolución completa",
    cta: "Empezar con Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$800–1,400",
    currency: "USD",
    period: "pago único",
    delivery: "2–3 semanas",
    icon: Rocket,
    description: "Automatización completa de cotización a cobro.",
    features: [
      "2–3 flujos conectados (cotización + seguimiento + facturación)",
      "Dashboard de seguimiento en tiempo real",
      "Follow-up automático a clientes sin respuesta",
      "Reportes semanales automáticos",
      "Soporte 14 días post-entrega",
    ],
    guarantee: null,
    cta: "Escalar con Growth",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "$1,500–3,000+",
    currency: "USD",
    period: "según alcance",
    delivery: "4–8 semanas",
    icon: Crown,
    description: "Transformación operativa completa con IA.",
    features: [
      "Automatización de operaciones completas",
      "Chatbot IA para atención 24/7",
      "Integración con sistemas existentes (ERP, CRM, contabilidad)",
      "Captura y calificación automática de leads",
      "Soporte continuo + optimización mensual",
    ],
    guarantee: null,
    cta: "Consultar proyecto Custom",
    highlighted: false,
  },
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
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 scroll-reveal space-y-3">
          <h2>
            Un plan para cada <span className="gradient-text">etapa de tu negocio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desde automatizar un flujo hasta transformar toda tu operación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <div
                key={i}
                className={`scroll-reveal rounded-2xl p-8 flex flex-col ${
                  tier.highlighted
                    ? "gradient-border-card relative"
                    : "bg-card border border-border"
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1 rounded-full">
                    Recomendado
                  </span>
                )}

                <div className="mb-6">
                  <Icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">{tier.currency} · {tier.period}</span>
                </div>

                <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Entrega: {tier.delivery}</span>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                {tier.guarantee && (
                  <div className="flex items-center gap-2 mb-6 text-sm">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{tier.guarantee}</span>
                  </div>
                )}

                <a
                  href="#cta-final"
                  className={`block text-center py-4 rounded-xl font-medium text-sm transition-all ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground pulse-glow"
                      : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Australia pricing */}
        <div className="scroll-reveal text-center" style={{ transitionDelay: "0.4s" }}>
          <div className="inline-block bg-card rounded-xl border border-border px-8 py-5">
            <p className="text-sm text-muted-foreground mb-3">
              🇦🇺 <span className="font-medium text-foreground">Precios para Australia</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="text-muted-foreground">
                Starter: <span className="text-foreground font-medium">$700 AUD</span>
              </span>
              <span className="text-muted-foreground">
                Growth: <span className="text-foreground font-medium">$2,500–4,000 AUD</span>
              </span>
              <span className="text-muted-foreground">
                Custom: <span className="text-foreground font-medium">$5,000–10,000+ AUD</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePricingSection;
