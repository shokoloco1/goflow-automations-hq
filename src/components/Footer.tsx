import { Sparkles, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/goflow-logo.png";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };
  
  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Column 1 - Logo & Slogan */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <img src={logo} alt="GoFlow AI" className="h-12 w-auto opacity-90" />
              </div>
              <div className="inline-flex items-center gap-2 text-white/70 mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-light">{t('hero.badge')}</span>
              </div>
            </div>
            
            {/* Column 2 - Contact */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-white/70 text-sm">
                <p>goflowaai.com</p>
                <p>davids@goflowaai.com</p>
              </div>
            </div>
            
            {/* Column 3 - Language Switch */}
            <div className="text-center md:text-right">
              <LanguageSwitch />
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => handleSocialClick('https://linkedin.com/company/goflow-ai')}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-smooth cursor-pointer flex items-center justify-center group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => handleSocialClick('https://www.instagram.com/goflow_ai?igsh=MXZ1bHh2aTZ3MjI3cw%3D%3D&utm_source=qr')}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-smooth cursor-pointer flex items-center justify-center group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => handleSocialClick('https://www.facebook.com/profile.php?id=61583835790870')}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 transition-smooth cursor-pointer flex items-center justify-center group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          {/* Copyright & Links */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-sm text-white/60 font-light mb-2">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <div className="flex justify-center gap-4 text-xs text-white/50">
              <a href="#" className="hover:text-white/80 transition-smooth">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white/80 transition-smooth">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
