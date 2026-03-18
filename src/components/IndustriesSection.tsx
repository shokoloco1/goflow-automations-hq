import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const IndustriesSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const industries = [
    {
      emoji: "📣",
      name: t("industries.1_name"),
      desc: t("industries.1_desc"),
    },
    {
      emoji: "👔",
      name: t("industries.2_name"),
      desc: t("industries.2_desc"),
    },
    {
      emoji: "🏪",
      name: t("industries.3_name"),
      desc: t("industries.3_desc"),
    },
    {
      emoji: "🏥",
      name: t("industries.4_name"),
      desc: t("industries.4_desc"),
    },
    {
      emoji: "🔧",
      name: t("industries.5_name"),
      desc: t("industries.5_desc"),
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
    <section id="industrias" ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-4 scroll-reveal">
          {t("industries.title")} <span className="text-primary">{t("industries.title_accent")}</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 scroll-reveal">
          {t("industries.subtitle")}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="scroll-reveal bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:border-primary/40"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="text-3xl mb-4 block">{ind.emoji}</span>
              <h3 className="text-base font-display font-semibold text-foreground mb-2">{ind.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
