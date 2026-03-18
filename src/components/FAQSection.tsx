import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: t("faq.1_q"),
      answer: t("faq.1_a"),
    },
    {
      question: t("faq.2_q"),
      answer: t("faq.2_a"),
    },
    {
      question: t("faq.3_q"),
      answer: t("faq.3_a"),
    },
    {
      question: t("faq.4_q"),
      answer: t("faq.4_a"),
    },
    {
      question: t("faq.5_q"),
      answer: t("faq.5_a"),
    },
    {
      question: t("faq.6_q"),
      answer: t("faq.6_a"),
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
    <section id="faq" ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-center mb-4 scroll-reveal">
          {t("faq.title")} <span className="text-primary">{t("faq.title_accent")}</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 scroll-reveal">
          {t("faq.subtitle")}
        </p>

        <div className="scroll-reveal" style={{ transitionDelay: "0.15s" }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground font-medium text-sm md:text-base py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
