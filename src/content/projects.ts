import type { DesignTile, Project, SkillCategory } from "./types";

export const devProjects: Project[] = [
  {
    id: "marketplace",
    title: "The Code-Commerce Marketplace",
    description:
      "Designed and built a platform dedicated to buying and selling source code. This was the first full-scale deployment in my portfolio journey and a big step in learning how product ideas become working experiences.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    imageSrc: "/assets/project-marketplace.jpg",
    imageAlt: "Marketplace-style dashboard preview with polished card layouts",
    liveUrl: "mailto:ds.sujais2010@gmail.com?subject=Code-Commerce%20Marketplace%20Demo",
  },
  {
    id: "vision-into-vector",
    title: "Vision Into Vector",
    description:
      "My personal portfolio system, built to merge imagery, motion, and front-end craft into a single browser experience. It acts as both a showcase and a testing ground for new layout ideas.",
    tags: ["React", "Tailwind", "Vite"],
    imageSrc: "/assets/project-landing.jpg",
    imageAlt: "Immersive landing page concept with layered gradients and sharp typography",
    liveUrl: "/",
    repoUrl: "https://github.com/Studio-Kid-20",
    repoLabel: "GitHub Profile",
  },
  {
    id: "ui-lab",
    title: "Cyberpunk UI Experiments",
    description:
      "A running set of interface studies where I test bold color systems, futuristic layout rhythms, and high-contrast motion ideas before they become part of larger builds.",
    tags: ["UI/UX", "Creative Coding", "Motion"],
    imageSrc: "/assets/project-calculator.jpg",
    imageAlt: "Experimental interface study with neon accents and bold contrast",
    liveUrl: "/designs",
  },
];

export const designTiles: DesignTile[] = [
  {
    id: "concept-frames",
    variant: "hero",
    label: "Visual Process",
    title: "Concept Frames",
    subtitle:
      "These studies are where sketchbook energy starts turning into interface language. I explore composition, depth, and lighting before the code phase begins so the final build already has a strong atmosphere.",
    imageSrc: "/assets/design-fintech.jpg",
    imageAlt: "Concept interface imagery on a laptop screen",
  },
  {
    id: "marketplace-flows",
    variant: "wide",
    label: "System Thinking",
    title: "Marketplace Flows",
    subtitle:
      "Flow mapping helps me turn ambitious ideas into something navigable. This kind of work focuses on structure first, making sure browsing, selling, and discovery feel clear before visual polish takes over.",
    imageSrc: "/assets/design-blueprints.jpg",
    imageAlt: "Blueprint-inspired design references laid out on a desk",
  },
  {
    id: "poster-energy",
    variant: "small",
    label: "",
    title: "Poster Energy",
    subtitle: "Identity Moods",
    imageSrc: "/assets/design-brand.jpg",
    imageAlt: "Abstract gradients and geometric forms with strong poster energy",
  },
  {
    id: "motion-drafts",
    variant: "gradient",
    label: "",
    title: "Motion Drafts",
    subtitle: "Layout Rhythm Tests",
    imageSrc: "/assets/design-motion.jpg",
    imageAlt: "Neon-lit experimental scene suggesting motion and digital rhythm",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "web-core",
    title: "Web Core",
    icon: "web",
    accent: "primary",
    bars: [
      { name: "HTML5", percent: 95 },
      { name: "CSS3", percent: 93 },
      { name: "JavaScript (ES6+)", percent: 88 },
    ],
  },
  {
    id: "creative-stack",
    title: "Creative Stack",
    icon: "draw",
    accent: "secondary",
    bars: [
      { name: "UI/UX", percent: 86 },
      { name: "Cyberpunk-inspired layouts", percent: 91 },
      { name: "AI-leveraged development", percent: 84 },
    ],
  },
  {
    id: "workflow",
    title: "Workflow",
    icon: "rocket_launch",
    accent: "tertiary",
    tools: [
      { name: "Rapid prototyping", icon: "bolt" },
      { name: "Responsive layouts", icon: "devices" },
      { name: "Visual storytelling", icon: "auto_awesome" },
      { name: "Self-driven shipping", icon: "flag" },
    ],
  },
];
