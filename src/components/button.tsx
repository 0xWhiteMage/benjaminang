import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import styles from "./button.module.css";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "lg" | "sm";

type Common = {
  variant?: Variant;
  size?: Size;
  iconTrailing?: ReactNode;
  iconLeading?: ReactNode;
  className?: string;
  children?: ReactNode;
};

type ButtonProps = Common &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type LinkProps = Common & {
  href: string;
  prefetch?: boolean;
  target?: string;
  rel?: string;
};

function classes(variant: Variant = "primary", size: Size = "md", className = "") {
  return [styles.btn, styles[`v_${variant}`], styles[`s_${size}`], className]
    .filter(Boolean)
    .join(" ");
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  iconTrailing,
  iconLeading,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={classes(variant, size, className)}>
      {iconLeading}
      <span className={styles.label}>{children}</span>
      {iconTrailing ?? (variant === "primary" || variant === "outline" ? <Arrow /> : null)}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  iconTrailing,
  iconLeading,
  className,
  children,
  prefetch,
  target,
  rel,
}: LinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  const content = (
    <>
      {iconLeading}
      <span className={styles.label}>{children}</span>
      {iconTrailing ?? (variant === "primary" || variant === "outline" ? <Arrow /> : null)}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        className={classes(variant, size, className)}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} prefetch={prefetch} className={classes(variant, size, className)}>
      {content}
    </Link>
  );
}
