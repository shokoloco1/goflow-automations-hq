import { useState, useEffect, useRef } from "react";
import { Slider } from "@/components/ui/slider";
import { useTranslation } from "react-i18next";

const HOURLY_RATE = 4.5;
const WORK_DAYS = 22;
const AUTOMATION_COST = 400;

const CalculatorSection = () => {
  const { t } = useTranslation();
  const [people, setPeople] = useState(2);
  const [hours, setHours] = useState(3);
  const ref = useRef<HTMLDivElement>(null);

  const monthlyCost = people * hours * WORK_DAYS * HOURLY_RATE;
  const roiDays = Math.ceil(AUTOMATION_COST / (monthlyCost / 30));

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
    <section id="calculadora" ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-center mb-12 scroll-reveal">
          {t("calculator.title")} <span className="text-primary">{t("calculator.title_accent")}</span> {t("calculator.title_suffix")}
        </h2>

        <div className="scroll-reveal bg-card rounded-2xl border border-border p-8 md:p-10 space-y-8" style={{ transitionDelay: "0.2s" }}>
          {/* Slider 1 */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">{t("calculator.people_label")}</span>
              <span className="text-primary font-bold">{people}</span>
            </div>
            <Slider
              value={[people]}
              onValueChange={(v) => setPeople(v[0])}
              min={1}
              max={10}
              step={1}
            />
          </div>

          {/* Slider 2 */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">{t("calculator.hours_label")}</span>
              <span className="text-primary font-bold">{hours}</span>
            </div>
            <Slider
              value={[hours]}
              onValueChange={(v) => setHours(v[0])}
              min={1}
              max={8}
              step={1}
            />
          </div>

          {/* Result */}
          <div className="border-t border-border pt-8 text-center space-y-2">
            <p className="text-muted-foreground text-sm">{t("calculator.result_prefix")}</p>
            <p className="text-5xl md:text-6xl font-display font-bold text-primary">
              ${monthlyCost.toLocaleString()}
            </p>
            <p className="text-muted-foreground text-sm">{t("calculator.result_suffix")}</p>
          </div>

          {/* ROI */}
          <div className="bg-muted rounded-xl p-5 text-center space-y-1">
            <p className="text-foreground text-sm">
              {t("calculator.roi_prefix")} <span className="font-bold text-primary">$400 USD</span> {t("calculator.roi_suffix")}
            </p>
            <p className="text-foreground text-sm">
              {t("calculator.roi_days_prefix")} <span className="font-bold text-primary">{roiDays} {t("calculator.roi_days_suffix")}</span>
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#cta-final"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-base font-bold pulse-glow transition-all"
            >
              {t("calculator.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
