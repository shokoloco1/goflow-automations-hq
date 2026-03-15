import { useEffect, useRef } from "react";
import { MessageSquare, FileSpreadsheet, Clock } from "lucide-react";

const problems = [
  {
    icon: MessageSquare,
    emoji: "📱",
    title: "WhatsApp",
    description:
      "Los pedidos se pierden entre chats. Al final del día alguien tiene que revisar todo a mano para no olvidar nada.",
  },
  {
    icon: FileSpreadsheet,
    emoji: "📊",
    title: "Excel",
    description:
      "Tienes hojas de cálculo que solo entiende una persona. Si esa persona falta, nadie sabe qué está pasando.",
  },
  {
    icon: Clock,
    emoji: "⏰",
    title: "Tiempo",
    description:
      "Tu equipo dedica 15-20 horas semanales a tareas que podrían correr solas. Eso son $600-1,000 USD al mes en tiempo perdido.",
  },
];

const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);

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
          Reconoces esto en tu empresa:
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
