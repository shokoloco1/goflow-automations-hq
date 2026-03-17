import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle } from "lucide-react";

const schema = z.object({
  fullName: z.string().trim().min(2, "Ingresa tu nombre").max(100),
  company: z.string().trim().min(2, "Ingresa el nombre de tu empresa").max(200),
  whatsapp: z.string().trim().min(7, "Ingresa tu número de WhatsApp").max(20),
  painPoint: z.string().trim().min(5, "Describe brevemente tu proceso manual").max(1000),
});

type FormData = z.infer<typeof schema>;

const FinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState("");
  const [showCalendly, setShowCalendly] = useState(false);

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

      setUserName(data.fullName.split(" ")[0]);
      setSubmitted(true);

      // Show confirmation for 2s then reveal Calendly
      setTimeout(() => setShowCalendly(true), 2000);
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
        {/* Headline */}
        <div className="text-center mb-12 scroll-reveal space-y-4">
          <h2>
            ¿Cuántas horas pierde tu equipo{" "}
            <span className="text-primary">esta semana?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            En 20 minutos analizamos tus procesos y te digo exactamente qué puedes automatizar y cuánto tiempo recuperas. Sin compromiso.
          </p>
        </div>

        {/* Lead form */}
        {!submitted && (
          <div
            className="scroll-reveal rounded-2xl p-6 md:p-8 mb-8"
            style={{
              background: "#1A1A1A",
              border: "1px solid #2A2A2A",
              transitionDelay: "0.15s",
            }}
          >
            <p className="text-center text-sm mb-6" style={{ color: "#888888" }}>
              Antes de agendar, cuéntanos sobre tu empresa.<br />
              Así la llamada de 20 min es 100% útil para ti.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel style={{ color: "#888888", fontSize: "0.8rem" }}>Nombre completo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Tu nombre"
                            className="h-12 rounded-lg focus-visible:ring-primary"
                            style={{ background: "#0D0D0D", borderColor: "#333333" }}
                            {...field}
                          />
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
                        <FormLabel style={{ color: "#888888", fontSize: "0.8rem" }}>Empresa</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nombre de tu empresa"
                            className="h-12 rounded-lg focus-visible:ring-primary"
                            style={{ background: "#0D0D0D", borderColor: "#333333" }}
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
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "#888888", fontSize: "0.8rem" }}>WhatsApp</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+593 99 999 9999"
                          className="h-12 rounded-lg focus-visible:ring-primary"
                          style={{ background: "#0D0D0D", borderColor: "#333333" }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="painPoint"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={{ color: "#888888", fontSize: "0.8rem" }}>
                        ¿Cuál es el proceso manual que más tiempo le cuesta a tu equipo?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ej: cotizaciones por WhatsApp, seguimiento de pedidos, reportes en Excel..."
                          className="min-h-[100px] rounded-lg focus-visible:ring-primary resize-none"
                          style={{ background: "#0D0D0D", borderColor: "#333333" }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-base font-bold text-white rounded-lg transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #00C2FF 0%, #7B2FFF 100%)",
                  }}
                >
                  {isSubmitting ? "Enviando..." : "Agendar auditoría gratuita →"}
                </Button>
              </form>
            </Form>
          </div>
        )}

        {/* Confirmation message */}
        {submitted && !showCalendly && (
          <div className="rounded-2xl p-6 mb-8 flex items-center gap-4 animate-fade-in" style={{ background: "rgba(0,194,255,0.1)", border: "1px solid rgba(0,194,255,0.3)" }}>
            <CheckCircle className="h-6 w-6 text-primary shrink-0" />
            <p className="text-foreground font-medium">
              ✓ Perfecto {userName}. Selecciona el horario que mejor te funcione.
            </p>
          </div>
        )}

        {/* Calendly embed — revealed after form submit */}
        {submitted && showCalendly && (
          <div className="animate-fade-in">
            <div className="rounded-2xl p-4 mb-4 flex items-center gap-3" style={{ background: "rgba(0,194,255,0.1)", border: "1px solid rgba(0,194,255,0.3)" }}>
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <p className="text-foreground text-sm font-medium">
                ✓ Perfecto {userName}. Selecciona el horario que mejor te funcione.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden bg-card border border-border">
              <iframe
                src="https://calendly.com/davids-goflowaai/30min"
                width="100%"
                height="660"
                frameBorder="0"
                title="Agendar diagnóstico gratuito"
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* Calendly hidden before submit */}
        {!submitted && (
          <div className="scroll-reveal rounded-2xl overflow-hidden bg-card border border-border opacity-30 pointer-events-none" style={{ transitionDelay: "0.2s" }}>
            <div className="flex items-center justify-center py-16 text-muted-foreground text-sm">
              <span>👆 Completa el formulario para ver horarios disponibles</span>
            </div>
          </div>
        )}

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
