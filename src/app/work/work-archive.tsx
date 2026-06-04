"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/projects";
import styles from "./work-archive.module.css";

type Props = {
  projects: Project[];
  ventures: string[];
  years: number[];
};

type View = "grid" | "constellation";
type CSSVar = React.CSSProperties & Record<`--${string}`, string | number>;

const VENTURE_COLORS: Record<string, string> = {
  "Creative Studio": "var(--color-electric-blue)",
  Brand: "var(--color-warm-white)",
  Education: "#8B7FFF",
  Web3: "#4ECDC4",
  TBD: "var(--color-ink-quiet)",
};

const STAR_POSITIONS: Record<string, { x: number; y: number }> = {
  "beat-bots": { x: 74, y: 50 },
  "balance-creative": { x: 22, y: 70 },
  "genesis-motion-design": { x: 48, y: 60 },
};

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function getStarPosition(slug: string): { x: number; y: number } {
  const override = STAR_POSITIONS[slug];
  if (override) return override;
  const h1 = hashString(slug);
  const h2 = hashString(slug + "x");
  const angle = ((h1 % 360) / 360) * Math.PI * 2;
  const r = Math.sqrt((h2 % 1000) / 1000) * 25 + 5;
  return {
    x: 50 + Math.cos(angle) * r,
    y: 50 + Math.sin(angle) * r,
  };
}

function generateStars(count: number, tier: "bg" | "mid" = "bg") {
  return Array.from({ length: count }, (_, i) => ({
    id: `${tier}-${i}`,
    tier,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: tier === "mid" ? 1.5 + Math.random() * 1.5 : 1 + Math.random() * 1.5,
    duration: tier === "mid" ? 2 + Math.random() * 2 : 4 + Math.random() * 4,
    delay: Math.random() * 5,
    minOpacity: tier === "mid" ? 0.3 + Math.random() * 0.2 : 0.1 + Math.random() * 0.2,
    maxOpacity: tier === "mid" ? 0.5 + Math.random() * 0.2 : 0.3 + Math.random() * 0.3,
  }));
}

export function WorkArchive({ projects, ventures, years }: Props) {
  const [view, setView] = useState<View>("constellation");
  const [venture, setVenture] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [active, setActive] = useState<string>(projects[0]?.slug ?? "");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (venture && p.venture !== venture) return false;
      if (year && String(p.year) !== year) return false;
      return true;
    });
  }, [projects, venture, year]);

  const activeProject = projects.find((p) => p.slug === active) ?? filtered[0];
  const activePos = (() => {
    const ap = projects.find((p) => p.slug === active);
    return ap ? getStarPosition(ap.slug) : { x: 50, y: 50 };
  })();
  const stars = useMemo(() => [...generateStars(40, "bg"), ...generateStars(15, "mid")], []);
  const yearRange = (() => {
    if (projects.length === 0) return "—";
    const ys = projects.map((p) => p.year);
    return `${Math.min(...ys)} — ${Math.max(...ys)}`;
  })();

  useEffect(() => {
    if (filtered.length === 0) {
      if (active !== "") setActive("");
    } else if (!filtered.some((p) => p.slug === active)) {
      setActive(filtered[0].slug);
    }
  }, [filtered, active]);

  const [filtersOpen, setFiltersOpen] = useState(false);
  const filtersRef = useRef<HTMLDivElement>(null);
  const activeFilterCount = [venture, year].filter(Boolean).length;
  const stageRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    if (!filtersOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (filtersRef.current && !filtersRef.current.contains(e.target as Node)) {
        setFiltersOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFiltersOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [filtersOpen]);

  const reset = () => {
    setVenture("");
    setYear("");
  };

  return (
    <div className={styles.wrap}>
      <div className="container">
        {/* Controls — single thin row + filter popover */}
        <div className={styles.controls}>
          <div className={styles.controlsHead}>
            <div className={styles.controlsTitle}>
              <span className="eyebrow">Work archive</span>
              <span className={styles.controlsCount}>· {filtered.length.toString().padStart(2, "0")} projects</span>
            </div>
            <div className={styles.controlsRight}>
              <div className={styles.viewToggle} role="tablist" aria-label="View">
                <button
                  type="button"
                  role="tab"
                  aria-selected={view === "constellation"}
                  className={`${styles.viewBtn} ${view === "constellation" ? styles.viewBtnActive : ""}`}
                  onClick={() => setView("constellation")}
                  aria-label="Constellation view"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                    <circle cx="3" cy="3" r="1.2" />
                    <circle cx="13" cy="5" r="1.2" />
                    <circle cx="5" cy="11" r="1.2" />
                    <circle cx="12" cy="13" r="1.2" />
                    <circle cx="8" cy="6" r="1.2" />
                    <line x1="3" y1="3" x2="8" y2="6" />
                    <line x1="13" y1="5" x2="8" y2="6" />
                    <line x1="8" y1="6" x2="5" y2="11" />
                    <line x1="8" y1="6" x2="12" y2="13" />
                  </svg>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={view === "grid"}
                  className={`${styles.viewBtn} ${view === "grid" ? styles.viewBtnActive : ""}`}
                  onClick={() => setView("grid")}
                  aria-label="Grid view"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                    <rect x="2" y="2" width="5" height="5" />
                    <rect x="9" y="2" width="5" height="5" />
                    <rect x="2" y="9" width="5" height="5" />
                    <rect x="9" y="9" width="5" height="5" />
                  </svg>
                </button>
              </div>

              <div className={styles.filtersWrap} ref={filtersRef}>
                <button
                  type="button"
                  onClick={() => setFiltersOpen((v) => !v)}
                  className={`${styles.filtersBtn} ${activeFilterCount > 0 ? styles.filtersBtnActive : ""}`}
                  aria-expanded={filtersOpen}
                  aria-haspopup="dialog"
                >
                  <span>Filters</span>
                  {activeFilterCount > 0 && (
                    <span className={styles.filtersCount}>· {activeFilterCount}</span>
                  )}
                  <svg
                    className={`${styles.filtersChev} ${filtersOpen ? styles.filtersChevOpen : ""}`}
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {filtersOpen && (
                  <div className={styles.filtersPopover} role="dialog" aria-label="Filters">
                    <FilterGroup label="Venture" value={venture} setValue={setVenture} options={ventures} />
                    <FilterGroup label="Year" value={year} setValue={setYear} options={years.map(String)} />
                  </div>
                )}
              </div>

              {activeFilterCount > 0 && (
                <button type="button" onClick={reset} className={styles.reset}>
                  Reset
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        {view === "grid" ? (
          <div className={styles.gridView}>
            {filtered.length === 0 && (
              <p className={styles.empty}>No projects match these filters.</p>
            )}
            {filtered.map((p) => (
              <div key={p.slug}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.constellationView} aria-label="Constellation view">
            <div className={styles.starMapColumn}>
              <div className={styles.starMapHeader}>
                <span className={styles.starMapLabel}>Constellation</span>
              </div>
            <div
              ref={stageRef}
              className={styles.constellationStage}
              onMouseMove={(e) => {
                if (!stageRef.current) return;
                const r = stageRef.current.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
                const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
                setPointer({ x, y, active: true });
              }}
              onMouseLeave={() => setPointer({ x: 0, y: 0, active: false })}
              style={{
                ["--px"]: pointer.x,
                ["--py"]: pointer.y,
                ["--pointer-active"]: pointer.active ? 1 : 0,
              } as CSSVar}
            >
              <div
                className={styles.ambientGlow}
                style={{ left: `${activePos.x}%`, top: `${activePos.y}%` }}
                aria-hidden
              />
              <div className={styles.cursorGlow} aria-hidden />

              <div className={styles.starField} aria-hidden>
                {stars.map((star) => (
                  <span
                    key={star.id}
                    className={`${styles.star} ${star.tier === "mid" ? styles.starMid : ""}`}
                    style={{
                      left: `${star.x}%`,
                      top: `${star.y}%`,
                      width: `${star.size}px`,
                      height: `${star.size}px`,
                      ["--duration"]: `${star.duration}s`,
                      ["--delay"]: `${star.delay}s`,
                      ["--min-opacity"]: star.minOpacity,
                      ["--max-opacity"]: star.maxOpacity,
                    } as CSSVar}
                  />
                ))}
              </div>

              <svg className={styles.svgOverlay} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                {Array.from({ length: 12 }, (_, i) => {
                  const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
                  return (
                    <line
                      key={`tick-${i}`}
                      x1={50 + Math.cos(a) * 48.5}
                      y1={50 + Math.sin(a) * 48.5}
                      x2={50 + Math.cos(a) * 49.5}
                      y2={50 + Math.sin(a) * 49.5}
                      className={styles.starMapTick}
                    />
                  );
                })}
                <g key={active}>
                  {filtered.map((p, i) => {
                    if (p.slug === active) return null;
                    const pos = getStarPosition(p.slug);
                    const dx = pos.x - activePos.x;
                    const dy = pos.y - activePos.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const normDist = Math.min(dist / 80, 1);
                    const thickness = normDist < 0.33 ? 0.18 : normDist < 0.66 ? 0.1 : 0.04;
                    const opacity = (0.45 - normDist * 0.35).toFixed(2);
                    return (
                      <line
                        key={p.slug}
                        x1={activePos.x}
                        y1={activePos.y}
                        x2={pos.x}
                        y2={pos.y}
                        className={styles.connection}
                        strokeWidth={thickness}
                        style={{
                          ["--i"]: i,
                          ["--conn-opacity"]: opacity,
                        } as CSSVar}
                      />
                    );
                  })}
                </g>
              </svg>

              {/* Design-filler monospace instrument labels */}
              <span className={`${styles.starMapCompass} ${styles.starMapCompassN}`} aria-hidden>N</span>
              <span className={`${styles.starMapCompass} ${styles.starMapCompassS}`} aria-hidden>S</span>
              <span className={`${styles.starMapCompass} ${styles.starMapCompassE}`} aria-hidden>E</span>
              <span className={`${styles.starMapCompass} ${styles.starMapCompassW}`} aria-hidden>W</span>

              <span className={`${styles.starMapCoord} ${styles.starMapCoordN}`} aria-hidden>00°</span>
              <span className={`${styles.starMapCoord} ${styles.starMapCoordE}`} aria-hidden>90°</span>
              <span className={`${styles.starMapCoord} ${styles.starMapCoordS}`} aria-hidden>180°</span>
              <span className={`${styles.starMapCoord} ${styles.starMapCoordW}`} aria-hidden>270°</span>

              <span className={styles.starMapCenter} aria-hidden />

              <span className={styles.starMapAperture} aria-hidden>F/2.8</span>
              <span className={styles.starMapIso} aria-hidden>ISO 400</span>
              <span className={styles.starMapShutter} aria-hidden>1/60s</span>

              <ul className={styles.constellation} role="list">
                {filtered.map((p, i) => {
                  const pos = getStarPosition(p.slug);
                  const color = VENTURE_COLORS[p.venture] || "var(--color-silver-grey)";
                  return (
                    <li
                      key={p.slug}
                      className={`${styles.node} ${p.slug === active ? styles.nodeActive : ""}`}
                      style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                        ["--node-color"]: color,
                        ["--reveal-i"]: i,
                      } as CSSVar}
                      onMouseEnter={() => setActive(p.slug)}
                      onFocus={() => setActive(p.slug)}
                    >
                      <Link href={`/work/${p.slug}`} className={styles.nodeDot} aria-label={p.title}>
                        <span className={styles.nodePulse} aria-hidden />
                        <span className={`${styles.nodePulse} ${styles.nodePulse2}`} aria-hidden />
                      </Link>
                      <div className={`${styles.nodeLabel} ${p.slug === active ? styles.nodeLabelActive : ""}`}>
                        <span className="eyebrow">{p.year}</span>
                        <span className={styles.nodeTitle}>{p.title.split(" — ")[0]}</span>
                        <span className="eyebrow">{p.venture}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
              <div className={styles.starMapFooter}>
                <span className={styles.starMapDate}>
                  {yearRange} · {filtered.length.toString().padStart(2, "0")} / {projects.length.toString().padStart(2, "0")} projects
                </span>
              </div>
            </div>

            {activeProject && (
              <aside className={styles.preview} aria-live="polite">
                <button
                  type="button"
                  className={styles.previewClose}
                  onClick={() => setActive("")}
                  aria-label="Close preview"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
                </button>
                {activeProject.kind === "tbd" ? (
                  <div className={styles.previewTbd} aria-label="Coming soon">
                    <span className="mono">COMING SOON</span>
                  </div>
                ) : (
                  <Image
                    src={activeProject.hero.src}
                    alt={activeProject.hero.alt}
                    width={activeProject.hero.width}
                    height={activeProject.hero.height}
                    sizes="(min-width: 1100px) 540px, 100vw"
                    className={styles.previewImg}
                  />
                )}
                <div className={styles.previewBody}>
                  <span className="eyebrow">{activeProject.year}</span>
                  <h3>{activeProject.title}</h3>
                  <div className={styles.previewMeta}>
                    <div>
                      <span className="eyebrow">Role</span>
                      <span>{activeProject.role}</span>
                    </div>
                    <div>
                      <span className="eyebrow">Venture</span>
                      <span>{activeProject.venture}</span>
                    </div>
                  </div>
                  <p className={styles.previewSummary}>{activeProject.summary}</p>
                  <Link href={`/work/${activeProject.slug}`} className={styles.previewCta}>
                    {activeProject.kind === "tbd" ? "Get notified" : "Open case study"}
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <polyline points="14 6 20 12 14 18" />
                    </svg>
                  </Link>
                  <div className={styles.previewNav}>
                    <span className="eyebrow">
                      {String(filtered.findIndex((p) => p.slug === activeProject.slug) + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
                    </span>
                    <div className={styles.previewNavBtns}>
                      <button
                        type="button"
                        aria-label="Previous project"
                        onClick={() => {
                          const i = filtered.findIndex((p) => p.slug === activeProject.slug);
                          const prev = filtered[(i - 1 + filtered.length) % filtered.length];
                          setActive(prev.slug);
                        }}
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="15 6 9 12 15 18" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label="Next project"
                        onClick={() => {
                          const i = filtered.findIndex((p) => p.slug === activeProject.slug);
                          const next = filtered[(i + 1) % filtered.length];
                          setActive(next.slug);
                        }}
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        )}

        {view === "constellation" && (
          <div className={styles.bottomBar}>
            <div className={styles.legend}>
              {Object.entries(VENTURE_COLORS).map(([disc, color]) => (
                <span key={disc} className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ background: color }} />
                  <span className="eyebrow">{disc}</span>
                </span>
              ))}
            </div>
            <div className={styles.keyframesBar}>
              <span className="eyebrow">Keyframes</span>
              <div className={styles.keyframeDots} aria-hidden>
                <span className={styles.keyframeDot} />
                <span className={styles.keyframeDot} />
                <span className={styles.keyframeDot} />
                <span className={styles.keyframeDot} />
              </div>
              <span className="eyebrow">Readout</span>
              <span className={`mono ${styles.readout}`}>00:12:08</span>
            </div>
          </div>
        )}

        {/* Timeline footer */}
        <div className={styles.timeline} aria-hidden>
          <div className={styles.timelineHead}>
            <span className="eyebrow">Timeline</span>
            <span className="mono">{filtered.length.toString().padStart(2, "0")} projects</span>
          </div>
          <div className={styles.timelineRail}>
            <div className={styles.timelineAxis}>
              {years.map((y) => (
                <span key={y} className="mono">{y}</span>
              ))}
            </div>
            <div className={styles.timelineTicks} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  value,
  setValue,
  options,
}: {
  label: string;
  value: string;
  setValue: (v: string) => void;
  options: string[];
}) {
  return (
    <div className={styles.filterGroup}>
      <span className={styles.filterLabel}>{label}</span>
      <div className={styles.filterChips}>
        <button
          type="button"
          onClick={() => setValue("")}
          className={`${styles.chip} ${value === "" ? styles.chipActive : ""}`}
        >
          All
        </button>
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => setValue(o)}
            className={`${styles.chip} ${value === o ? styles.chipActive : ""}`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
