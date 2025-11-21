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
          <div className="text-center mb-8">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img src={logo} alt="GoFlow AI" className="h-12 w-auto opacity-90" />
            </div>
            
            {/* Slogan */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 text-white/70">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-light">{t('hero.badge')}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-6">
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
            
            {/* Language Switch */}
            <LanguageSwitch />
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-sm text-white/60 font-light">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
