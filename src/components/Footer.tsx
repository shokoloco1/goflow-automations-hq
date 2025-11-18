import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            {/* Logo and Slogan */}
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-light mb-2">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  GoFlow AI
                </span>
              </h3>
              <div className="inline-flex items-center gap-2 text-white/70">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-light">Go with the Flow powered by intelligence</span>
              </div>
            </div>
            
            {/* Social Links Placeholder */}
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-smooth cursor-pointer flex items-center justify-center">
                <span className="text-xs">LI</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-smooth cursor-pointer flex items-center justify-center">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-smooth cursor-pointer flex items-center justify-center">
                <span className="text-xs">FB</span>
              </div>
            </div>
            
            {/* Language Switch Placeholder */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <span className="text-sm font-light">EN</span>
              <span className="text-white/40">|</span>
              <span className="text-sm font-light text-white/60">ES</span>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-sm text-white/60 font-light">
              © {new Date().getFullYear()} GoFlow AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
