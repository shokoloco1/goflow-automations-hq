import { useEffect, useRef } from "react";
import { Globe, Bot, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Bot,
      badge: t("services.1_badge"),
      badgeClass: "bg-muted text-muted-foreground",
      name: t("services.1_name"),
      title: t("services.1_title"),
      desc: t("services.1_desc"),
      price: t("services.1_price"),
    },
    {
      icon: Zap,
      badge: t("services.2_badge"),
      badgeClass: "bg-primary text-primary-foreground",
      name: t("services.2_name"),
      title: t("services.2_title"),
      desc: t("services.2_desc"),
      price: t("services.2_price"),
    },
    {
      icon: Globe,
      badge: t("services.3_badge"),
      badgeClass: "bg-secondary text-secondary-foreground",
      name: t("services.3_name"),
      title: t("services.3_title"),
      desc: t("services.3_desc"),
      price: t("services.3_price"),
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
    <section id="servicios" ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-4 scroll-reveal">
          {t("services.title")}{" "}
          <span className="text-primary">{t("services.title_accent")}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto scroll-reveal">
          {t("services.subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="scroll-reveal glass-card rounded-2xl p-8 relative flex flex-col transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,229,160,0.3)]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span
                  className={`absolute top-4 right-4 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full ${s.badgeClass}`}
                >
                  {s.badge}
                </span>

                <Icon className="w-10 h-10 text-primary mb-4" />
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                  {s.name}
                </p>
                <h3 className="text-lg md:text-xl mb-2">{s.title}</h3>
                <p className="text-2xl font-display font-bold text-primary mb-3">{s.price}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {s.desc}
                </p>

                <a
                  href="https://calendly.com/davids-goflowaai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-3 rounded-xl font-medium text-sm bg-primary text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(0,229,160,0.4)] cursor-none"
                >
                  {t("services.cta")}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
