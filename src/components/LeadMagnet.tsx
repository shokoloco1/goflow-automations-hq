import { useState, useEffect } from "react";
import { X, Download, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const LeadMagnet = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    t('leadMagnet.benefits.1'),
    t('leadMagnet.benefits.2'),
    t('leadMagnet.benefits.3'),
    t('leadMagnet.benefits.4')
  ];

  useEffect(() => {
    const handleExit = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleExit);
    return () => document.removeEventListener("mouseleave", handleExit);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const { data, error } = await supabase.functions.invoke('submit-lead-magnet', {
        body: { email }
      });

      if (error) {
        console.error('Error submitting lead magnet:', error);
        toast.error('Error al enviar. Por favor intenta de nuevo.');
        return;
      }

      console.log('Lead magnet submitted successfully:', data);
      setIsSubmitted(true);
      toast.success(t('leadMagnet.successMessage'));
      
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar. Por favor intenta de nuevo.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="max-w-lg w-full p-8 relative shadow-elegant">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="text-center">
              <Download className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-light mb-2">{t('leadMagnet.headline')}</h3>
              <p className="text-xl text-primary font-semibold mb-4">
                {t('leadMagnet.subheadline')}
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder={t('leadMagnet.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-lg"
              />
              <Button type="submit" className="w-full text-lg py-6">
                {t('leadMagnet.cta')}
              </Button>
            </form>

            <p className="text-xs text-center text-muted-foreground">
              {t('leadMagnet.privacy')}
            </p>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <CheckCircle2 className="w-20 h-20 mx-auto text-primary" />
            <h3 className="text-2xl font-semibold">{t('leadMagnet.thankYou')}</h3>
            <p className="text-muted-foreground">{t('leadMagnet.checkEmail')}</p>
          </div>
        )}
      </Card>
    </div>
  );
};
