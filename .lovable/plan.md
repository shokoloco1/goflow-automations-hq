

# Plan: Rebuild completo de GoFlowAI

## Resumen

Borrar todos los componentes existentes y reconstruir el sitio desde cero con la estética "tech noir latinoamericano" especificada. Nuevo sistema de diseño, nuevas secciones, todo en español.

## Cambios en el sistema de diseño

### `index.html`
- Agregar Google Fonts: Syne (800), DM Sans (400, 500), DM Mono (400)
- Meta tags SEO en español
- Favicon y título actualizados

### `src/index.css`
- Nueva paleta completa:
  - Background: #050508, Surface: #0d0d14
  - Acento primario: #00e5a0, Secundario: #ff6b35
  - Texto: #f0f0f8, Texto secundario: #6b6b80
- CSS para: grain/noise overlay, glassmorphism cards, glow effects, cursor personalizado verde, líneas divisoras animadas
- Utility classes para gradientes animados del hero

### `tailwind.config.ts`
- Nuevas fuentes: Syne, DM Sans, DM Mono
- Nuevos colores del sistema
- Nuevas animaciones: text-reveal stagger, counter, pulse glow, gradient mesh

## Archivos a eliminar

Todos los componentes actuales en `src/components/` (excepto `ui/`):
- About, Benefits, CaseStudy, ComparisonTable, Contact, Deliverables, EarlyResults, FAQ, Footer, FooterCTA, Hero, HowItWorks, Industries, IndustriesFocused, IntegrationLogos, LanguageSwitch, LeadMagnet, Leadership, LiveActivity, NavLink, Navigation, Packages, ROICalculator, Services, Testimonials, TrustBadges, UseCases, VisualProof, WhatWeAutomate

También eliminar:
- `src/constants/translations.ts` (ya no se usa i18n)
- `src/constants/services.ts`
- `src/contexts/LanguageContext.tsx`
- `src/components/LanguageSwitch.tsx`
- `src/App.css` (no se usa)

## Nuevos componentes a crear

Todo el contenido hardcoded en español (sin sistema de traducciones).

### `src/components/CustomCursor.tsx`
- Punto verde que sigue al mouse con lag suave (CSS transform + requestAnimationFrame)
- Oculto en mobile

### `src/components/GrainOverlay.tsx`
- SVG noise filter overlay al 3% opacidad, position fixed, pointer-events none

### `src/components/SectionDivider.tsx`
- Línea gradiente que se expande de izquierda a derecha al entrar al viewport

### `src/components/AnimatedCounter.tsx`
- Hook/componente que anima números al entrar al viewport (IntersectionObserver)

### `src/components/Navigation.tsx`
- Navbar minimal: logo GoFlowAI a la izquierda, links centrados (Servicios, Cómo funciona, Contacto), CTA WhatsApp a la derecha
- Fondo glassmorphism con blur, fixed top
- Mobile: hamburger menu

### `src/components/HeroSection.tsx`
- Fondo: malla de gradiente animada con CSS (radial gradients moviéndose)
- Badge pill animado: "✦ Agencia de IA · Ecuador & Australia"
- Headline en 3 líneas con stagger animation: "Tu página web / lista en 72 horas / por $300." ($300 en verde)
- Subheadline
- 2 CTAs: "Quiero mi sitio web →" (WhatsApp link) y "Ver ejemplos" (scroll)
- Visual: browser frame mockup con gradiente animado
- Scroll indicator animado

### `src/components/ProblemSection.tsx`
- 3 cards glassmorphism con problemas, datos estadísticos, iconos
- Colores naranja/verde alternados
- Counters animados para los porcentajes

### `src/components/SolutionSection.tsx`
- Fondo superficie elevada (#0d0d14)
- Layout asimétrico: texto izquierda con checkmarks animados, visual derecha
- Lista de 7 puntos con ✓ verdes

### `src/components/ServicesSection.tsx`
- Grid 2x2 desktop / 1 col mobile
- Card destacada "Sitio Web Profesional" con badge "MÁS POPULAR" y borde verde
- Cards: SEO, Automatización, Consultoría IA
- Precios, listas, CTAs a WhatsApp

### `src/components/HowItWorksSection.tsx`
- Timeline horizontal (desktop) / vertical (mobile)
- 4 pasos con iconos y descripciones
- Línea conectora animada

### `src/components/MarketsSection.tsx`
- 2 "portales" para Ecuador y Australia
- Banderas emoji, textos diferenciados, precios

### `src/components/StatsSection.tsx`
- Fondo gradiente verde oscuro
- 4 números grandes con AnimatedCounter: 72h, 89%, $300, 2×

### `src/components/FinalCTA.tsx`
- Headline grande, párrafo, botón enorme con pulse animation
- Link WhatsApp
- Texto de respuesta

### `src/components/Footer.tsx`
- Logo, tagline, links, contacto, copyright

### `src/components/WhatsAppButton.tsx`
- Botón flotante esquina inferior derecha, siempre visible
- Ícono WhatsApp, glow verde, link a wa.me

## Archivos modificados

### `src/App.tsx`
- Eliminar LanguageProvider wrapper
- Mantener QueryClient, Toasters, Router

### `src/pages/Index.tsx`
- Importar todos los nuevos componentes
- Agregar CustomCursor y GrainOverlay como elementos globales
- Orden: Navigation → HeroSection → ProblemSection → SolutionSection → ServicesSection → HowItWorksSection → MarketsSection → StatsSection → FinalCTA → Footer → WhatsAppButton

### `src/hooks/useScrollAnimation.tsx`
- Mantener tal cual, se reutiliza

## Detalles técnicos

- **Animaciones**: CSS animations + IntersectionObserver (no Framer Motion para evitar agregar dependencia, se logra el mismo efecto con CSS)
- **Cursor personalizado**: requestAnimationFrame con lerp para el lag suave
- **Grain overlay**: SVG filter con feTurbulence
- **Glassmorphism**: `backdrop-filter: blur(20px)` + bordes semi-transparentes
- **Gradient mesh hero**: múltiples radial-gradients animados con @keyframes
- **Counters**: IntersectionObserver + requestAnimationFrame para interpolar valores
- **Responsive**: mobile-first con Tailwind breakpoints
- **WhatsApp links**: todos apuntan a `https://wa.me/593992189290`
- **Smooth scroll**: CSS `scroll-behavior: smooth` + scrollIntoView para links internos

