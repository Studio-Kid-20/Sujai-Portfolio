import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId?: string;
  description?: ReactNode;
  as?: ElementType;
  align?: "left" | "center";
  showLine?: boolean;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  as: Tag = "h2",
  align = "left",
  showLine = false,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={cn("space-y-4", isCentered ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <span
          className={cn(
            "section-kicker block",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </span>
      ) : null}

      <Tag
        id={titleId}
        className={cn(
          "title-gradient font-headline text-4xl font-extrabold leading-[0.98] tracking-tight [text-wrap:balance] md:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </Tag>

      {description ? (
        <p
          className={cn(
            "mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant",
            isCentered && "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}

      {showLine ? (
        <div
          className={cn(
            "h-1 w-24 rounded-full bg-gradient-to-r from-primary via-tertiary to-secondary",
            isCentered && "mx-auto",
          )}
        />
      ) : null}
    </div>
  );
}
