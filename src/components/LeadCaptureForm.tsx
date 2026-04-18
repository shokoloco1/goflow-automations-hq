import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";

const LEAD_MAGNET_PDF_URL =
  "https://res.cloudinary.com/ditxf0lfd/raw/upload/v1776479414/goflow/lead-magnets/10-procesos-automatizables-goflow-ai.pdf";

const INDUSTRIA_OPTIONS = [
  "Comercio mayorista / Distribución",
  "Retail / Tienda",
  "Servicios profesionales",
  "Restaurante / F&B",
  "Salud / Bienestar",
  "Tecnología / SaaS",
  "Otro",
] as const;

const schema = z.object({
  fullName: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  email: z.string().trim().email("Ingresa un email válido").max(255),
  industria: z.string().min(1, "Selecciona tu industria"),
});

type FormData = z.infer<typeof schema>;

const LeadCaptureForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", email: "", industria: "" },
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
      // Register lead in backend (same Supabase function — adapt server-side to handle lead magnet)
      const { error } = await supabase.functions.invoke("submit-audit-request", {
        body: {
          ...data,
          source: "lead-magnet-10-procesos",
          pdfUrl: LEAD_MAGNET_PDF_URL,
        },
      });

      if (error) throw error;

      // Open PDF immediately in new tab + show confirmation
      window.open(LEAD_MAGNET_PDF_URL, "_blank", "noopener,noreferrer");
      toast({
        title: "¡Listo! Abrimos tu guía 📘",
        description: "También te mandamos el link por email para que la tengas guardada.",
      });
      form.reset();
    } catch {
      toast({
        title: "Error al enviar",
        description: "Intenta de nuevo o escríbenos a davids@goflowaai.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="scroll-reveal py-20 md:py-28 px-4" id="guia-gratis">
      <div className="max-w-2xl mx-auto text-center">
        <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 text-sm px-4 py-1.5">
          📘 Guía gratis · 10 páginas · PDF
        </Badge>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          10 procesos que tu PyME{" "}
          <span className="text-primary">puede automatizar hoy</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Sin comprar software nuevo. Sin equipo de TI. En menos de 2 semanas. Ejemplos concretos con tiempos, herramientas y pasos para implementar.
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
                        <Input
                          placeholder="Nombre completo"
                          className="bg-muted/50 border-border h-12"
                          {...field}
                        />
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
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          className="bg-muted/50 border-border h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="industria"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-muted/50 border-border h-12">
                          <SelectValue placeholder="Tu industria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {INDUSTRIA_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                {isSubmitting ? "Enviando..." : "Descargar la guía gratis →"}
              </Button>
            </form>
          </Form>

          <p className="text-muted-foreground text-sm mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>✓ Sin spam</span>
            <span>✓ Acceso inmediato</span>
            <span>✓ 100% gratis</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
