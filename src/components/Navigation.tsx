import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t("nav.problem"), id: "problema" },
    { label: t("nav.how_it_works"), id: "como-funciona" },
    { label: t("nav.service"), id: "servicio" },
    { label: t("nav.calculator"), id: "calculadora" },
    { label: t("nav.faq"), id: "faq" },
    { label: t("nav.contact"), id: "cta-final" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card bg-background/80" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-none"
          >
            <img src="/logo-full.png" alt="GoFlow AI" className="h-12 md:h-14 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {l.label}
              </button>
            ))}
            
            <div className="flex items-center gap-3 border-l border-border/50 pl-6 ml-2">
              <a
                href="https://www.linkedin.com/company/goflow-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/goflow_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <LanguageSwitcher />
            </div>

            <a
              href="#cta-final"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium pulse-glow transition-all"
            >
              {t("nav.free_audit")}
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button onClick={() => setOpen(!open)} className="p-2">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-card border-t border-border/50">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="#cta-final"
              className="block w-full bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-medium text-center"
            >
              {t("nav.free_audit")}
            </a>

            <div className="flex items-center justify-center gap-8 pt-4 border-t border-border/50">
              <a
                href="https://www.linkedin.com/company/goflow-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/goflow_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
