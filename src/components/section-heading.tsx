import type { ReactNode } from "react";
import styles from "./section-heading.module.css";

type Props = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  level?: 1 | 2 | 3;
  as?: keyof React.JSX.IntrinsicElements;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = 1,
  as,
  id,
}: Props) {
  const Tag = (as ?? (level === 1 ? "h1" : level === 2 ? "h2" : "h3")) as keyof React.JSX.IntrinsicElements;
  const sizeClass = level === 1 ? styles.l1 : level === 2 ? styles.l2 : styles.l3;
  return (
    <header className={`${styles.head} ${styles[`a_${align}`]}`} data-reveal>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag id={id} className={`${styles.title} ${sizeClass}`}>
        {title}
      </Tag>
      {description && <p className={styles.desc}>{description}</p>}
    </header>
  );
}
