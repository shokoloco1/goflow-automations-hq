import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Send, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    description: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.service) {
      toast({
        title: t('contact.validation.title'),
        description: t('contact.validation.description'),
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Call the edge function to submit the inquiry
      const { data, error } = await supabase.functions.invoke('submit-contact-inquiry', {
        body: {
          fullName: formData.fullName,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          description: formData.description
        }
      });

      if (error) {
        console.error('Error submitting inquiry:', error);
        throw error;
      }

      console.log('Inquiry submitted successfully:', data);
      
      toast({
        title: t('contact.success.title'),
        description: t('contact.success.description'),
      });
      
      // Reset form
      setFormData({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        service: "",
        description: ""
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: t('contact.error.title'),
        description: t('contact.error.description'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t('contact.badge')}</span>
            </div>
            <h2 className="mb-4">{t('contact.title')}</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
          
          {/* Contact Form */}
          <div className={`bg-card rounded-3xl p-8 md:p-12 shadow-glow border border-border/50 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">{t('contact.fullName')} *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessName">{t('contact.businessName')}</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Your Business"
                    className="h-12"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact.phone')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+61 400 000 000"
                    className="h-12"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">{t('contact.service')} *</Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder={t('contact.service.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-agents">{t('services.aiAgents.title')}</SelectItem>
                    <SelectItem value="workflows">{t('services.workflows.title')}</SelectItem>
                    <SelectItem value="optimization">{t('services.optimization.title')}</SelectItem>
                    <SelectItem value="full-package">{t('contact.service.fullPackage')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">{t('contact.description')}</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={t('contact.description.placeholder')}
                  rows={5}
                  className="resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 text-lg shadow-glow hover:shadow-xl transition-smooth group"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.submitting') : t('contact.submit')}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            
            {/* What Happens Next */}
            <div className="mt-10 pt-10 border-t border-border/50">
              <h3 className="text-lg font-medium mb-6 text-center">{t('contact.whatNext')}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">1</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('contact.step1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">2</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('contact.step2')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">3</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('contact.step3')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">4</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('contact.step4')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">5</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('contact.step5')}</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground/80 mt-6 font-light italic">
                {t('contact.noObligation')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
