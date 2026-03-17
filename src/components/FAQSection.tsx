import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué herramientas usan para automatizar?",
    answer:
      "Usamos plataformas como n8n, Make y Zapier combinadas con APIs e inteligencia artificial. Todo se conecta a las herramientas que ya usas: WhatsApp, Excel, tu CRM, sistema de facturación, etc. No creamos software a medida — conectamos lo que ya existe para que funcione sin intervención manual.",
  },
  {
    question: "¿Tengo que cambiar mis sistemas actuales?",
    answer:
      "No. Trabajamos con lo que ya tienes. Si usas WhatsApp para recibir pedidos, Excel para cotizar y un sistema contable para facturar, conectamos esos tres. No necesitas aprender herramientas nuevas ni migrar datos.",
  },
  {
    question: "¿Qué pasa si no funciona?",
    answer:
      "El plan Starter incluye garantía de 7 días: si no ves el ahorro de tiempo prometido, te devolvemos el 100%. Sin preguntas, sin letra chica. Nuestro negocio depende de que funcione, no de que pagues.",
  },
  {
    question: "¿Cuánto tiempo toma implementar?",
    answer:
      "El Starter se entrega en 72 horas (un flujo automatizado). El Growth toma 2-3 semanas (múltiples flujos conectados). Los proyectos Custom varían según alcance, pero típicamente 4-8 semanas. En todos los casos, tu equipo recibe capacitación antes de que terminemos.",
  },
  {
    question: "¿Puedo ver un ejemplo real?",
    answer:
      "Sí. En la auditoría gratuita de 20 minutos te mostramos exactamente cómo se vería tu flujo automatizado con un diagrama personalizado. También te compartimos métricas de ahorro basadas en tu operación real, no números genéricos.",
  },
  {
    question: "¿Es para mi tipo de negocio?",
    answer:
      "Si tu equipo gestiona cotizaciones, seguimiento de clientes o facturación de forma manual (por WhatsApp, Excel, email), sí. Trabajamos con agencias de marketing, consultoras, distribuidoras, clínicas y cualquier empresa de servicios que pierda tiempo en tareas repetitivas.",
  },
];

const FAQSection = () => {
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
    <section id="faq" ref={ref} className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-center mb-4 scroll-reveal">
          Preguntas <span className="text-primary">frecuentes</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 scroll-reveal">
          Lo que nos preguntan antes de agendar.
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
