import { useState, useEffect, useRef } from "react";
import { Slider } from "@/components/ui/slider";

const HOURLY_RATE = 4.5;
const WORK_DAYS = 22;
const AUTOMATION_COST = 400;

const CalculatorSection = () => {
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
          ¿Cuánto te cuesta <span className="text-primary">NO</span> automatizar?
        </h2>

        <div className="scroll-reveal bg-card rounded-2xl border border-border p-8 md:p-10 space-y-8" style={{ transitionDelay: "0.2s" }}>
          {/* Slider 1 */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Personas haciendo cotizaciones / seguimiento manual</span>
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
              <span className="text-foreground">Horas al día dedicadas a esto</span>
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
            <p className="text-muted-foreground text-sm">Tu equipo pierde</p>
            <p className="text-5xl md:text-6xl font-display font-bold text-primary">
              ${monthlyCost.toLocaleString()}
            </p>
            <p className="text-muted-foreground text-sm">USD al mes en trabajo que puede automatizarse</p>
          </div>

          {/* ROI */}
          <div className="bg-muted rounded-xl p-5 text-center space-y-1">
            <p className="text-foreground text-sm">
              GoFlow AI automatiza esto por <span className="font-bold text-primary">$400 USD</span> único.
            </p>
            <p className="text-foreground text-sm">
              ROI en <span className="font-bold text-primary">{roiDays} días</span>.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#cta-final"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-base font-bold pulse-glow transition-all"
            >
              Reserva diagnóstico gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
