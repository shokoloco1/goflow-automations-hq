import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const ComparisonTable = () => {
  const { t } = useLanguage();

  const comparisonData = [
    {
      feature: t('comparison.features.setupTime'),
      diy: t('comparison.diy.setupTime'),
      goflow: t('comparison.goflow.setupTime'),
      winner: "goflow"
    },
    {
      feature: t('comparison.features.technicalSkills'),
      diy: t('comparison.diy.technicalSkills'),
      goflow: t('comparison.goflow.technicalSkills'),
      winner: "goflow"
    },
    {
      feature: t('comparison.features.maintenance'),
      diy: t('comparison.diy.maintenance'),
      goflow: t('comparison.goflow.maintenance'),
      winner: "goflow"
    },
    {
      feature: t('comparison.features.whenBreaks'),
      diy: t('comparison.diy.whenBreaks'),
      goflow: t('comparison.goflow.whenBreaks'),
      winner: "goflow"
    },
    {
      feature: t('comparison.features.optimization'),
      diy: t('comparison.diy.optimization'),
      goflow: t('comparison.goflow.optimization'),
      winner: "goflow"
    },
    {
      feature: t('comparison.features.integration'),
      diy: t('comparison.diy.integration'),
      goflow: t('comparison.goflow.integration'),
      winner: "goflow"
    },
    {
      feature: t('comparison.features.resultsTimeline'),
      diy: t('comparison.diy.resultsTimeline'),
      goflow: t('comparison.goflow.resultsTimeline'),
      winner: "goflow"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('comparison.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">{t('comparison.featureColumn')}</th>
                    <th className="text-center p-4 font-semibold">{t('comparison.diyColumn')}</th>
                    <th className="text-center p-4 font-semibold bg-primary/10">
                      <span className="text-primary font-bold">GoFlow AI</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-t hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          {row.winner === "goflow" && (
                            <X className="w-5 h-5 text-destructive flex-shrink-0" />
                          )}
                          <span className="text-sm">{row.diy}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center bg-primary/5">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">{row.goflow}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-muted/30 border-t">
              <p className="text-center text-sm text-muted-foreground italic">
                {t('comparison.bottomLine')}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
