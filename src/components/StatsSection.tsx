import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 72, suffix: "h", label: "Tiempo de entrega" },
  { value: 89, suffix: "%", label: "Margen de satisfacción" },
  { value: 10, suffix: "+", label: "Sitios entregados" },
  { value: 2, suffix: "×", label: "Velocidad vs sitio anterior" },
];

const StatsSection = () => (
  <section className="py-24 md:py-32 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/3" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
              <AnimatedCounter end={s.value} suffix={s.suffix} />
            </p>
            <p className="text-muted-foreground text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
