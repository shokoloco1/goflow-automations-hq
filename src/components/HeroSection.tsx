import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-mesh" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-20 md:pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="leading-[1.1]">
            {["¿Tu equipo sigue gestionando", "cotizaciones y pedidos", "a mano por WhatsApp?"].map((line, i) => (
              <span
                key={i}
                className={`block text-reveal ${i === 2 ? "gradient-text" : ""}`}
                style={{ animationDelay: `${0.3 + i * 0.15}s` }}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p
            className={`text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Automatizamos ese flujo completo en 72 horas. Sin cambiar los sistemas que ya usas.
          </p>

          {/* Stats */}
          <div
            className={`flex justify-center gap-8 md:gap-16 transition-all duration-700 delay-[0.85s] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-display font-bold text-primary">72h</span>
              <span className="text-muted-foreground text-sm mt-1 block">tiempo de entrega</span>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-display font-bold text-primary">$400</span>
              <span className="text-muted-foreground text-sm mt-1 block">precio fijo USD</span>
            </div>
          </div>

          {/* CTA */}
          <div
            className={`transition-all duration-700 delay-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <a
              href="#cta-final"
              className="inline-block bg-primary text-primary-foreground px-10 py-5 rounded-2xl text-lg font-bold pulse-glow transition-all cursor-none"
            >
              Reserva tu diagnóstico gratis de 20 min
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 transition-all duration-700 delay-[1.2s] ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-muted-foreground text-xs">Scroll para descubrir</span>
          <ChevronDown className="w-4 h-4 text-primary scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
