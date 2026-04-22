import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicSpritePath = join(root, "public/assets/icons/material-icons.svg");
const archiveDir = join(root, "assets/icons");

const common = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';

const icons = {
  home: `
    <path ${common} d="M4 11.5L12 4l8 7.5" />
    <path ${common} d="M6 10.75V20h12v-9.25" />
    <path ${common} d="M10 20v-6h4v6" />
  `,
  grid_view: `
    <rect ${common} x="4" y="4" width="4.5" height="4.5" rx="1" />
    <rect ${common} x="9.75" y="4" width="4.5" height="4.5" rx="1" />
    <rect ${common} x="15.5" y="4" width="4.5" height="4.5" rx="1" />
    <rect ${common} x="4" y="9.75" width="4.5" height="4.5" rx="1" />
    <rect ${common} x="9.75" y="9.75" width="4.5" height="4.5" rx="1" />
    <rect ${common} x="15.5" y="9.75" width="4.5" height="4.5" rx="1" />
    <rect ${common} x="4" y="15.5" width="4.5" height="4.5" rx="1" />
    <rect ${common} x="9.75" y="15.5" width="4.5" height="4.5" rx="1" />
    <rect ${common} x="15.5" y="15.5" width="4.5" height="4.5" rx="1" />
  `,
  psychology: `
    <circle ${common} cx="11.5" cy="11" r="5.5" />
    <path ${common} d="M8.7 9.5c.8-1.5 2-2.3 3.3-2.3 1.8 0 3.4 1.3 3.4 3.1 0 1.4-.8 2.1-1.8 2.8-.8.5-1.2 1-1.4 1.8" />
    <path ${common} d="M11.5 16.5v1.8" />
    <path ${common} d="M9.8 18.9h3.4" />
  `,
  mail: `
    <rect ${common} x="4" y="6" width="16" height="12" rx="2" />
    <path ${common} d="M5.5 7.5 12 13l6.5-5.5" />
  `,
  alternate_email: `
    <circle ${common} cx="12" cy="12" r="5.5" />
    <path ${common} d="M13.2 9.8a2.4 2.4 0 1 0 0 4.4c.8 0 1.4-.3 1.8-.8" />
    <path ${common} d="M15 15.2c-.8.6-1.8 1-3 1a4.2 4.2 0 1 1 0-8.4c2.5 0 4.3 1.8 4.3 4.1 0 .7-.1 1.4-.2 1.9" />
  `,
  location_on: `
    <path ${common} d="M12 20.5s5-4.5 5-9.8a5 5 0 1 0-10 0c0 5.3 5 9.8 5 9.8Z" />
    <circle ${common} cx="12" cy="10.7" r="1.7" />
  `,
  send: `
    <path ${common} d="M4.5 11.8 19.5 4.5 15.9 19.5 11.9 13.4 4.5 11.8Z" />
    <path ${common} d="M11.9 13.4 19.5 4.5" />
  `,
  arrow_forward: `
    <path ${common} d="M4 12h14" />
    <path ${common} d="M13.5 7.5 18 12l-4.5 4.5" />
  `,
  motion_mode: `
    <circle ${common} cx="8" cy="12" r="2.25" />
    <path ${common} d="M13 8h5" />
    <path ${common} d="M13 12h6" />
    <path ${common} d="M13 16h5" />
    <path ${common} d="M7.5 12h-2" />
  `,
  bolt: `
    <path ${common} d="M13.5 2.5 6.8 13h4.7L10.5 21.5 17.2 11h-4.7L13.5 2.5Z" />
  `,
  brush: `
    <path ${common} d="M14.5 4.5 19.5 9.5" />
    <path ${common} d="M6.5 17.5c.9-.9 2.2-1.3 3.7-1.1 1.2.2 2.1-.1 2.8-.9l4.3-4.3-4.1-4.1-4.3 4.3c-.8.8-1.1 1.7-.9 2.8.2 1.5-.2 2.8-1.1 3.7-.6.6-1.4.9-2.4.9-.3 0-.6 0-.9-.1.1-.3.1-.6.1-.9 0-1 .3-1.8.9-2.4Z" />
    <path ${common} d="M14.8 9.2 15.8 10.2" />
  `,
  code: `
    <path ${common} d="M10 7 5 12l5 5" />
    <path ${common} d="M14 7l5 5-5 5" />
  `,
  open_in_new: `
    <path ${common} d="M9 5.5H5.5v13h13V15" />
    <path ${common} d="M13 5.5h5.5V11" />
    <path ${common} d="M11 13 18.5 5.5" />
  `,
  link: `
    <path ${common} d="M9 12.5 12.5 9" />
    <path ${common} d="M10.5 8.5 8.5 6.5a3.5 3.5 0 0 0-5 5l2 2" />
    <path ${common} d="M13.5 15.5 15.5 17.5a3.5 3.5 0 0 0 5-5l-2-2" />
    <path ${common} d="M7.5 16.5 16.5 7.5" />
  `,
  share: `
    <circle ${common} cx="6" cy="12" r="1.6" />
    <circle ${common} cx="18" cy="7" r="1.6" />
    <circle ${common} cx="18" cy="17" r="1.6" />
    <path ${common} d="M7.6 11.2 16.4 8.2" />
    <path ${common} d="M7.6 12.8 16.4 15.8" />
  `,
  web: `
    <circle ${common} cx="12" cy="12" r="7.5" />
    <path ${common} d="M4.8 12h14.4" />
    <path ${common} d="M12 4.5c2.1 2 3.2 4.7 3.2 7.5S14.1 17.5 12 19.5c-2.1-2-3.2-4.7-3.2-7.5S9.9 6.5 12 4.5Z" />
  `,
  draw: `
    <path ${common} d="M14.5 4.5 19 9l-9.8 9.8H4.5v-4.7L14.5 4.5Z" />
    <path ${common} d="M12.8 6.2 17.8 11.2" />
  `,
  rocket_launch: `
    <path ${common} d="M13 4.5c2.6.1 4.8 1.2 6 3.4-1.7 1.4-3.6 2.8-6 4.2l-2 2-3.9-.2-.2-3.9 2-2C10.2 8.1 11.6 6.1 13 4.5Z" />
    <circle ${common} cx="14.6" cy="9.2" r="1.2" />
    <path ${common} d="M8.8 15.2 4.5 19.5" />
    <path ${common} d="M4.5 19.5 8.5 19.5 8.5 15.5" />
  `,
  devices: `
    <rect ${common} x="4.5" y="7" width="9.5" height="10.5" rx="1.5" />
    <path ${common} d="M8 18.5h11" />
    <rect ${common} x="15" y="5" width="4.5" height="14" rx="1.2" />
    <path ${common} d="M16.6 16.5h1.3" />
  `,
  auto_awesome: `
    <path ${common} d="M12 4.5 13.7 8.3 17.5 10 13.7 11.7 12 15.5 10.3 11.7 6.5 10 10.3 8.3 12 4.5Z" />
    <path ${common} d="M17 4.5 17.8 6.2 19.5 7 17.8 7.8 17 9.5 16.2 7.8 14.5 7 16.2 6.2 17 4.5Z" />
  `,
  flag: `
    <path ${common} d="M6.5 4.5V20" />
    <path ${common} d="M6.5 5.5c2.4-1 4.5-1.2 6.5-.4 1.7.7 3.4.7 5 0v7c-1.8.7-3.5.7-5 0-2.1-.8-4.2-.7-6.5.4" />
  `,
};

const iconNames = Object.keys(icons);

function wrapStandalone(body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
${body}
</svg>
`;
}

function wrapSymbol(name, body) {
  return `<symbol id="${name}" viewBox="0 0 24 24">
${body}
</symbol>`;
}

mkdirSync(archiveDir, { recursive: true });
mkdirSync(dirname(publicSpritePath), { recursive: true });

for (const [name, body] of Object.entries(icons)) {
  writeFileSync(join(archiveDir, `${name}.svg`), wrapStandalone(body), "utf8");
}

const sprite = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
${iconNames.map((name) => wrapSymbol(name, icons[name])).join("\n")}
</svg>
`;

writeFileSync(join(archiveDir, "material-icons.svg"), sprite, "utf8");
writeFileSync(publicSpritePath, sprite, "utf8");
