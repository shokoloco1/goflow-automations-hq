

# Plan: Reemplazar ServicesSection con los 6 nuevos servicios

## Resumen
Reescribir `ServicesSection.tsx` con los 6 servicios especificados y reposicionar la seccion entre "Como funciona" y "Estadisticas" en `Index.tsx`.

## Cambios

### 1. `src/components/ServicesSection.tsx` — Reescribir completo
- 6 servicios con emoji como icono grande, badge de categoria, titulo, descripcion y CTA
- Grid 2 columnas desktop / 1 movil (`grid md:grid-cols-2`)
- Cards con `glass-card`, hover con borde verde y glow (`hover:border-[#00e5a0] hover:shadow-[0_0_30px_rgba(0,229,160,0.3)]`)
- Badges con colores diferenciados (MAS POPULAR verde, NUEVO naranja, ESENCIAL gris, EMPIEZA AQUI outline)
- CTAs: todos `bg-primary text-primary-foreground`, enlace a WhatsApp con mensaje predefinido por servicio (ej: `?text=Hola, me interesa el servicio de Sitio Web Profesional`)
- Titulo: "Soluciones que transforman tu negocio" / Subtitulo: "Tecnologia de punta, resultados desde el primer mes"
- Sin precios
- Scroll-reveal animations (mismo patron existente con IntersectionObserver)

### 2. `src/pages/Index.tsx` — Reordenar secciones
Mover `ServicesSection` de su posicion actual (entre SolutionSection y HowItWorksSection) a entre HowItWorksSection y MarketsSection, justo antes de StatsSection:

```
HeroSection → ProblemSection → SolutionSection → HowItWorksSection → ServicesSection → MarketsSection → StatsSection → FinalCTA
```

Orden actual ya tiene ServicesSection entre Solution y HowItWorks. Nuevo orden: moverlo despues de HowItWorks, antes de Markets/Stats.

