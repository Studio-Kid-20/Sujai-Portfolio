import type { NavItem, SocialLink } from "./types.js";

export const SITE_NAME = "Sujai";
/** All-caps wordmark in the site header / navbar. */
export const SITE_NAV_BRAND = "SUJAI";
export const SITE_TAGLINE = "Vision Into Vector";

export const HOME_HERO_BADGE = "11th-Grade Developer & Imagery Artist";
export const HOME_HERO_HEADING = "VISION INTO VECTOR. IDEAS INTO LIVE CODE.";

/** Home hero paragraph (visible under the headline). */
export const HOME_HERO_INTRO =
  "11th-grade developer and imagery artist. I bridge the gap between human imagination and digital reality, building high-impact web experiences with HTML, CSS, and JS.";

export const HOME_HERO_CTA = "Explore the Lab";

export const HOME_SKILL_PILLS = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "UI/UX",
  "Cyberpunk-inspired layouts",
  "AI-leveraged development",
];

export const ABOUT_STORY =
  "I don't believe in 'impossible' tasks. My journey started with a pencil and paper, drawing imagery from my mind. Now, I use the browser as my canvas. Currently navigating the 11th-grade CBSE curriculum while building my own brand, I focus on turning ambitious ideas into interfaces that feel bold, polished, and alive.";

export const ABOUT_HIGHLIGHTS = [
  "Started with pencil-and-paper imagination before moving into digital craft.",
  "Building a personal brand while balancing the 11th-grade CBSE curriculum.",
  "Treating the browser like a canvas for motion, structure, and atmosphere.",
];

export const EXPERIENCE_HIGHLIGHT = {
  milestone: "The Code-Commerce Marketplace",
  description:
    "Designed and built a platform dedicated to buying and selling source code. My first major full-scale deployment.",
};

export const CONTACT_INTRO =
  "If you have a build, redesign, concept, or collaboration in mind, I'd love to hear about it. I am especially drawn to projects that need both visual energy and clean front-end execution.";

export const FOOTER_BLURB =
  "Imagery-first thinking, browser-built execution, and a student builder mindset focused on shipping work that feels alive.";

/** Short browser title for the home route (tab + SEO). */
export const HOME_DOCUMENT_TITLE = "Sujai | Vision Into Vector";

/** Page-specific hero / browser titles (one phrase per main page). */
export const PAGE_TAGLINE_BY_PATH: Record<string, string> = {
  "/": HOME_DOCUMENT_TITLE,
  "/about": ABOUT_STORY,
  "/projects": "From first deployments to lab experiments, each build is part of learning how to turn imagination into working software.",
  "/designs": "A visual lab for interface moods, poster energy, motion studies, and imagery-driven layout systems.",
};

export function documentTitleForPath(pathname: string): string {
  const exact = PAGE_TAGLINE_BY_PATH[pathname];
  if (exact) return exact;
  const segment = pathname.replace(/^\//, "").split("/")[0];
  if (!segment) return HOME_DOCUMENT_TITLE;
  const label =
    segment === "skills"
      ? "Skills"
      : segment === "contact"
        ? "Contact"
        : segment === "privacy"
          ? "Privacy Policy"
          : segment === "terms"
            ? "Terms of Service"
            : segment.charAt(0).toUpperCase() + segment.slice(1);
  return `${SITE_NAME} | ${label}`;
}

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

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Studio-Kid-20", icon: "link" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dsujai/", icon: "share" },
];

export const contactMeta = {
  email: "ds.sujais2010@gmail.com",
  location: "India / Remote-friendly",
};

export const copyrightLine = "© 2026 Sujai. Built with React, TypeScript, and Tailwind.";
