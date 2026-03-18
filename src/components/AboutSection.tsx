import { useEffect, useRef } from "react";
import { Linkedin, Award, GraduationCap, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const credentials = [
    { icon: GraduationCap, text: t("about.cred_1") },
    { icon: Award, text: t("about.cred_2") },
    { icon: Globe, text: t("about.cred_3") },
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
    <section ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="scroll-reveal bg-card rounded-2xl border border-border p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Avatar placeholder */}
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-display font-bold gradient-text">DS</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                  {t("about.title")}
                </h3>
                <p className="text-primary text-sm font-medium">{t("about.founder")}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {t("about.p1")}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t("about.p2")}
              </p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                {credentials.map((cred, i) => {
                  const Icon = cred.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon className="w-4 h-4 text-primary" />
                      <span>{cred.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* LinkedIn CTA */}
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/in/davidshawc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  {t("about.linkedin")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
