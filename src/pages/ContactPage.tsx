import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import { CONTACT_INTRO, contactMeta, socialLinks } from "@/content/site";
import { submitContactForm } from "@/lib/contactSubmit";
import {
  contactFormSchema,
  contactSubjectOptions,
  type ContactFormValues,
} from "@/lib/schemas/contact";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";

export function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: "Project Inquiry",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus(null);
    const result = await submitContactForm(data);
    setStatus(result.message);
    if (result.ok) reset();
  });

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      <div className="grid items-start gap-16 lg:grid-cols-2">
        <div className="space-y-12">
          <Reveal direction="right">
            <div className="space-y-6">
              <span className="font-label text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                Get In Touch
              </span>
              <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tight text-white md:text-8xl">
                Let's build something{" "}
                <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                  alive
                </span>{" "}
                together.
              </h1>
              <p className="max-w-md text-xl leading-relaxed text-on-surface-variant">
                {CONTACT_INTRO}
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-tertiary rounded-full mt-10" />
            </div>
          </Reveal>

          <div className="space-y-8 pt-4">
            <Reveal direction="right" delay={0.4}>
              <div className="group flex items-center gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-on-primary">
                  <MaterialIcon name="alternate_email" className="text-2xl" />
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">Email Me</p>
                  <p className="font-headline text-lg font-bold text-white group-hover:text-primary transition-colors">
                    <a href={`mailto:${contactMeta.email}`}>
                      {contactMeta.email}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.5}>
              <div className="group flex items-center gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-secondary transition-all duration-500 group-hover:bg-secondary group-hover:text-on-secondary">
                  <MaterialIcon name="location_on" className="text-2xl" />
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">Base</p>
                  <p className="font-headline text-lg font-bold text-white group-hover:text-secondary transition-colors">
                    {contactMeta.location}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.6}>
            <div className="flex gap-4 pt-4">
              {socialLinks.slice(0, 3).map((s) => (
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-on-surface-variant transition-all hover:border-tertiary hover:text-tertiary"
                  aria-label={s.label}
                >
                  <MaterialIcon name={s.icon ?? "link"} className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.4}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-secondary/20 to-tertiary/20 opacity-30 blur-3xl" />
            <div className="glass-card rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-2xl">
              <form className="space-y-8" onSubmit={onSubmit} noValidate>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <label htmlFor="name" className="ml-2 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Full Name
                    </label>
                    <input
                      id="name"
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-white placeholder:text-on-surface-variant/40 transition-all focus:border-primary focus:bg-white/10 focus:ring-0"
                      {...register("name")}
                    />
                    {errors.name ? <p className="text-xs text-error ml-2">{errors.name.message}</p> : null}
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="ml-2 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-white placeholder:text-on-surface-variant/40 transition-all focus:border-primary focus:bg-white/10 focus:ring-0"
                      {...register("email")}
                    />
                    {errors.email ? <p className="text-xs text-error ml-2">{errors.email.message}</p> : null}
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="subject" className="ml-2 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-white transition-all focus:border-primary focus:bg-white/10 focus:ring-0"
                    {...register("subject")}
                  >
                    {contactSubjectOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-surface">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.subject ? <p className="text-xs text-error ml-2">{errors.subject.message}</p> : null}
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="ml-2 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your idea..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-white placeholder:text-on-surface-variant/40 transition-all focus:border-primary focus:bg-white/10 focus:ring-0"
                    {...register("message")}
                  />
                  {errors.message ? <p className="text-xs text-error ml-2">{errors.message.message}</p> : null}
                </div>
                {status ? (
                  <p className={`text-sm ml-2 ${status.includes("not configured") ? "text-tertiary" : "text-primary"}`}>
                    {status}
                  </p>
                ) : null}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-2xl bg-primary py-5 text-lg font-bold text-on-primary transition-all disabled:opacity-60"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? "Sending…" : "Send Message"}
                    <MaterialIcon name="send" className="text-xl transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-secondary/0 via-white/20 to-secondary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

