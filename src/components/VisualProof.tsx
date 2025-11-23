import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, BarChart3, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const VisualProof = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("conversations");

  const chatMessages = [
    { sender: "customer", text: t('visualProof.chat.message1'), time: "2:47 PM" },
    { sender: "ai", text: t('visualProof.chat.message2'), time: "2:48 PM" },
    { sender: "customer", text: t('visualProof.chat.message3'), time: "2:49 PM" },
    { sender: "ai", text: t('visualProof.chat.message4'), time: "2:49 PM" },
    { sender: "customer", text: t('visualProof.chat.message5'), time: "2:50 PM" },
    { sender: "ai", text: t('visualProof.chat.message6'), time: "2:50 PM" }
  ];

  const beforeAfterMetrics = [
    {
      metric: t('visualProof.metrics.responseTime.label'),
      before: t('visualProof.metrics.responseTime.before'),
      after: t('visualProof.metrics.responseTime.after')
    },
    {
      metric: t('visualProof.metrics.conversionRate.label'),
      before: t('visualProof.metrics.conversionRate.before'),
      after: t('visualProof.metrics.conversionRate.after')
    },
    {
      metric: t('visualProof.metrics.noShowRate.label'),
      before: t('visualProof.metrics.noShowRate.before'),
      after: t('visualProof.metrics.noShowRate.after')
    },
    {
      metric: t('visualProof.metrics.afterHours.label'),
      before: t('visualProof.metrics.afterHours.before'),
      after: t('visualProof.metrics.afterHours.after')
    },
    {
      metric: t('visualProof.metrics.adminHours.label'),
      before: t('visualProof.metrics.adminHours.before'),
      after: t('visualProof.metrics.adminHours.after')
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            {t('visualProof.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('visualProof.subtitle')}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="conversations" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              {t('visualProof.tabs.conversations')}
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              {t('visualProof.tabs.dashboard')}
            </TabsTrigger>
            <TabsTrigger value="beforeafter" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {t('visualProof.tabs.beforeAfter')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="conversations" className="animate-fade-in">
            <Card className="p-6 max-w-2xl mx-auto bg-muted/30">
              <div className="space-y-4">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === "customer" ? "justify-end" : "justify-start"} animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        msg.sender === "customer"
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{msg.text}</p>
                      <span className="text-xs opacity-70 mt-2 block">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="dashboard" className="animate-fade-in">
            <Card className="p-8">
              <div className="text-center text-muted-foreground">
                <BarChart3 className="w-24 h-24 mx-auto mb-4 opacity-50" />
                <p className="text-lg mb-2">{t('visualProof.dashboardPreview')}</p>
                <p className="text-sm">{t('visualProof.comingSoon')}</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="beforeafter" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center text-destructive">
                  {t('visualProof.before')}
                </h3>
                <div className="space-y-4">
                  {beforeAfterMetrics.map((item, index) => (
                    <div key={index} className="pb-4 border-b last:border-b-0">
                      <div className="font-medium mb-1">{item.metric}</div>
                      <div className="text-2xl text-muted-foreground">{item.before}</div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                  {t('visualProof.after')}
                </h3>
                <div className="space-y-4">
                  {beforeAfterMetrics.map((item, index) => (
                    <div key={index} className="pb-4 border-b last:border-b-0 border-primary/20">
                      <div className="font-medium mb-1">{item.metric}</div>
                      <div className="text-2xl font-semibold text-primary">{item.after}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
