import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageSwitchProps {
  variant?: 'default' | 'compact';
}

const LanguageSwitch = ({ variant = 'default' }: LanguageSwitchProps) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 text-sm font-light transition-colors ${
            language === 'en'
              ? 'text-primary font-medium'
              : 'text-foreground/60 hover:text-foreground'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <span className="text-foreground/40">|</span>
        <button
          onClick={() => setLanguage('es')}
          className={`px-2 py-1 text-sm font-light transition-colors ${
            language === 'es'
              ? 'text-primary font-medium'
              : 'text-foreground/60 hover:text-foreground'
          }`}
          aria-label="Cambiar a Español"
        >
          ES
        </button>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
      <button
        onClick={() => setLanguage('en')}
        className={`text-sm font-light transition-colors ${
          language === 'en'
            ? 'text-white font-medium'
            : 'text-white/60 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-white/40">|</span>
      <button
        onClick={() => setLanguage('es')}
        className={`text-sm font-light transition-colors ${
          language === 'es'
            ? 'text-white font-medium'
            : 'text-white/60 hover:text-white'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitch;
