

# Plan: Eliminar todos los precios del sitio

Remover todas las referencias a precios ($300, $500, "A medida", etc.) de las siguientes secciones, reemplazando con mensajes orientados a la acción (contactar por WhatsApp).

## Cambios por archivo

### `src/components/HeroSection.tsx`
- Cambiar headline de "Tu página web / lista en 72 horas / por $300." a algo como "Tu página web / lista en 72 horas / sin complicaciones."

### `src/components/SolutionSection.tsx`
- Cambiar "En 72 horas. Por $300." → "En 72 horas. Sin complicaciones."

### `src/components/ServicesSection.tsx`
- Eliminar la propiedad `price` de todas las cards y su renderizado
- Mantener subtítulos, listas y CTAs

### `src/components/MarketsSection.tsx`
- Eliminar las líneas de precio "$300 USD" y "$300 USD · ~$480 AUD" de ambos portales
- Reemplazar con CTA tipo "Escríbenos para una cotización" o simplemente dejar sin precio

### `src/components/StatsSection.tsx`
- Reemplazar el stat "$300 / Precio fijo, sin sorpresas" por otro dato relevante (ej: "+50 sitios entregados" o "24h soporte")

