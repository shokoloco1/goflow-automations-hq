

# Plan: Lead Capture Form — "Auditoría Web GRATIS"

## Ubicacion
Insertar justo antes de `FinalCTA`, despues de `StatsSection`. Es el punto natural donde el usuario ya vio todo el valor y esta listo para convertir — la auditoria gratis es un paso mas suave que "Hablar con David ahora".

## Archivo nuevo: `src/components/LeadCaptureForm.tsx`

- **Urgency badge**: "🔥 Solo 3 auditorías disponibles esta semana" — badge naranja/rojo encima del titulo
- **Titulo**: "Obtén una Auditoría Web GRATIS"
- **Subtitulo**: "Analizamos tu sitio web y te decimos exactamente qué está perdiendo clientes — sin costo, sin compromiso."
- **Formulario** con 4 campos en glass-card con borde glow verde:
  - Nombre completo (text)
  - Email empresarial (email)
  - URL de tu sitio web (url)
  - WhatsApp (tel, placeholder: "+593 99 999 9999")
- **CTA**: "Quiero mi Auditoría Gratis →" — `bg-primary text-primary-foreground`, full width
- **Trust line**: "✓ Sin spam ✓ Respuesta en 24h ✓ 100% gratis"
- **On submit**: POST a `YOUR_WEBHOOK_URL` placeholder, mostrar toast de exito "¡Listo! Te contactamos en menos de 24 horas 🚀", limpiar formulario, sin reload
- **Validacion**: zod schema para los 4 campos, react-hook-form
- **Responsive**: campos stack en mobile, 2 columnas en desktop para nombre/email, url/whatsapp
- **Scroll-reveal**: mismo patron IntersectionObserver del sitio

## Archivo modificado: `src/pages/Index.tsx`
- Importar `LeadCaptureForm`
- Insertar entre `StatsSection` y `FinalCTA` con `SectionDivider`

