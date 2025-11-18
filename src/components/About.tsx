import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          {/* Company Description */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              GoFlow AI is an AI automation agency that helps businesses operate smarter, faster and with less manual work. 
              We build intelligent systems that automate communication, bookings, follow-ups, CRM tasks and customer engagement 
              across multiple channels.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              We specialize in creating custom AI-powered solutions that transform how businesses interact with their customers. 
              From intelligent chatbots that work 24/7 to sophisticated automation workflows that handle everything from lead 
              capture to post-sale follow-ups, we build systems that free your team from repetitive tasks and let them focus 
              on what truly matters.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              Our approach combines cutting-edge AI technology with deep understanding of business operations. We don&apos;t just 
              implement tools—we analyze your unique processes, identify bottlenecks, and design automation strategies that 
              deliver measurable results. Whether it&apos;s reducing response times, increasing booking rates, or improving customer 
              retention, we create solutions that drive real business growth.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              Our solutions are bilingual (English and Spanish), making us the perfect partner for global companies or businesses 
              operating in multicultural regions like Australia, Ecuador and Chile. We understand the nuances of serving diverse 
              markets and ensure your automation works seamlessly across languages and cultures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

