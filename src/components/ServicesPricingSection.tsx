import { useEffect, useRef } from "react";
import { Check, Lock, CreditCard, Globe2, Zap } from "lucide-react";

type Tier = {
  badge: string;
  badgeVariant: "entry" | "teal" | "purple";
  title: string;
  subtitle: string;
  price: string;
  priceSuffix?: string;
  delivery: string;
  features: string[];
  cta: string;
  href: string;
  ctaVariant?: "gradient" | "purple";
};

const tiers: Tier[] = [
  {
    badge: "ENTRADA",
    badgeVariant: "entry",
    title: "Consultoría AI",
    subtitle:
      "90 minutos. Diagnóstico completo de tu proceso + plan priorizado con 3-5 quick wins específicos.",
    price: "$100",
    priceSuffix: "USD",
    delivery: "Único pago · Sesión en 48h",
    features: [
      "Mapeo de procesos actuales",
      "Oportunidades de automatización",
      "Plan priorizado con ROI estimado",
      "Recomendación de herramientas",
    ],
    cta: "Comprar ahora",
    href: "https://buy.stripe.com/test_14AcN539Vc6M1GKbe22wU00",
  },
  {
    badge: "STARTER",
    badgeVariant: "teal",
    title: "Sales Automation Starter",
    subtitle: "WhatsApp Bot (ManyChat) + CRM básico. 1 flujo customizado.",
    price: "$399",
    priceSuffix: "USD",
    delivery: "Único pago · Entrega en 72h",
    features: [
      "WhatsApp Bot con ManyChat",
      "CRM básico en Notion",
      "1 flujo customizado",
      "Capacitación inicial",
    ],
    cta: "Comprar ahora",
    href: "https://buy.stripe.com/test_5kQ3cv39V8UA99c1Ds2wU01",
  },
  {
    badge: "VENTAS",
    badgeVariant: "teal",
    title: "Sales Automation Ventas",
    subtitle:
      "WhatsApp Bot + Landing con pagos + CRM automático. El sistema completo.",
    price: "$599",
    priceSuffix: "USD",
    delivery: "Único pago · Entrega en 72h",
    features: [
      "Todo lo de Starter",
      "Landing page con pagos online",
      "CRM automático Make.com",
      "Follow-up sequences",
    ],
    cta: "Comprar ahora",
    href: "https://buy.stripe.com/test_6oU6oH39Vb2I99c0zo2wU02",
  },
  {
    badge: "SISTEMA",
    badgeVariant: "teal",
    title: "Sales Automation Sistema",
    subtitle:
      "Todo el stack de ventas + integraciones + soporte + capacitación equipo.",
    price: "$999",
    priceSuffix: "USD",
    delivery: "Único pago · 5-7 días",
    features: [
      "Todo lo de Ventas",
      "Integraciones avanzadas",
      "Soporte 30 días",
      "Capacitación completa equipo",
    ],
    cta: "Comprar ahora",
    href: "https://buy.stripe.com/test_bJecN5bGr1s8adg3LA2wU03",
  },
  {
    badge: "CUSTOM",
    badgeVariant: "teal",
    title: "Process Automation",
    subtitle:
      "Automatizamos UN proceso específico de tu negocio. Lead database, onboarding, reporting, data entry.",
    price: "$800",
    priceSuffix: "USD",
    delivery: "Único pago · 7-14 días",
    features: [
      "Proceso específico analizado",
      "Stack Make.com + Claude API",
      "Integración con tus herramientas",
      "Capacitación + documentación",
    ],
    cta: "Comprar ahora",
    href: "https://buy.stripe.com/test_dRm00jdOz6MsfxAci62wU04",
  },
  {
    badge: "RECURRENTE",
    badgeVariant: "purple",
    title: "AI Workflow Retainer",
    subtitle:
      "Mantenimiento continuo, nuevos flujos cada mes, soporte y mini-consultorías.",
    price: "$300",
    priceSuffix: "USD / mes",
    delivery: "Mensual · Cancelable cualquier momento",
    features: [
      "Ajustes a flujos existentes",
      "Hasta 2 flujos nuevos/mes",
      "Soporte respuesta 24h",
      "Mini-consultorías mensuales",
    ],
    cta: "Suscribirse",
    href: "https://buy.stripe.com/test_00w5kDdOzeeUbhkbe22wU05",
    ctaVariant: "purple",
  },
];

const badgeClasses: Record<Tier["badgeVariant"], string> = {
  entry:
    "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30",
  teal: "bg-[#00C2FF]/15 text-[#00C2FF] ring-1 ring-[#00C2FF]/30",
  purple: "bg-[#7B2FFF]/15 text-[#A78BFA] ring-1 ring-[#7B2FFF]/30",
};

const ServicesPricingSection = () => {
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
      id="servicios-precios"
      ref={ref}
      className="py-24 md:py-32 px-4 bg-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 scroll-reveal space-y-4">
          <h2 className="font-display font-bold text-foreground">
            Servicios y <span className="text-[#00C2FF]">Precios</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Automatización con consultoría integrada. Elegí lo que necesita tu
            negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="scroll-reveal group relative rounded-2xl bg-[#1A1A1A] border border-[#00C2FF]/15 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#00C2FF] hover:shadow-[0_0_30px_rgba(0,194,255,0.25)]"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span
                className={`inline-flex self-start text-[10px] font-bold tracking-wider px-3 py-1 rounded-full mb-5 ${badgeClasses[tier.badgeVariant]}`}
              >
                {tier.badge}
              </span>

              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {tier.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 min-h-[60px]">
                {tier.subtitle}
              </p>

              <div className="mb-2 flex items-baseline gap-2">
                <span
                  className="font-display font-black text-[#00C2FF] text-4xl md:text-5xl leading-none"
                  style={{ fontFamily: "'Montserrat', 'Space Grotesk', sans-serif" }}
                >
                  {tier.price}
                </span>
                {tier.priceSuffix && (
                  <span className="text-sm text-muted-foreground font-medium">
                    {tier.priceSuffix}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                {tier.delivery}
              </p>

              <div className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center text-sm font-semibold text-white rounded-[14px] py-4 px-8 transition-all hover:opacity-90 hover:shadow-[0_0_24px_rgba(0,194,255,0.35)] ${
                  tier.ctaVariant === "purple"
                    ? "bg-[#7B2FFF]"
                    : "bg-gradient-to-r from-[#00C2FF] to-[#7B2FFF]"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div className="scroll-reveal mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#00C2FF]" /> Pago seguro con Stripe
          </span>
          <span className="hidden md:inline text-border">|</span>
          <span className="inline-flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[#00C2FF]" /> Acepta tarjetas
            internacionales
          </span>
          <span className="hidden md:inline text-border">|</span>
          <span className="inline-flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-[#00C2FF]" /> USD
          </span>
          <span className="hidden md:inline text-border">|</span>
          <span className="inline-flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#00C2FF]" /> Empezamos en 72h
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServicesPricingSection;
