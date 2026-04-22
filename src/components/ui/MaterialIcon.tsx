type MaterialIconProps = {
  name: string;
  className?: string;
  label?: string;
};

const ICON_SPRITE_PATH = "/assets/icons/material-icons.svg";

export function MaterialIcon({ name, className = "", label }: MaterialIconProps) {
  return (
    <svg
      className={`inline-block align-middle ${className}`.trim()}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      focusable="false"
    >
      {label ? <title>{label}</title> : null}
      <use href={`${ICON_SPRITE_PATH}#${name}`} xlinkHref={`${ICON_SPRITE_PATH}#${name}`} />
    </svg>
  );
}
