import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLng = i18n.language.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(nextLng);
  };

  const isEs = i18n.language.startsWith("es");

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-[10px] md:text-xs font-bold font-mono tracking-tighter cursor-none hover:bg-transparent"
    >
      <span className={isEs ? "text-primary" : "text-muted-foreground/40"}>ES</span>
      <span className="text-muted-foreground/20 mx-1">/</span>
      <span className={!isEs ? "text-primary" : "text-muted-foreground/40"}>EN</span>
    </Button>
  );
};

export default LanguageSwitcher;
