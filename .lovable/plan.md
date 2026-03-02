

# Plan: Actualizar meta tags OG y Twitter para eliminar precios

El problema es que las etiquetas Open Graph y Twitter Card en `index.html` todavía muestran "$300". Esto es lo que aparece como preview cuando compartes el link en WhatsApp, LinkedIn, etc.

## Cambios en `index.html`

### Líneas a modificar:
- **Línea 19** `og:title`: "GoFlow AI | Tu página web en 72 horas por $300" → "GoFlow AI | Diseño web, IA y automatización para tu negocio"
- **Línea 20** `og:description`: Eliminar "$300" → "Creamos tu sitio web profesional en 72 horas. Automatización e inteligencia artificial para negocios que quieren crecer."
- **Línea 24** `twitter:title`: Mismo cambio que og:title
- **Línea 25** `twitter:description`: Mismo cambio que og:description

### Nota importante
Después de publicar, las plataformas (WhatsApp, LinkedIn, etc.) cachean las previews. Puede tomar tiempo en actualizarse o necesitar que se limpie el caché manualmente.

