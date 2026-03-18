import { useEffect, useRef } from "react";
import { ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const HowItWorksSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const steps = [
    {
      time: t("how_it_works.step_1_time"),
      title: t("how_it_works.step_1_title"),
      desc: t("how_it_works.step_1_desc"),
    },
    {
      time: t("how_it_works.step_2_time"),
      title: t("how_it_works.step_2_title"),
      desc: t("how_it_works.step_2_desc"),
    },
    {
      time: t("how_it_works.step_3_time"),
      title: t("how_it_works.step_3_title"),
      desc: t("how_it_works.step_3_desc"),
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
    <section id="como-funciona" ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-16 scroll-reveal">
          {t("how_it_works.title")} <span className="text-primary">{t("how_it_works.title_accent")}</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-7 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px bg-gradient-to-r from-primary/40 via-secondary/30 to-primary/40" />

          <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
            {steps.map((s, i) => (
              <div
                key={i}
                className="scroll-reveal relative flex md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-0"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {i < steps.length - 1 && (
                  <div className="absolute left-[18px] top-[44px] bottom-[-20px] w-px bg-gradient-to-b from-primary/40 to-primary/10 md:hidden" />
                )}

                <div className="relative shrink-0">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                    {i + 1}
                  </div>
                </div>

                <div className="md:mt-5">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">
                    {s.time}
                  </span>
                  <h3 className="text-base font-display font-semibold text-foreground mb-1">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 scroll-reveal">
          <div className="rounded-xl border-l-4 border-l-primary bg-card border border-border px-6 py-5 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-foreground font-medium text-sm md:text-base">
              {t("how_it_works.guarantee")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
