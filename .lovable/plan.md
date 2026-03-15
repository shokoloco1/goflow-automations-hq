

# Rediseño completo: GoFlow AI — Workflow Automation Agency

## Resumen

Reescritura total de la landing page. Se eliminan todas las referencias a diseño web, PageSpeed, auditorías y precios de sitios web. Se reemplaza con 7 secciones enfocadas en workflow automation para PYMEs.

## Cambios de color y estilo

**`src/index.css`** — Actualizar variables CSS:
- `--primary`: cambiar de verde (#00e5a0) a cyan `195 100% 50%` (#00C2FF)
- `--secondary`: cambiar de naranja a purple `262 100% 59%` (#7B2FFF)
- `--background`: mantener oscuro, ajustar a `0 0% 4%` (#0A0A0A)
- Actualizar `.glass-card` border colors a cyan
- Actualizar `.hero-mesh` gradients a cyan/purple
- Actualizar `.glow-green` → `.glow-cyan` con colores cyan
- Actualizar `pulse-glow`, `badge-pulse` a cyan

**`tailwind.config.ts`** — Sin cambios estructurales (usa CSS variables)

## Cambios de contenido por archivo

### `index.html`
- Meta title: "GoFlow AI — Workflow Automation para PYMEs Ecuador y Australia"
- Meta description: "Automatizamos tu proceso de cotización, seguimiento y facturación en 72 horas. $400 USD. Garantía de 7 días."
- NO tocar GTM

### `src/pages/Index.tsx`
- Simplificar a 7 secciones: Hero, Problem, HowItWorks, Service+Pricing, Calculator, Industries, FinalCTA + Footer
- Eliminar: SolutionSection, PainPointsSection, ServicesSection, MarketsSection, StatsSection, PricingSection, TestimonialsSection, LeadCaptureForm, SectionDivider (entre secciones innecesarias)

### `src/components/HeroSection.tsx` — Reescribir completo
- Headline: "¿Tu equipo sigue gestionando cotizaciones y pedidos a mano por WhatsApp?"
- Subheadline: "Automatizamos ese flujo completo en 72 horas. Sin cambiar los sistemas que ya usas."
- Dos stats: "72 horas" + "$400 USD"
- CTA: "Reserva tu diagnóstico gratis de 20 min" → ancla a #cta-final
- Gradiente cyan→purple en headline
- Eliminar browser mockup

### `src/components/ProblemSection.tsx` — Reescribir
- Título: "Reconoces esto en tu empresa:"
- 3 tarjetas dark (#1A1A1A): WhatsApp perdidos, Excel de una persona, 15-20h semanales perdidas
- Iconos: MessageSquare, FileSpreadsheet, Clock

### `src/components/HowItWorksSection.tsx` — Reescribir
- Título: "Así funciona en 72 horas"
- 3 pasos timeline: Diagnóstico (Día 1), Construimos (Día 1-2), Tu equipo lo usa (Día 3)
- Garantía banner: devolución 100% en 7 días

### Nuevo: `src/components/ServicePricingSection.tsx`
- Título: "Quote-to-Cash Automation"
- Subtítulo sobre el flujo lead→factura
- Card centrada con borde gradiente cyan→purple
- 5 checkmarks de lo que incluye
- Precio $400 USD, entrega 72h, garantía 7 días
- CTA: "Quiero esto para mi empresa" → #cta-final
- Nota: "También disponible para Brisbane, Australia: $700 AUD"

### Nuevo: `src/components/CalculatorSection.tsx`
- Título: "¿Cuánto te cuesta NO automatizar?"
- 2 sliders (Slider component ya existe): personas (1-10, default 2), horas/día (1-8, default 3)
- Resultado: personas × horas × 22 × $4.5
- ROI: $400 / (resultado/30) días
- CTA: "Reserva diagnóstico gratuito"

### `src/components/IndustriesSection.tsx` — Reescribir
- Título: "Trabajamos con empresas como la tuya"
- 4 cards 2x2: Comercio mayorista, Manufactura, Servicios profesionales, Salud privada
- Descripciones específicas sobre pain points de cada industria

### `src/components/FinalCTA.tsx` — Reescribir
- Fondo gradiente #0A0A0A → #12003A
- Headline: "¿Cuántas horas pierde tu equipo esta semana?"
- Embed Calendly iframe
- Info de contacto David Shaw, horarios Ecuador/Australia

### `src/components/Navigation.tsx` — Actualizar
- Links: Problema, Cómo funciona, Servicio, Calculadora, Contacto
- CTA: "Diagnóstico gratis" → #cta-final
- Eliminar language toggle (ES principal, simplificar)

### `src/components/Footer.tsx` — Actualizar
- Tagline: "Automatizamos procesos para que tu negocio venda más"
- Links: LinkedIn David Shaw, goflowai.com
- "© 2026 GoFlow AI | Brisbane, Australia"

### `src/components/MobileCTABanner.tsx` — Actualizar
- Texto: "Diagnóstico gratis de 20 min"
- Ancla a #cta-final

### Archivos que se mantienen sin cambios:
- CustomCursor, GrainOverlay, AnimatedCounter, WhatsAppButton
- Todos los componentes UI (button, card, slider, etc.)

### Archivos/componentes que se eliminan de Index (ya no se importan):
- SolutionSection, PainPointsSection, ServicesSection, MarketsSection, StatsSection, PricingSection, TestimonialsSection, LeadCaptureForm, SectionDivider

## Orden final de secciones en Index.tsx

```text
Navigation
HeroSection
ProblemSection
HowItWorksSection
ServicePricingSection (nuevo)
CalculatorSection (nuevo)
IndustriesSection
FinalCTA (con Calendly embed)
Footer
WhatsAppButton
MobileCTABanner
```

