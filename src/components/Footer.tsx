import { Linkedin } from "lucide-react";
import logo from "@/assets/goflow-logo.png";

const Footer = () => (
  <footer className="py-12 px-4 border-t border-border/50">
    <div className="container mx-auto max-w-4xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GoFlow AI" className="h-8 w-auto" />
          <p className="text-muted-foreground text-sm">
            Automatizamos procesos para que tu negocio venda más.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/david-shaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://goflowai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            goflowai.com
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground mt-8">
        © 2026 GoFlow AI · Brisbane, Australia
      </div>
    </div>
  </footer>
);

export default Footer;
