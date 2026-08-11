import logo from "@/assets/logo/altravostudio-logo.png";
import { Facebook, Mail } from "lucide-react";

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
      { label: "What You Can Expect", href: "#what-you-can-expect" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

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
              We help local businesses attract more customers with beautiful,
              fast, high-converting websites that work around the clock.
            </p>

            {/* Social & Contact Icons */}
            <div className="mt-6 flex items-center gap-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61592841487454"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit AltravoStudio on Facebook"
                className="text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-brand"
              >
                <Facebook className="h-5 w-5" />
              </a>

              {/* Email */}
              <a
                href="mailto:altravostudio@gmail.com"
                aria-label="Email AltravoStudio"
                className="text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-brand"
              >
                <Mail className="h-5 w-5" />
              </a>

            </div>
          </div>

          {/* Navigation */}
          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-sm font-bold text-ink">
                {group.title}
              </h3>

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

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} AltravoStudio. All rights reserved.
          </p>

          <p>
            Websites that help local businesses grow.
          </p>
        </div>
      </div>
    </footer>
  );
}