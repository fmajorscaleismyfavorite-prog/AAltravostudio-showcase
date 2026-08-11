import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo/altravostudio-logo.png";

const links = [
  { label: "About", href: "#why-websites" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "What You Can Expect", href: "#what-you-can-expect" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
        (scrolled ? "glass shadow-soft" : "border-b border-transparent bg-transparent")
      }
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          onClick={handleNavClick}
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-ink"
        >
          <img
            src={logo}
            alt="AltravoStudio"
            suppressHydrationWarning
            className="h-9 w-auto scale-180 object-contain"
          />

          <span>
            Altravo<span className="text-brand">Studio</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={handleNavClick}
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Get Free Consultation
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-ink xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="glass xl:hidden">
          <ul className="mx-auto max-w-7xl px-5 pb-6 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink transition-all duration-300 hover:bg-muted hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground"
              >
                Get Free Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
