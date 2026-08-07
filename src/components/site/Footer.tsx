import { Facebook, Instagram, Mail, Sparkles } from "lucide-react";

const groups = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#why-websites" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Process", href: "#process" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Privacy Policy", href: "#faq" },
      { label: "Terms", href: "#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-lift">
                <Sparkles className="size-4.5" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-ink">
                Altravo<span className="text-brand">Studio</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              We help local businesses attract more customers with beautiful, fast, high-converting
              websites that work around the clock.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://facebook.com" aria-label="Facebook" className="flex size-9 items-center justify-center rounded-lg border border-border text-ink transition-all hover:-translate-y-1 hover:text-brand">
                <Facebook className="size-4" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="flex size-9 items-center justify-center rounded-lg border border-border text-ink transition-all hover:-translate-y-1 hover:text-brand">
                <Instagram className="size-4" />
              </a>
              <a href="mailto:hello@altravostudio.com" aria-label="Email" className="flex size-9 items-center justify-center rounded-lg border border-border text-ink transition-all hover:-translate-y-1 hover:text-brand">
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <h3 className="text-sm font-bold text-ink">{g.title}</h3>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-brand">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} AltravoStudio. All rights reserved.</p>
          <p>Websites that help local businesses grow.</p>
        </div>
      </div>
    </footer>
  );
}
