

## Plan: Reestructuración del Hero, Servicios, CTAs y Social Proof

Este plan actualiza el contenido principal de la página según las nuevas especificaciones, sin tocar GTM ni scripts de tracking.

### Cambios por componente

**1. HeroSection.tsx** - Reescribir contenido
- Titulo: "Tu página web profesional en 72 horas"
- Subtitulo nuevo enfocado en velocidad, IA y resultados (SEO, más contactos)
- Social proof badge: "112+ negocios analizados en Ecuador"
- CTA principal: botón grande "Reservar 30 min" enlazando a `https://calendly.com/davids-goflowaai/30min`
- Trust line: "Análisis gratuito de tu web en 24h"
- Eliminar el segundo botón "Ver servicios y precios" o hacerlo secundario
- Mantener browser mockup y trust badges existentes

**2. PricingSection.tsx** - Reemplazar con 3 servicios nuevos
- Eliminar los 6 servicios actuales y el toggle EC/AU
- 3 cards con precio en USD:
  - Web Growth: $500
  - AI Business Boost: $1,000
  - Automation Essentials: $2,000
- Descripción de 1 línea por servicio
- CTA secundario a Calendly en cada card

**3. ServicesSection.tsx** - Simplificar
- Actualizar para que los servicios reflejen los 3 nuevos (Web Growth, AI Business Boost, Automation Essentials) con descripciones expandidas
- O bien, redirigir esta sección para que complemente la sección de precios sin duplicar

**4. FinalCTA.tsx** - Actualizar CTA
- Cambiar enlace de WhatsApp a Calendly: `https://calendly.com/davids-goflowaai/30min`
- Texto: "Reservar 30 min" o "Agendar llamada"

**5. MobileCTABanner.tsx** - Actualizar CTA
- Cambiar enlace a Calendly
- Texto: "Agendar llamada gratis" o similar

**6. Navigation.tsx** - Actualizar CTA del nav
- Cambiar el botón "WhatsApp →" a "Agendar llamada" con enlace a Calendly

**7. Footer.tsx** - Actualizar servicios
- Cambiar la lista de servicios a los 3 nuevos nombres

**8. StatsSection.tsx** - Actualizar dato
- Agregar "112+" negocios analizados como stat

### Lo que NO se toca
- `index.html` (GTM intacto)
- Language toggle se mantiene (ES principal)
- Estructura general de secciones en Index.tsx

### Mobile-first
- Botones con padding generoso (`py-4 px-8` mínimo)
- Textos legibles (`text-base` o más en CTAs)
- El banner inferior móvil se actualiza a Calendly

