import { Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          {/* Company Description */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg text-foreground/80 leading-relaxed font-light mb-6">
              GoFlow AI is an AI automation agency that helps businesses operate smarter, faster and with less manual work. 
              We build intelligent systems that automate communication, bookings, follow-ups, CRM tasks and customer engagement 
              across multiple channels.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              Our solutions are bilingual (English and Spanish), perfect for global companies or multicultural regions like 
              Australia, Ecuador and Chile.
            </p>
          </div>
          
          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-1">David Shaw</h3>
                  <p className="text-primary font-medium mb-2">CEO and Growth Director</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl mb-1">Lucas</h3>
                  <p className="text-secondary font-medium mb-2">CTO and Technical Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
