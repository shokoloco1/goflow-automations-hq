import { useEffect, useState } from "react";
import { ChevronDown, CheckCircle, BarChart3 } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            {/* Social proof badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 badge-pulse text-sm text-muted-foreground transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <BarChart3 className="w-4 h-4 text-primary" />
              112+ negocios analizados en Ecuador
            </div>

            {/* Headline */}
            <h1 className="leading-[1.1]">
              {["Tu página web", "profesional en", "72 horas."].map((line, i) => (
                <span
                  key={i}
                  className={`block text-reveal ${i === 2 ? "text-primary" : ""}`}
                  style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              className={`text-muted-foreground text-lg md:text-xl max-w-lg transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Sitios rápidos, optimizados para Google y diseñados con IA para convertir visitantes en clientes reales. Más visitas, más contactos, menos esfuerzo.
            </p>

            {/* CTA principal */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <a
                href="https://calendly.com/davids-goflowaai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-base hover:glow-green transition-all cursor-none"
              >
                Reservar 30 min gratis →
              </a>
            </div>

            {/* Trust line */}
            <div
              className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground transition-all duration-700 delay-[1.1s] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                Análisis gratuito de tu web en 24h
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                Entrega garantizada
              </span>
              <span>🇪🇨 Ecuador · 🇦🇺 Australia</span>
            </div>
          </div>

          {/* Right: Browser mockup */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="glass-card rounded-2xl p-1 animate-float">
              <div className="bg-muted rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-block bg-background/50 rounded px-3 py-1 text-xs text-muted-foreground font-mono">
                      tunegocio.com
                    </div>
                  </div>
                </div>
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-1 bg-primary/40 rounded mb-6" />
                    <div className="w-48 h-3 bg-foreground/10 rounded mb-3" />
                    <div className="w-36 h-3 bg-foreground/10 rounded mb-6" />
                    <div className="w-24 h-8 bg-primary/30 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
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
