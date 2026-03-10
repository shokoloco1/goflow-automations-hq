import { Check, Star } from "lucide-react";

interface Service {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

const services: Service[] = [
  {
    name: "Web Growth",
    price: "$500",
    description: "Tu sitio web profesional listo en 72 horas, optimizado para Google y móviles.",
    features: [
      "Diseño responsive mobile-first",
      "SEO on-page optimizado",
      "Velocidad de carga <2s",
      "Formulario de contacto + WhatsApp",
      "Dominio incluido por 1 año",
    ],
    cta: "Agendar llamada",
  },
  {
    name: "AI Business Boost",
    price: "$1,000",
    description: "Automatiza la atención al cliente y potencia tu negocio con inteligencia artificial.",
    features: [
      "Todo lo de Web Growth",
      "Chatbot IA para WhatsApp",
      "Automatización de respuestas",
      "Análisis de datos con IA",
      "Entrenamiento de tu equipo",
    ],
    cta: "Agendar llamada",
    highlighted: true,
    badge: "Más popular",
  },
  {
    name: "Automation Essentials",
    price: "$2,000",
    description: "Transformación digital completa con prospección, ventas y operaciones automatizadas.",
    features: [
      "Todo lo de AI Business Boost",
      "Motor de ventas automático",
      "Prospección con IA",
      "Reportes financieros semanales",
      "3 meses de soporte",
    ],
    cta: "Agendar llamada",
  },
];

const PricingSection = () => (
  <section id="precios" className="py-24 md:py-32 px-4 relative overflow-hidden">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Servicios y precios
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Soluciones con entrega garantizada. Precios transparentes en USD.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.name}
            className={`relative rounded-2xl border p-6 flex flex-col transition-all ${
              s.highlighted
                ? "border-primary bg-primary/5 shadow-[0_0_40px_-12px_hsl(var(--primary)/0.3)]"
                : "border-border bg-card hover:border-primary/30"
            }`}
          >
            {s.badge && (
              <span className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                <Star className="w-3 h-3" />
                {s.badge}
              </span>
            )}

            <h3 className="text-lg font-display font-semibold text-foreground mb-1">
              {s.name}
            </h3>

            <p className="text-3xl font-display font-bold text-primary mb-1">
              {s.price} <span className="text-sm font-normal text-muted-foreground">USD</span>
            </p>

            <p className="text-sm text-muted-foreground mb-5">
              {s.description}
            </p>

            <ul className="space-y-2 mb-6 flex-1">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://calendly.com/davids-goflowaai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-center py-3 rounded-xl font-medium text-sm transition-all cursor-none ${
                s.highlighted
                  ? "bg-primary text-primary-foreground hover:glow-green"
                  : "border border-primary/40 text-primary hover:bg-primary/10"
              }`}
            >
              {s.cta} →
            </a>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-10 max-w-2xl mx-auto">
        Todos los proyectos incluyen revisiones hasta aprobación · Pago 50% inicio, 50% entrega · Factura disponible
      </p>
    </div>
  </section>
);

export default PricingSection;
