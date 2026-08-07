import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
      >
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-lift transition-transform duration-300 group-hover:rotate-6">
            <Sparkles className="size-4.5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            Altravo<span className="text-brand">Studio</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Get Free Consultation
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-ink xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden glass xl:hidden"
          >
            <ul className="mx-auto max-w-7xl px-5 pb-6 pt-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-muted"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground"
                >
                  Get Free Consultation
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
