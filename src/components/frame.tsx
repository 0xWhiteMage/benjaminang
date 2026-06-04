import type { ReactNode } from "react";
import styles from "./frame.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
};

export function Frame({ children, className, bordered = true }: Props) {
  return (
    <div className={`${styles.frame} ${bordered ? styles.bordered : ""} ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function FrameHeader({ label }: { label: string }) {
  return (
    <div className={styles.frameHeader}>
      <span className="eyebrow">{label}</span>
      <span className={styles.frameLine} aria-hidden />
    </div>
  );
}
