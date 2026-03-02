

# Plan: 5 modificaciones adicionales al sitio

## 1. Hero — Cambiar subtitulo
**Archivo:** `src/components/HeroSection.tsx`
- Reemplazar linea 45 ("Usamos inteligencia artificial...") por "Diseno web, automatizacion e inteligencia artificial para negocios que quieren crecer"

## 2. Nueva seccion "Senales de alerta"
**Archivo nuevo:** `src/components/PainPointsSection.tsx`
- Titulo: "Como sabemos que tu negocio necesita ayuda?"
- Grid 3 columnas desktop / 1 movil con 6 senales de alerta (circulo rojo + texto)
- Subtitulo final: "Si te identificas con alguno de estos puntos, tenemos la solucion exacta para ti."
- Mismo patron de scroll-reveal + IntersectionObserver
- Glass-card por cada pain point con icono rojo

**Archivo:** `src/pages/Index.tsx` — Insertar entre HowItWorksSection y ServicesSection

## 3. Combos en ServicesSection
**Archivo:** `src/components/ServicesSection.tsx`
- Agregar debajo del grid de servicios una seccion de 3 combos
- Grid 3 columnas desktop / 1 movil
- Cada combo: glass-card con badge, titulo del combo, los 2 servicios que incluye, y etiqueta
  - Combo 1: "Presencia Digital Completa" — Sitio Web + Marca — "Ahorra 20% combinando"
  - Combo 2: "Negocio en Piloto Automatico" — WhatsApp Bot + Motor de Ventas — "El mas popular"
  - Combo 3: "Control Total del Negocio" — CFO Virtual + Diagnostico — "Empieza aqui"
- CTA de cada combo abre WhatsApp con mensaje del combo

## 4. Nueva seccion "Para que tipo de negocio"
**Archivo nuevo:** `src/components/IndustriesSection.tsx`
- Titulo: "Trabajamos con negocios como el tuyo"
- Grid de 8 industrias (4 cols desktop, 2 cols mobile) con emoji + nombre
- Industrias: Clinicas, Inmobiliarias, Abogados, Restaurantes, Academias, Salud y belleza, Constructoras, Tiendas
- Glass-card por industria, hover verde
- Mismo patron scroll-reveal

**Archivo:** `src/pages/Index.tsx` — Insertar despues de ServicesSection, antes de MarketsSection

## 5. Floating banner mobile (sticky bottom)
**Archivo nuevo:** `src/components/MobileCTABanner.tsx`
- Solo visible en mobile (`md:hidden`)
- Sticky bottom, fondo `#00e5a0`, texto negro
- Texto: "No sabes por donde empezar? → Diagnostico gratis por WhatsApp"
- Link a wa.me/593992189290
- Z-index alto para estar sobre todo

**Archivo:** `src/pages/Index.tsx` — Agregar al layout

## Resumen de archivos
- **Modificar:** `HeroSection.tsx`, `ServicesSection.tsx`, `Index.tsx`
- **Crear:** `PainPointsSection.tsx`, `IndustriesSection.tsx`, `MobileCTABanner.tsx`

