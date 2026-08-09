import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const schema = z.object({
  name: z.string().trim().nonempty({ message: "Please enter your name" }).max(100),
  business: z.string().trim().max(120).optional(),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  phone: z.string().trim().max(30).optional(),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Please tell us a little about your project" })
    .max(1000, { message: "Message must be under 1000 characters" }),
});

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Juan Dela Cruz", required: true },
  { name: "business", label: "Business Name", type: "text", placeholder: "Sunrise Café", required: false },
  { name: "email", label: "Email", type: "email", placeholder: "you@business.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+63 992 058 6534", required: false },
] as const;

const details = [
  { icon: Mail, label: "Email", value: "altravostudio@gmail.com", href: "mailto:altravostudio@gmail.com" },
  { icon: Phone, label: "Phone", value: "+63 992 058 6534", href: "tel:+63992 058 6534" },
  { icon: MapPin, label: "Location", value: "Dasmariñas Cavite, Philippines — serving clients worldwide", href: undefined },
];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thanks! We'll reply within one business day.");
    }, 800);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-40 size-[26rem] rounded-full bg-primary/10 blur-3xl animate-blob" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={<>Tell us about your business</>}
          description="Share a few details and we'll come back with honest advice, a timeline, and a fixed quote — free of charge."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-mist p-7 shadow-soft sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.name}>
                    <label htmlFor={f.name} className="mb-2 block text-sm font-semibold text-ink">
                      {f.label}
                      {f.required ? <span className="text-brand"> *</span> : null}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      aria-invalid={!!errors[f.name]}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-brand focus:ring-4 focus:ring-primary/15 aria-[invalid=true]:border-destructive"
                    />
                    {errors[f.name] ? (
                      <p className="mt-1.5 text-xs text-destructive">{errors[f.name]}</p>
                    ) : null}
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                    Message<span className="text-brand"> *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1000}
                    placeholder="What kind of business do you run, and what would you like your website to do?"
                    aria-invalid={!!errors["message"]}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-brand focus:ring-4 focus:ring-primary/15 aria-[invalid=true]:border-destructive"
                  />
                  {errors["message"] ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors["message"]}</p>
                  ) : null}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-bold text-brand-foreground shadow-lift disabled:opacity-70 sm:w-auto"
              >
                {sending ? "Sending…" : "Get My Free Consultation"}
                <Send className="size-4" />
              </motion.button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-3xl border border-border bg-mist p-7 shadow-soft">
                <h3 className="text-lg font-bold text-ink">Get in touch</h3>
                <ul className="mt-5 space-y-4">
                  {details.map((d) => (
                    <li key={d.label} className="flex items-start gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground">
                        <d.icon className="size-4" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {d.label}
                        </span>
                        {d.href ? (
                          <a href={d.href} className="text-sm font-medium text-ink hover:text-brand">
                            {d.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-ink">{d.value}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <a
  href="https://www.facebook.com/profile.php?id=61592841487454"
  aria-label="AltravoStudio on Facebook"
  target="_blank"
  rel="noopener noreferrer"
  className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-ink transition-all hover:-translate-y-1 hover:text-brand"
>
  <Facebook className="size-4" />
</a>
                  <a
                    href="https://instagram.com"
                    aria-label="AltravoStudio on Instagram"
                    className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-ink transition-all hover:-translate-y-1 hover:text-brand"
                  >
                    <Instagram className="size-4" />
                  </a>
                </div>
              </div>
<div className="overflow-hidden rounded-3xl border border-border shadow-soft">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123714.82561776626!2d120.88593306544223!3d14.306302012242842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d5b87c111e25%3A0xab8cb698f840321f!2sDasmari%C3%B1as%2C%20Cavite!5e0!3m2!1sen!2sph!4v1786095180687!5m2!1sen!2sph"
  width="100%"
  height="350"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  title="AltravoStudio Location"
/>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>
);
}