import logo from "@/assets/goflow-logo.png";

const Footer = () => (
  <footer className="py-16 px-4 border-t border-border/50">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="GoFlow AI" className="h-10 w-auto mb-3" />
          <p className="text-muted-foreground text-sm">Tu negocio en el siglo 21, sin complicaciones.</p>
        </div>
        <div>
          <p className="font-display font-bold text-sm mb-3">Links</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <button onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-primary transition-colors">Servicios</button>
            <button onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-primary transition-colors">Cómo funciona</button>
            <button onClick={() => document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-primary transition-colors">Contacto</button>
          </div>
        </div>
        <div>
          <p className="font-display font-bold text-sm mb-3">Contacto</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>david@goflowaai.com</p>
            <p>+593 99 218 9290</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© 2026 GoFlowAI · Ecuador & Australia</p>
        <p>Construido con IA · Diseñado para convertir</p>
      </div>
    </div>
  </footer>
);

export default Footer;
