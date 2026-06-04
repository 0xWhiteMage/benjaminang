import styles from "./placeholder.module.css";

type Props = {
  ratio?: string; // CSS aspect-ratio, e.g. "16/9"
  label?: string;
  category?: "portrait" | "architecture" | "abstract" | "stage" | "macro" | "model" | "civic" | "sparks" | "type";
  tone?: "warm" | "cool" | "neutral";
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
};

const TONE_BG: Record<NonNullable<Props["tone"]>, [string, string]> = {
  warm: ["#181614", "#0F0E0C"],
  cool: ["#0E1418", "#0A0E12"],
  neutral: ["#121214", "#0B0B0C"],
};

const CATEGORY_LABELS: Record<NonNullable<Props["category"]>, string> = {
  portrait: "Portrait / Human / Intimate",
  architecture: "Architecture / Form / Structure",
  abstract: "Abstract / Motion / Texture",
  stage: "Stage / Spotlight / Speaker",
  macro: "Macro / Craft / Detail",
  model: "Model / Architectural Model",
  civic: "Civic / Line / Composition",
  sparks: "Sparks / Metal / Process",
  type: "Type / Kinetic Composition",
};

export function Placeholder({
  ratio = "16/9",
  label,
  category = "abstract",
  tone = "neutral",
  className,
  children,
}: Props) {
  const [g1, g2] = TONE_BG[tone];
  const fig = label ?? CATEGORY_LABELS[category];
  const style = {
    aspectRatio: ratio,
    background: `linear-gradient(135deg, ${g1}, ${g2})`,
  } as React.CSSProperties;
  return (
    <figure className={`${styles.figure} ${className ?? ""}`} style={style} role="img" aria-label={fig}>
      <div className={styles.noise} aria-hidden />
      <div className={styles.label}>
        <span className="eyebrow">{CATEGORY_LABELS[category]}</span>
        <span className={styles.title}>{fig}</span>
      </div>
      {children}
    </figure>
  );
}
