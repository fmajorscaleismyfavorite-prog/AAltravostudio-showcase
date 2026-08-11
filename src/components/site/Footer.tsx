import logo from "@/assets/logo/altravostudio-logo.png";
import { Facebook, Instagram, Mail, Sparkles } from "lucide-react";

const groups = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
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
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="AltravoStudio logo"
                suppressHydrationWarning
                className="h-10 w-auto object-contain"
              />

              <span className="text-xl font-bold text-ink">
                Altravo<span className="text-brand">Studio</span>
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              We help local businesses attract more customers with beautiful, fast, high-converting
              websites that work around the clock.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-muted-foreground transition-colors hover:text-brand"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-brand"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Email"
                className="text-muted-foreground transition-colors hover:text-brand"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-sm font-bold text-ink">{group.title}</h3>

              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-brand"
                    >
                      {link.label}
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
