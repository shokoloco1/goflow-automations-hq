import { 
  Stethoscope, 
  Bone, 
  Activity, 
  Apple, 
  Dumbbell, 
  Utensils, 
  GraduationCap, 
  Briefcase,
  Building2
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  { icon: Stethoscope, name: "Dental Clinics" },
  { icon: Bone, name: "Chiropractors" },
  { icon: Activity, name: "Physiotherapists" },
  { icon: Apple, name: "Nutritionists" },
  { icon: Dumbbell, name: "Gyms & Wellness Centers" },
  { icon: Utensils, name: "Restaurants" },
  { icon: GraduationCap, name: "Coaches & Consultants" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Building2, name: "Small & Medium Businesses" }
];

const Industries = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="industries" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4">Industries We Serve</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        {/* Industries Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className={`group bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-700 border border-border/50 hover:border-primary/30 text-center hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-medium">{industry.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
