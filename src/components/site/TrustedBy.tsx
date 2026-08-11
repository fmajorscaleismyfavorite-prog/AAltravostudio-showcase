const industries = [
  "Restaurants",
  "Barbershops",
  "Beauty & Wellness",
  "Cafés",
  "Dental Clinics",
  "Real Estate",
  "Fitness",
  "Local Services",
];

export function TrustedBy() {
  return (
    <section className="overflow-hidden py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Industries We Serve
          </p>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Websites designed for businesses like yours
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We create modern online experiences for local businesses across different industries —
            helping them look professional, get found online, and turn visitors into customers.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-2xl border border-border bg-mist px-5 py-3 text-sm font-semibold text-ink/80 transition-all hover:-translate-y-1 hover:border-brand/40 hover:text-brand"
            >
              {industry}
            </span>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Sample projects created by AltravoStudio
        </p>
      </div>
    </section>
  );
}
