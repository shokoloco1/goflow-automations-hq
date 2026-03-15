import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle } from "lucide-react";

const painOptions = [
  "Cotizaciones y seguimiento manual",
  "Pedidos por WhatsApp sin orden",
  "Facturación y cobranza lenta",
  "Reportes que toman horas armar",
  "Otro",
] as const;

const schema = z.object({
  fullName: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  company: z.string().trim().min(2, "Ingresa el nombre de tu empresa").max(200),
  whatsapp: z.string().trim().min(7, "Ingresa tu número de WhatsApp").max(20),
  painPoint: z.string().min(1, "Selecciona una opción"),
});

type FormData = z.infer<typeof schema>;

const FinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", company: "", whatsapp: "", painPoint: "" },
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    el.querySelectorAll(".scroll-reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-diagnostic-lead", {
        body: data,
      });
      if (error) throw error;
      setSubmitted(true);
      toast({
        title: "¡Listo! Ahora agenda tu diagnóstico 👇",
        description: "Selecciona el horario que mejor te funcione.",
      });
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
    <section
      id="cta-final"
      ref={ref}
      className="py-24 md:py-32 px-4"
      style={{ background: "linear-gradient(180deg, hsl(0 0% 4%) 0%, hsl(262 100% 8%) 100%)" }}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 scroll-reveal space-y-4">
          <h2>
            ¿Cuántas horas pierde tu equipo{" "}
            <span className="text-primary">esta semana?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            En 20 minutos te digo exactamente qué puedes automatizar y cuánto tiempo recuperas. Sin compromiso.
          </p>
        </div>

        {/* Step 1: Lead form */}
        {!submitted && (
          <div className="scroll-reveal rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 p-6 md:p-8 mb-8 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)]" style={{ transitionDelay: "0.15s" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
              <h3 className="text-lg font-semibold text-foreground">Cuéntanos sobre tu empresa</h3>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Tu nombre" className="bg-muted/50 border-border h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Nombre de tu empresa" className="bg-muted/50 border-border h-12" {...field} />
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

                <FormField
                  control={form.control}
                  name="painPoint"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-muted-foreground text-sm mb-3 block">¿Cuál es tu proceso manual más costoso?</Label>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                        >
                          {painOptions.map((option) => (
                            <Label
                              key={option}
                              htmlFor={`pain-${option}`}
                              className={`flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition-all ${
                                field.value === option
                                  ? "border-primary bg-primary/10 text-foreground"
                                  : "border-border bg-muted/30 text-muted-foreground hover:border-primary/40"
                              }`}
                            >
                              <RadioGroupItem value={option} id={`pain-${option}`} />
                              <span className="text-sm">{option}</span>
                            </Label>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto h-12 px-8 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                >
                  {isSubmitting ? "Enviando..." : (
                    <>Continuar y agendar diagnóstico <ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        )}

        {/* Success message */}
        {submitted && (
          <div className="scroll-reveal visible rounded-2xl bg-primary/10 border border-primary/30 p-5 mb-8 flex items-center gap-4">
            <CheckCircle className="h-6 w-6 text-primary shrink-0" />
            <div>
              <p className="text-foreground font-semibold">¡Datos recibidos!</p>
              <p className="text-muted-foreground text-sm">Ahora selecciona un horario para tu diagnóstico gratuito de 20 minutos.</p>
            </div>
          </div>
        )}

        {/* Step 2: Calendly (always visible after submit, or show with step label) */}
        <div className={`scroll-reveal rounded-2xl overflow-hidden bg-card border border-border ${!submitted ? "opacity-40 pointer-events-none" : ""}`} style={{ transitionDelay: "0.2s" }}>
          {submitted ? null : (
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none" />
          )}
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
            <h3 className="text-lg font-semibold text-foreground">Elige tu horario</h3>
          </div>
          <iframe
            src="https://calendly.com/davids-goflowaai/30min"
            width="100%"
            height="660"
            frameBorder="0"
            title="Agendar diagnóstico gratuito"
            className="w-full"
          />
        </div>

        {/* Contact info */}
        <div className="scroll-reveal text-center mt-10 space-y-2 text-sm text-muted-foreground" style={{ transitionDelay: "0.3s" }}>
          <p>📍 David Shaw · GoFlow AI · Brisbane, Australia</p>
          <p>🇪🇨 Atiendo Ecuador: 5pm–7pm hora Ecuador</p>
          <p>🇦🇺 Atiendo Australia: 9am–5pm AEST</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
