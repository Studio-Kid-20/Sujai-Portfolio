import { Link } from "react-router-dom";

import type { NavItem } from "@/types";

type FooterLinkListProps = {
  compact?: boolean;
  links: NavItem[];
};

export function FooterLinkList({ compact = false, links }: FooterLinkListProps) {
  const className = "text-slate-500 transition-colors hover:text-cyan-400 light:hover:text-violet-600";

  if (compact) {
    return (
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className={className}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex flex-col space-y-2">
      {links.map((link) => (
        <Link key={link.to} to={link.to} className={`font-jersey20 text-sm ${className}`}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
