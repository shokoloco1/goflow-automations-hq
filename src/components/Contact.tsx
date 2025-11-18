import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
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
        title: "Missing Information",
        description: "Please fill in all required fields.",
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
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
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
        title: "Error",
        description: "Failed to send message. Please try again.",
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
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </div>
            <h2 className="mb-4">Request a Free Automation Audit</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Let&apos;s discuss how AI automation can transform your business operations
            </p>
          </div>
          
          {/* Contact Form */}
          <div className={`bg-card rounded-3xl p-8 md:p-12 shadow-glow border border-border/50 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
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
                  <Label htmlFor="businessName">Business Name</Label>
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
                  <Label htmlFor="email">Email *</Label>
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
                  <Label htmlFor="phone">Phone</Label>
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
                <Label htmlFor="service">What service do you need? *</Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-assistant">AI Virtual Assistant</SelectItem>
                    <SelectItem value="booking">Lead and Booking Automation</SelectItem>
                    <SelectItem value="post-sale">Post-Sale Automation</SelectItem>
                    <SelectItem value="crm">CRM Integration</SelectItem>
                    <SelectItem value="consulting">AI Consulting</SelectItem>
                    <SelectItem value="full-package">Full Automation Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Describe the process you want to automate</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your current workflow and what you'd like to automate..."
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
                {isSubmitting ? "Sending..." : "Request a Free Demo of AI Automation"}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
