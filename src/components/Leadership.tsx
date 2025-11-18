import { User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Leadership = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="leadership" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="mb-4">Leadership</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          {/* CEO and Co-Founder */}
          <div className={`bg-card rounded-2xl p-10 shadow-card hover:shadow-glow transition-all duration-700 delay-150 border border-border/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl mb-2">David Shaw</h3>
                <p className="text-primary font-medium text-lg">CEO and Co-Founder</p>
              </div>
            </div>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed font-light">
              <p>
                David Shaw is a marketing and business development professional with a strong background in sales strategy, 
                client management and operational improvement across multiple industries. Throughout his career, he has led 
                commercial teams, built high-value relationships and delivered measurable results including triple-digit sales 
                growth and process optimization in competitive markets.
              </p>
              
              <p>
                His experience spans consumer goods, technology, automation and business development in both Australia and 
                Latin America. David combines strategic thinking with hands-on execution, allowing him to identify business 
                inefficiencies and transform them into practical, high-impact solutions.
              </p>
              
              <p>
                As the CEO and Co-Founder of GoFlow AI, David drives the company&apos;s global vision and leads the mission of 
                helping businesses operate smarter through intelligent automation. He focuses on connecting clients with 
                AI-powered systems that reduce manual work, improve customer experience and enable sustainable growth.
              </p>
              
              <p>
                David is known for his analytical mindset, results-driven leadership and commitment to continuous personal 
                and professional development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
