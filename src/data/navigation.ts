import type { NavItem, SocialLink } from "../types";

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/", match: "exact" },
  { label: "About", to: "/about", match: "prefix" },
  { label: "Skills", to: "/skills", match: "prefix" },
  { label: "Projects", to: "/projects", match: "prefix" },
  { label: "Designs", to: "/designs", match: "prefix" },
  { label: "Contact", to: "/contact", match: "prefix" },
];

export const footerNavLinks: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
];

export const footerResourceLinks: NavItem[] = [
  { label: "Designs", to: "/designs" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
];

export const mobileNavTabs = [
  { to: "/", label: "Home", icon: "home", end: true },
  { to: "/projects", label: "Work", icon: "grid_view", end: false },
  { to: "/skills", label: "Skills", icon: "psychology", end: false },
  { to: "/contact", label: "Contact", icon: "mail", end: false },
] as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Studio-Kid-20", icon: "link" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dsujai/", icon: "share" },
];

export const contactMeta = {
  email: "ds.sujais2010@gmail.com",
  location: "India / Remote-friendly",
};
