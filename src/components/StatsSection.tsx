const stats = [
  { value: "72h", label: "Entrega de landing page" },
  { value: "5 días", label: "Sitio web completo" },
  { value: "$450 USD", label: "Landing page Ecuador" },
  { value: "10×", label: "Vs. agencia tradicional" },
];

const StatsSection = () => (
  <section className="py-24 md:py-32 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/3" />
    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              {s.value}
            </p>
            <p className="text-muted-foreground text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
