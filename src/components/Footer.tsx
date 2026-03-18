import { Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/goflow-logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="GoFlow AI" className="h-10 md:h-12 w-auto" />
            <p className="text-muted-foreground text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/goflow-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/goflow.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
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
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
