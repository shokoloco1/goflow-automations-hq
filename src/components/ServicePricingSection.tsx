import { useEffect, useRef } from "react";
import { Check, Clock, ShieldCheck, Zap, Rocket, Crown } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicePricingSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const tiers = [
    {
      name: t("pricing.starter_name"),
      price: t("pricing.starter_price"),
      currency: t("pricing.currency"),
      period: t("pricing.period"),
      delivery: t("pricing.starter_delivery"),
      icon: Zap,
      description: t("pricing.starter_desc"),
      features: [
        t("pricing.starter_f1"),
        t("pricing.starter_f2"),
        t("pricing.starter_f3"),
        t("pricing.starter_f4"),
      ],
      guarantee: t("pricing.starter_guarantee"),
      cta: t("pricing.starter_cta"),
      highlighted: false,
    },
    {
      name: t("pricing.growth_name"),
      price: t("pricing.growth_price"),
      currency: t("pricing.currency"),
      period: t("pricing.period"),
      delivery: t("pricing.growth_delivery"),
      icon: Rocket,
      description: t("pricing.growth_desc"),
      features: [
        t("pricing.growth_f1"),
        t("pricing.growth_f2"),
        t("pricing.growth_f3"),
        t("pricing.growth_f4"),
        t("pricing.growth_f5"),
      ],
      guarantee: null,
      cta: t("pricing.growth_cta"),
      highlighted: true,
    },
    {
      name: t("pricing.custom_name"),
      price: t("pricing.custom_price"),
      currency: t("pricing.currency"),
      period: t("pricing.custom_period"),
      delivery: t("pricing.custom_delivery"),
      icon: Crown,
      description: t("pricing.custom_desc"),
      features: [
        t("pricing.custom_f1"),
        t("pricing.custom_f2"),
        t("pricing.custom_f3"),
        t("pricing.custom_f4"),
        t("pricing.custom_f5"),
      ],
      guarantee: null,
      cta: t("pricing.custom_cta"),
      highlighted: false,
    },
  ];

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
            {t("pricing.title")} <span className="gradient-text">{t("pricing.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("pricing.subtitle")}
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
                    {t("pricing.recommended")}
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
                  <span>{t("pricing.delivery")} {tier.delivery}</span>
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
              🇦🇺 <span className="font-medium text-foreground">{t("pricing.australia_title")}</span>
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
