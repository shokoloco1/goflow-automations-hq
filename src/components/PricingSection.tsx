import { useState } from "react";
import { Check, Star } from "lucide-react";

type Market = "ec" | "au";

interface Service {
  name: string;
  priceEC: string;
  priceAU: string;
  delivery: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

const services: Service[] = [
  {
    name: "Landing Page Pro",
    priceEC: "$450 USD",
    priceAU: "$1,200 AUD",
    delivery: "72 horas",
    features: [
      "Diseño responsive",
      "Copy persuasivo",
      "Formulario de contacto",
      "Integración WhatsApp",
      "Optimización velocidad",
      "Dominio por 1 año",
    ],
    cta: "Quiero mi landing page",
  },
  {
    name: "Sitio Web Completo",
    priceEC: "$900 USD",
    priceAU: "$2,800 AUD",
    delivery: "5 días hábiles",
    features: [
      "Hasta 5 páginas",
      "Diseño profesional",
      "SEO básico",
      "Formularios",
      "Analytics",
      "1 mes de soporte",
    ],
    cta: "Quiero mi sitio web",
  },
  {
    name: "Manual de Marca",
    priceEC: "$700 USD",
    priceAU: "$2,000 AUD",
    delivery: "5 días hábiles",
    features: [
      "Logo profesional",
      "Paleta de colores",
      "Tipografía",
      "Guía de uso",
      "Formatos PNG/SVG/PDF",
    ],
    cta: "Quiero mi identidad",
  },
  {
    name: "Consultoría IA",
    priceEC: "$600 USD",
    priceAU: "$1,500 AUD",
    delivery: "3 días",
    features: [
      "Configuración ChatGPT/Claude",
      "Automatización de emails",
      "Atención al cliente IA",
      "Entrenamiento del equipo",
    ],
    cta: "Automatizar mi negocio",
  },
  {
    name: "Plan de Marketing 90 Días",
    priceEC: "$800 USD",
    priceAU: "$2,000 AUD",
    delivery: "7 días",
    features: [
      "Análisis de competencia",
      "Canales prioritarios",
      "Calendario de contenido",
      "Métricas de seguimiento",
    ],
    cta: "Quiero mi plan",
  },
  {
    name: "Pack Transformación Digital",
    priceEC: "$2,500 USD",
    priceAU: "$6,500 AUD",
    delivery: "2 semanas",
    features: [
      "Todo lo anterior incluido",
      "Estrategia integral",
      "3 meses de soporte mensual",
    ],
    cta: "Quiero transformar mi negocio",
    highlighted: true,
    badge: "Más completo",
  },
];

const PricingSection = () => {
  const [market, setMarket] = useState<Market>("ec");

  return (
    <section id="precios" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Servicios y precios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones con entrega garantizada. Elige tu mercado para ver precios locales.
          </p>

          {/* Market Toggle */}
          <div className="inline-flex items-center rounded-full border border-border bg-muted/50 p-1 mt-4">
            <button
              onClick={() => setMarket("ec")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-none ${
                market === "ec"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🇪🇨 Ecuador (USD)
            </button>
            <button
              onClick={() => setMarket("au")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-none ${
                market === "au"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🇦🇺 Australia (AUD)
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {market === "ec" ? s.priceEC : s.priceAU}
              </p>

              <p className="text-xs text-muted-foreground mb-5">
                Entrega: {s.delivery}
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
                href="https://wa.me/593992189290"
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

        {/* Footer Note */}
        <p className="text-center text-xs text-muted-foreground mt-10 max-w-2xl mx-auto">
          Todos los proyectos incluyen revisiones hasta aprobación · Pago 50% inicio, 50% entrega · Factura disponible
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
