import { useState, useEffect } from "react";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const ROICalculator = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  
  // Calculator inputs
  const [employees, setEmployees] = useState(5);
  const [monthlyInquiries, setMonthlyInquiries] = useState(200);
  const [avgTimePerTask, setAvgTimePerTask] = useState(10); // minutes
  const [hourlyRate, setHourlyRate] = useState(30); // AUD per hour
  
  // Calculated values
  const [hoursAutomated, setHoursAutomated] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  
  useEffect(() => {
    // Calculate hours automated per month (assuming 60% of inquiries can be automated)
    const automationRate = 0.6;
    const totalMinutes = monthlyInquiries * avgTimePerTask * automationRate;
    const hours = totalMinutes / 60;
    
    // Calculate savings
    const monthly = hours * hourlyRate;
    const yearly = monthly * 12;
    
    setHoursAutomated(Math.round(hours));
    setMonthlySavings(Math.round(monthly));
    setYearlySavings(Math.round(yearly));
  }, [employees, monthlyInquiries, avgTimePerTask, hourlyRate]);
  
  return (
    <section id="roi-calculator" className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium">{t('roi.badge')}</span>
          </div>
          <h2 className="mb-4">{t('roi.title')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('roi.subtitle')}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>
        
        {/* Calculator Card */}
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-card rounded-3xl shadow-glow border border-border/50 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left Column - Inputs */}
              <div className="space-y-8">
                <h3 className="text-xl font-semibold mb-6">{t('roi.inputs.title')}</h3>
                
                {/* Team Size */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-foreground">{t('roi.inputs.employees')}</label>
                    <span className="text-lg font-bold text-primary">{employees}</span>
                  </div>
                  <Slider
                    value={[employees]}
                    onValueChange={(val) => setEmployees(val[0])}
                    min={1}
                    max={50}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                {/* Monthly Inquiries */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-foreground">{t('roi.inputs.inquiries')}</label>
                    <span className="text-lg font-bold text-primary">{monthlyInquiries}</span>
                  </div>
                  <Slider
                    value={[monthlyInquiries]}
                    onValueChange={(val) => setMonthlyInquiries(val[0])}
                    min={50}
                    max={1000}
                    step={50}
                    className="w-full"
                  />
                </div>
                
                {/* Average Time Per Task */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-foreground">{t('roi.inputs.timePerTask')}</label>
                    <span className="text-lg font-bold text-primary">{avgTimePerTask} min</span>
                  </div>
                  <Slider
                    value={[avgTimePerTask]}
                    onValueChange={(val) => setAvgTimePerTask(val[0])}
                    min={5}
                    max={30}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                {/* Hourly Rate */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-foreground">{t('roi.inputs.hourlyRate')}</label>
                    <span className="text-lg font-bold text-primary">${hourlyRate}</span>
                  </div>
                  <Slider
                    value={[hourlyRate]}
                    onValueChange={(val) => setHourlyRate(val[0])}
                    min={20}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Right Column - Results */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">{t('roi.results.title')}</h3>
                
                {/* Results Cards */}
                <div className="space-y-4">
                  {/* Hours Saved */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-xl p-3">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{t('roi.results.hoursAutomated')}</p>
                        <p className="text-3xl font-bold text-primary">{hoursAutomated}</p>
                        <p className="text-xs text-muted-foreground mt-1">{t('roi.results.perMonth')}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Monthly Savings */}
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border border-secondary/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/20 rounded-xl p-3">
                        <DollarSign className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{t('roi.results.monthlySavings')}</p>
                        <p className="text-3xl font-bold text-secondary">${monthlySavings.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground mt-1">{t('roi.results.perMonth')}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Yearly Savings */}
                  <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{t('roi.results.yearlySavings')}</p>
                        <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          ${yearlySavings.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{t('roi.results.perYear')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('roi.cta')}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-3">{t('roi.disclaimer')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
