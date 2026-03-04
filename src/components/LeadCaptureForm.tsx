import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";

const schema = z.object({
  fullName: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  email: z.string().trim().email("Ingresa un email válido").max(255),
  websiteUrl: z.string().trim().url("Ingresa una URL válida (ej: https://tusitio.com)").max(500),
  whatsapp: z.string().trim().min(7, "Ingresa tu número de WhatsApp").max(20),
});

type FormData = z.infer<typeof schema>;

const WEBHOOK_URL = "YOUR_WEBHOOK_URL";

const LeadCaptureForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", email: "", websiteUrl: "", whatsapp: "" },
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast({
        title: "¡Listo! Te contactamos en menos de 24 horas 🚀",
        description: "Revisa tu email y WhatsApp para los resultados de tu auditoría.",
      });
      form.reset();
    } catch {
      toast({
        title: "Error al enviar",
        description: "Intenta de nuevo o contáctanos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="scroll-reveal py-20 md:py-28 px-4" id="auditoria">
      <div className="max-w-2xl mx-auto text-center">
        <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 text-sm px-4 py-1.5">
          🔥 Solo 3 auditorías disponibles esta semana
        </Badge>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Obtén una Auditoría Web{" "}
          <span className="text-primary">GRATIS</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Analizamos tu sitio web y te decimos exactamente qué está perdiendo clientes — sin costo, sin compromiso.
        </p>

        <div className="relative rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Nombre completo" className="bg-muted/50 border-border h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="email" placeholder="Email empresarial" className="bg-muted/50 border-border h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="websiteUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="url" placeholder="URL de tu sitio web" className="bg-muted/50 border-border h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="tel" placeholder="+593 99 999 9999" className="bg-muted/50 border-border h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                {isSubmitting ? "Enviando..." : "Quiero mi Auditoría Gratis →"}
              </Button>
            </form>
          </Form>

          <p className="text-muted-foreground text-sm mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>✓ Sin spam</span>
            <span>✓ Respuesta en 24h</span>
            <span>✓ 100% gratis</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
