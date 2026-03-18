import { useEffect, useRef } from "react";
import { MessageSquare, FileSpreadsheet, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProblemSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const problems = [
    {
      icon: MessageSquare,
      emoji: "📱",
      title: t("problem.1_title"),
      description: t("problem.1_desc"),
    },
    {
      icon: FileSpreadsheet,
      emoji: "📊",
      title: t("problem.2_title"),
      description: t("problem.2_desc"),
    },
    {
      icon: Clock,
      emoji: "⏰",
      title: t("problem.3_title"),
      description: t("problem.3_desc"),
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
      { threshold: 0.15 }
    );
    el.querySelectorAll(".scroll-reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="problema" ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center mb-16 scroll-reveal">
          {t("problem.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="scroll-reveal rounded-2xl p-8 bg-card border border-border"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <span className="text-4xl mb-4 block">{p.emoji}</span>
              <h3 className="mb-3 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
