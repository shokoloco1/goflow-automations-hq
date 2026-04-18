import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Gracias = () => (
  <main className="min-h-screen flex items-center justify-center px-4 bg-background">
    <div className="max-w-xl w-full text-center space-y-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00C2FF]/15 ring-1 ring-[#00C2FF]/30">
        <CheckCircle2 className="w-8 h-8 text-[#00C2FF]" />
      </div>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
        ¡Pago recibido!
      </h1>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Gracias por confiar en GoFlow AI. En las próximas horas recibirás un
        email con el link para agendar tu sesión de onboarding.
      </p>
      <Link
        to="/"
        className="inline-block text-sm font-semibold text-white rounded-[14px] py-4 px-8 bg-gradient-to-r from-[#00C2FF] to-[#7B2FFF] hover:opacity-90 transition-all hover:shadow-[0_0_24px_rgba(0,194,255,0.35)]"
      >
        Ir al inicio
      </Link>
    </div>
  </main>
);

export default Gracias;
