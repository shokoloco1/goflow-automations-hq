import { Linkedin, Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/goflow-logo.png";

const services = [
  { label: "Web Growth", id: "precios" },
  { label: "AI Business Boost", id: "precios" },
  { label: "Automation Essentials", id: "precios" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => (
  <footer className="py-16 px-4 border-t border-border/50">
    <div className="container mx-auto max-w-6xl">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="GoFlow AI" className="h-10 w-auto mb-3" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Diseño web, marca e IA para negocios que quieren crecer.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/david-shaw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-none"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/goflowaai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-none"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="font-display font-bold text-sm mb-3 text-foreground">Servicios</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            {services.map((s) => (
              <button
                key={s.label}
                onClick={() => scrollTo(s.id)}
                className="block hover:text-primary transition-colors cursor-none"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Ecuador */}
        <div>
          <p className="font-display font-bold text-sm mb-3 text-foreground">🇪🇨 Ecuador</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a
              href="mailto:davids@goflowaai.com"
              className="flex items-center gap-2 hover:text-primary transition-colors cursor-none"
            >
              <Mail className="w-3.5 h-3.5" />
              davids@goflowaai.com
            </a>
            <a
              href="https://wa.me/593992189290"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors cursor-none"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp disponible
            </a>
          </div>
        </div>

        {/* Australia */}
        <div>
          <p className="font-display font-bold text-sm mb-3 text-foreground">🇦🇺 Australia</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a
              href="mailto:davids@goflowaai.com"
              className="flex items-center gap-2 hover:text-primary transition-colors cursor-none"
            >
              <Mail className="w-3.5 h-3.5" />
              davids@goflowaai.com
            </a>
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              Response within 24h
            </p>
          </div>
        </div>
      </div>

      {/* Value prop + Copyright */}
      <div className="border-t border-border/50 mt-10 pt-6 space-y-3 text-center text-xs text-muted-foreground">
        <p>Diseño web profesional entregado en días, no semanas para Ecuador y Australia</p>
        <p>© 2026 GoFlowAI · Ecuador & Australia</p>
      </div>
    </div>
  </footer>
);

export default Footer;
