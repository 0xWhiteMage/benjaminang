import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { KeyframeBar } from "./keyframe-bar";
import styles from "./project-card.module.css";

type Props = {
  project: Project;
  variant?: "grid" | "list" | "constellation";
  active?: boolean;
  size?: "sm" | "md" | "lg";
};

const TBD_GRADIENT: Record<string, [string, string]> = {
  "Education": ["rgba(46, 107, 255, 0.18)", "rgba(11, 11, 12, 0)"],
};

export function ProjectCard({ project, variant = "grid", active = false, size = "md" }: Props) {
  if (variant === "list") {
    return (
      <Link
        href={`/work/${project.slug}`}
        className={`${styles.list} ${active ? styles.active : ""}`}
        aria-label={`Open ${project.title}`}
      >
        <div className={styles.listMedia}>
          {project.kind === "tbd" ? (
            <TbdCover project={project} aspect="4/3" />
          ) : (
            <Image
              src={project.hero.src}
              alt={project.hero.alt}
              width={project.hero.width}
              height={project.hero.height}
              sizes="(min-width: 720px) 50vw, 100vw"
              className={styles.mediaImg}
            />
          )}
        </div>
        <div className={styles.listBody}>
          <span className="eyebrow">{project.year} · {project.venture}</span>
          <h3 className={styles.listTitle}>{project.title}</h3>
          <p className={styles.listSummary}>{project.summary}</p>
          <div className={styles.listMeta}>
            <span>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>{project.role}</span>
            </span>
            {project.location && (
              <span>
                <span className={styles.metaLabel}>Location</span>
                <span className={styles.metaValue}>{project.location}</span>
              </span>
            )}
          </div>
          <span className={styles.openCta}>
            Open case study
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`${styles.card} ${styles[`s_${size}`]} ${active ? styles.active : ""}`}
      aria-label={`Open ${project.title}`}
    >
      <div className={styles.media}>
        {project.kind === "tbd" ? (
          <TbdCover project={project} aspect="4/3" />
        ) : (
          <Image
            src={project.hero.src}
            alt={project.hero.alt}
            width={project.hero.width}
            height={project.hero.height}
            sizes={size === "lg" ? "(min-width: 1200px) 1200px, 100vw" : "(min-width: 720px) 50vw, 100vw"}
            className={styles.mediaImg}
          />
        )}
      </div>
      <div className={styles.body}>
        <span className="eyebrow">{project.year} · {project.venture}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
        <div className={styles.meta}>
          <div>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>{project.role}</span>
          </div>
          {project.location && (
            <div>
              <span className={styles.metaLabel}>Location</span>
              <span className={styles.metaValue}>{project.location}</span>
            </div>
          )}
        </div>
        <span className={styles.cta}>
          Open case study
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="4" y1="12" x2="20" y2="12" />
            <polyline points="14 6 20 12 14 18" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function TbdCover({ project, aspect }: { project: Project; aspect: "4/3" | "16/9" }) {
  const [g1, g2] = TBD_GRADIENT[project.venture] ?? ["rgba(46, 107, 255, 0.12)", "rgba(11, 11, 12, 0)"];
  return (
    <div
      className={styles.placeholder}
      style={{
        aspectRatio: aspect,
        background: `linear-gradient(135deg, ${g1}, ${g2}), repeating-linear-gradient(45deg, var(--color-surface-2) 0, var(--color-surface-2) 8px, var(--color-surface-1) 8px, var(--color-surface-1) 16px)`,
      }}
      aria-label="Coming soon"
    >
      <div className={styles.placeholderContent}>
        <span className={styles.placeholderBadge}>IN DEVELOPMENT</span>
        <span className={styles.placeholderTitle}>{project.title}</span>
        <span className={styles.placeholderMeta}>{project.venture} · {project.year}</span>
      </div>
    </div>
  );
}

export { KeyframeBar };
