

# Plan: Tipografia premium + optimizacion de rendimiento

## Cambio de fuentes

Reemplazar **Syne** y **DM Sans** por una combinacion mas elegante/premium:

- **Headlines**: **Cabinet Grotesk** (via Fontshare CDN) o **General Sans** — geometrica, premium, con caracter
- **Body**: **Satoshi** o **General Sans** (regular) — limpia, moderna, profesional
- **Monospace**: Mantener **DM Mono** para precios

Dado que Cabinet Grotesk y Satoshi no estan en Google Fonts, usaremos **Fontshare** (CDN gratuito de Indian Type Foundry) o alternativamente **Plus Jakarta Sans** + **Space Grotesk** que si estan en Google Fonts y tienen un look premium.

**Propuesta concreta**: Space Grotesk (headlines) + Plus Jakarta Sans (body) — ambas en Google Fonts, carga rapida, look premium.

### Archivos a modificar:
- **`index.html`**: Cambiar URL de Google Fonts
- **`src/index.css`**: Actualizar font-family en base styles
- **`tailwind.config.ts`**: Actualizar fontFamily

## Optimizaciones de rendimiento

1. **Font loading**: Agregar `&display=swap` (ya esta) + `font-display: optional` para eliminar FOIT
2. **Preload fonts**: Agregar `<link rel="preload">` para las fuentes criticas
3. **GrainOverlay**: El SVG filter con feTurbulence es costoso en GPU. Cambiar a una imagen PNG de ruido estatico (mas ligera) o usar CSS `background-image` con un data URI tiny noise
4. **CustomCursor**: Agregar `will-change: transform` (ya lo tiene) — esta bien
5. **CSS animations**: Agregar `will-change` a los elementos con animaciones pesadas (hero mesh)
6. **Lazy sections**: Usar CSS `content-visibility: auto` en secciones debajo del fold para que el navegador no las renderice hasta que sean visibles
7. **Reducir backdrop-filter usage**: `backdrop-filter: blur()` es costoso. Limitar a Navigation y cards visibles

