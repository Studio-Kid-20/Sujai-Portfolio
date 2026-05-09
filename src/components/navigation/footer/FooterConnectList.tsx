import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { contactMeta, socialLinks } from "@/data/navigation";

type FooterConnectListProps = {
  compact?: boolean;
};

export function FooterConnectList({ compact = false }: FooterConnectListProps) {
  if (compact) {
    return (
      <ul className="space-y-4">
        <li>
          <a
            href={`mailto:${contactMeta.email}`}
            className="flex translate-y-[-2px] items-center gap-2 text-slate-500 transition-transform hover:text-cyan-400 light:hover:text-violet-600"
          >
            {contactMeta.email}
          </a>
        </li>
        {socialLinks.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              className="flex translate-y-[-2px] items-center gap-2 text-slate-500 transition-transform hover:text-cyan-400 light:hover:text-violet-600"
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex flex-col space-y-2">
      <a
        href={`mailto:${contactMeta.email}`}
        className="group flex items-center gap-2 font-jersey20 text-sm text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600"
      >
        <MaterialIcon name="alternate_email" className="text-lg transition-transform group-hover:scale-110" />
        {contactMeta.email}
      </a>
      {socialLinks.map((social) => (
        <a
          key={social.href}
          href={social.href}
          className="group flex items-center gap-2 font-jersey20 text-sm text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600"
          target="_blank"
          rel="noreferrer"
        >
          <MaterialIcon name={social.icon ?? "link"} className="text-lg transition-transform group-hover:scale-110" />
          {social.label}
        </a>
      ))}
    </div>
  );
}
