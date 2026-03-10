import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/goflow-logo.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"ES" | "EN">("ES");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const links = [
    { label: "Servicios", id: "servicios" },
    { label: "Precios", id: "precios" },
    { label: "Casos de Éxito", id: "testimonios" },
    { label: "Cómo funciona", id: "como-funciona" },
    { label: "Contacto", id: "cta-final" },
  ];

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
            <img src={logo} alt="GoFlow AI" className="h-10 md:h-12 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-none"
              >
                {l.label}
              </button>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center rounded-full border border-border bg-muted/50 p-0.5 text-xs">
              <button
                onClick={() => setLang("ES")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-none ${
                  lang === "ES"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("EN")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-none ${
                  lang === "EN"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="https://calendly.com/davids-goflowaai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:glow-green transition-all cursor-none"
            >
              Agendar llamada →
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
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

            {/* Language Toggle Mobile */}
            <div className="flex items-center gap-2 py-2">
              <span className="text-xs text-muted-foreground">Idioma:</span>
              <div className="flex items-center rounded-full border border-border bg-muted/50 p-0.5 text-xs">
                <button
                  onClick={() => setLang("ES")}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    lang === "ES"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLang("EN")}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    lang === "EN"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <a
              href="https://calendly.com/davids-goflowaai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-medium text-center"
            >
              Agendar llamada →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
