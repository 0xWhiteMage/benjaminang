import styles from "./keyframe-bar.module.css";

type KeyframeBarProps = {
  label?: string;
  activeIndex?: number;
  total?: number;
  scale?: 1 | 2 | 3 | 4 | 5;
  showTicks?: boolean;
  values?: number[];
  valueActive?: number;
};

export function KeyframeBar({
  label = "Keyframes",
  activeIndex = 0,
  total = 5,
  showTicks = true,
  values,
  valueActive,
  scale = 1,
}: KeyframeBarProps) {
  return (
    <div className={styles.wrap}>
      <span className="eyebrow">{label}</span>
      <div className={styles.row} aria-hidden>
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
          />
        ))}
        <span className={styles.line} />
      </div>
      {showTicks && values && (
        <div className={styles.ticks}>
          {values.map((v, i) => (
            <span
              key={i}
              className={`mono ${styles.tick} ${v === valueActive ? styles.tickActive : ""}`}
            >
              {v}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
