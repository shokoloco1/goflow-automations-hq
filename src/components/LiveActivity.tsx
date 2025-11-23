import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Phone, Bot, Clock, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LiveActivity = () => {
  const { t } = useLanguage();
  const [callsHandled, setCallsHandled] = useState(127);
  const [activeAgents] = useState(52);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCallsHandled(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Check localStorage for user preference
    const savedVisibility = localStorage.getItem('liveActivityVisible');
    if (savedVisibility !== null) {
      setIsVisible(savedVisibility === 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('liveActivityVisible', 'false');
  };

  if (!isVisible) return null;

  return (
    <Card className="fixed bottom-6 right-6 p-4 shadow-elegant z-50 max-w-xs animate-fade-in hidden lg:block">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              {t('liveActivity.title')}
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>
          <button
            onClick={handleClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted/50 rounded"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{t('liveActivity.callsToday')}</div>
              <div className="text-2xl font-bold text-primary">{callsHandled}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-secondary/10">
              <Bot className="w-4 h-4 text-secondary" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{t('liveActivity.activeAgents')}</div>
              <div className="text-2xl font-bold">{activeAgents}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 border-t">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <div className="text-xs text-muted-foreground">
              {t('liveActivity.lastSignup')}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
