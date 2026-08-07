const brands = [
  "Sunrise Café",
  "Bella Cucina",
  "Northgate Dental",
  "FadeHouse Barbers",
  "Sierra Realty",
  "Ironwood Gym",
  "Azure Bay Resort",
  "QuickFix Auto",
  "Bloom Salon",
  "Harbor Construction",
];

export function TrustedBy() {
  return (
    <section aria-label="Businesses we work with" className="border-y border-border bg-background py-10">
      <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
        Trusted by local businesses across every industry
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-mist px-6 py-3.5 text-sm font-semibold text-ink/80 transition-colors hover:border-brand/40 hover:text-brand"
            >
              <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-brand text-[11px] font-bold text-brand-foreground">
                {b.slice(0, 1)}
              </span>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
