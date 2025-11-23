import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, CreditCard, Settings, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const IntegrationLogos = () => {
  const { t } = useLanguage();

  const integrationCategories = [
    {
      name: t('integrations.categories.healthcare'),
      icon: Heart,
      tools: ["Cliniko", "SimplePractice", "HotDoc", "HealthEngine", "Medicare"]
    },
    {
      name: t('integrations.categories.scheduling'),
      icon: Calendar,
      tools: ["Google Calendar", "Calendly", "Acuity", "Square Appointments"]
    },
    {
      name: t('integrations.categories.communication'),
      icon: MessageSquare,
      tools: ["WhatsApp", "Instagram", "SMS/Twilio", "Facebook", "Email"]
    },
    {
      name: t('integrations.categories.payments'),
      icon: CreditCard,
      tools: ["Stripe", "Square", "PayPal", "Afterpay"]
    },
    {
      name: t('integrations.categories.crmTools'),
      icon: Settings,
      tools: ["HubSpot", "Salesforce", "Monday.com", "Slack", "Zapier"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            {t('integrations.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('integrations.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            {t('integrations.footer')}
          </p>
        </div>
      </div>
    </section>
  );
};
