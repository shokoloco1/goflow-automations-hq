import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Star, Calendar, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CaseStudy = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="case-study" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="mb-4">Success Story</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          {/* Case Study Card */}
          <div className={`relative overflow-hidden rounded-3xl shadow-glow border border-primary/20 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Gradient Background */}
            <div className="absolute inset-0 gradient-hero opacity-5" />
            
            <div className="relative p-8 md:p-12">
              {/* Company Name */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Dental Care Brisbane</span>
              </div>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8">
                In only <span className="font-semibold text-primary">30 days</span> our automation system increased new bookings by <span className="font-semibold text-secondary">34%</span>, 
                reduced no-shows by <span className="font-semibold text-secondary">60%</span>, generated <span className="font-semibold text-secondary">38</span> new 
                Google reviews and saved over <span className="font-semibold text-secondary">15 hours</span> of admin work per week.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-3xl font-semibold text-secondary">+34%</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light">New Bookings</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-3xl font-semibold text-secondary">-60%</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light">No-Shows</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-3xl font-semibold text-secondary">38</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light">New Reviews</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-secondary mr-2" />
                    <span className="text-3xl font-semibold text-secondary">15h</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light">Time Saved/Week</p>
                </div>
              </div>
              
              {/* CTA */}
              <div className="text-center">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth group"
                >
                  See Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
