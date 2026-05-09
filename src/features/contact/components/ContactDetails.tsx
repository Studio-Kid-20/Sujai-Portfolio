import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/ui/Reveal";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { contactMeta, socialLinks } from "@/data/navigation";

type ContactDetailItemProps = {
  icon: string;
  label: string;
  value: ReactNode;
  accentClassName: string;
  hoverClassName: string;
  delay: number;
};

function ContactDetailItem({
  icon,
  label,
  value,
  accentClassName,
  hoverClassName,
  delay,
}: ContactDetailItemProps) {
  return (
    <Reveal delay={delay}>
      <div className="group flex items-center gap-6">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 ${accentClassName} ${hoverClassName}`}
        >
          <MaterialIcon name={icon} className="text-2xl" />
        </div>
        <div>
          <p className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">{label}</p>
          <p className="font-headline text-lg font-bold text-white transition-colors group-hover:text-inherit">{value}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function ContactDetails() {
  return (
    <>
      <div className="space-y-8 pt-4">
        <ContactDetailItem
          icon="alternate_email"
          label="Email Me"
          value={<a href={`mailto:${contactMeta.email}`}>{contactMeta.email}</a>}
          accentClassName="text-primary"
          hoverClassName="group-hover:bg-primary group-hover:text-on-primary"
          delay={0.4}
        />

        <ContactDetailItem
          icon="location_on"
          label="Base"
          value={contactMeta.location}
          accentClassName="text-secondary"
          hoverClassName="group-hover:bg-secondary group-hover:text-on-secondary"
          delay={0.5}
        />
      </div>

      <Reveal delay={0.6}>
        <div className="flex gap-4 pt-4">
          {socialLinks.slice(0, 3).map((social) => (
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-on-surface-variant transition-all hover:border-tertiary hover:text-tertiary"
              aria-label={social.label}
            >
              <MaterialIcon name={social.icon ?? "link"} className="text-2xl" />
            </motion.a>
          ))}
        </div>
      </Reveal>
    </>
  );
}
