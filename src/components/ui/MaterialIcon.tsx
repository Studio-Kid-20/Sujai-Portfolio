type MaterialIconProps = {
  name: string;
  className?: string;
  label?: string;
  style?: React.CSSProperties;
};

export function MaterialIcon({ name, className = "", label, style }: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      style={style}
    >
      {name}
    </span>
  );
}
