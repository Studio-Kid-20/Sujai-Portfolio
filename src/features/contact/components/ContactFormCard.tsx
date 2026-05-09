import { motion } from "framer-motion";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

import { Reveal } from "@/components/ui/Reveal";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { CONTACT_PAGE_COPY } from "@/data/pages/contact";
import type { ContactFormValues } from "@/features/contact/contact.schema";

type ContactFormCardProps = {
  errors: FieldErrors<ContactFormValues>;
  isSubmitting: boolean;
  register: UseFormRegister<ContactFormValues>;
  status: string | null;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

type FieldProps = {
  error?: string;
  label: string;
  children: React.ReactNode;
};

function ContactField({ error, label, children }: FieldProps) {
  return (
    <div className="space-y-3">
      <label className="ml-2 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
        {label}
      </label>
      {children}
      {error ? <p className="ml-2 text-xs text-error">{error}</p> : null}
    </div>
  );
}

export function ContactFormCard({
  errors,
  isSubmitting,
  register,
  status,
  onSubmit,
}: ContactFormCardProps) {
  return (
    <Reveal delay={0.4}>
      <div className="relative">
        <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-secondary/20 to-tertiary/20 opacity-30 blur-3xl" />
        <div className="glass-card rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-2xl">
          <form className="space-y-8" onSubmit={onSubmit} noValidate>
            <div className="grid gap-8 md:grid-cols-2">
              <ContactField error={errors.name?.message} label="Full Name">
                <input
                  id="name"
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-white placeholder:text-on-surface-variant/40 transition-all focus:border-primary focus:bg-white/10 focus:ring-0"
                  {...register("name")}
                />
              </ContactField>

              <ContactField error={errors.email?.message} label="Email Address">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-white placeholder:text-on-surface-variant/40 transition-all focus:border-primary focus:bg-white/10 focus:ring-0"
                  {...register("email")}
                />
              </ContactField>
            </div>

            <ContactField error={errors.subject?.message} label="Subject">
              <select
                id="subject"
                className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-white transition-all focus:border-primary focus:bg-white/10 focus:ring-0"
                {...register("subject")}
              >
                {CONTACT_PAGE_COPY.subjectOptions.map((option) => (
                  <option key={option} value={option} className="bg-surface">
                    {option}
                  </option>
                ))}
              </select>
            </ContactField>

            <ContactField error={errors.message?.message} label="Your Message">
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your idea..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-white placeholder:text-on-surface-variant/40 transition-all focus:border-primary focus:bg-white/10 focus:ring-0"
                {...register("message")}
              />
            </ContactField>

            {status ? (
              <p className={`ml-2 text-sm ${status.includes("not configured") ? "text-tertiary" : "text-primary"}`}>
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
  );
}
