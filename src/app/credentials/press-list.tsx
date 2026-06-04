"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

type PressMention = {
  publication: string;
  year?: number;
  type: "Feature" | "Gallery" | "Recognition";
  detail?: string;
  url?: string;
};

const FILTERS = ["All", "Feature", "Gallery", "Recognition"] as const;
type Filter = (typeof FILTERS)[number];
type View = "grid" | "list";

const ArrowIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="14 6 20 12 14 18" />
  </svg>
);

export function PressList({ items }: { items: PressMention[] }) {
  const [active, setActive] = useState<Filter>("All");
  const [view, setView] = useState<View>("grid");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((m) => m.type === active);
  }, [items, active]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: items.length };
    for (const f of FILTERS) {
      if (f === "All") continue;
      c[f] = items.filter((m) => m.type === f).length;
    }
    return c;
  }, [items]);

  return (
    <>
      <div className={styles.pressHead}>
        <div className={styles.pressHeadLeft}>
          <span className="eyebrow">Press mentions</span>
          <span className={styles.pressCount}>· {items.length} items</span>
        </div>

        <div className={styles.pressHeadRight}>
          <div className={styles.pressFilters} role="tablist" aria-label="Filter press">
            {FILTERS.map((f, i) => {
              const isActive = f === active;
              const count = counts[f] ?? 0;
              const disabled = count === 0 && f !== "All";
              return (
                <span key={f} className={styles.filterGroup}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    disabled={disabled}
                    onClick={() => setActive(f)}
                    className={`${styles.filterLink} ${isActive ? styles.filterLinkActive : ""} ${disabled ? styles.filterLinkDisabled : ""}`}
                  >
                    {f}
                  </button>
                  {i < FILTERS.length - 1 && (
                    <span className={styles.filterSep} aria-hidden>·</span>
                  )}
                </span>
              );
            })}
          </div>

          <div className={styles.pressView} role="tablist" aria-label="View press as">
            <span className={styles.pressViewLabel}>View</span>
            <button
              type="button"
              role="tab"
              aria-selected={view === "grid"}
              onClick={() => setView("grid")}
              className={`${styles.pressViewBtn} ${view === "grid" ? styles.pressViewBtnActive : ""}`}
            >
              Grid
            </button>
            <span className={styles.filterSep} aria-hidden>·</span>
            <button
              type="button"
              role="tab"
              aria-selected={view === "list"}
              onClick={() => setView("list")}
              className={`${styles.pressViewBtn} ${view === "list" ? styles.pressViewBtnActive : ""}`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      <h2 className="sr-only">Press mentions</h2>

      {filtered.length === 0 ? (
        <p className={styles.pressEmpty}>No press mentions match this filter.</p>
      ) : view === "grid" ? (
        <ul className={styles.pressGrid}>
          {filtered.map((m, i) => {
            const card = (
              <>
                <div className={styles.pressBody}>
                  <span className={styles.pressMeta}>
                    <span className={styles.pressType}>{m.type}</span>
                    {m.year && (
                      <>
                        <span className={styles.pressSep} aria-hidden>·</span>
                        <span className={styles.pressYear}>{m.year}</span>
                      </>
                    )}
                  </span>
                  <h3 className={styles.pressTitle}>{m.publication}</h3>
                  {m.detail && <p className={styles.pressDetail}>{m.detail}</p>}
                </div>
                {m.url && <span className={styles.pressArrow} aria-hidden>{ArrowIcon}</span>}
              </>
            );
            return (
              <li key={`${m.publication}-${i}`} className={styles.pressItem} data-reveal>
                {m.url ? (
                  <Link
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pressCard}
                    aria-label={`Read ${m.publication}`}
                  >
                    {card}
                  </Link>
                ) : (
                  <div className={styles.pressCard}>{card}</div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className={styles.pressList}>
          {filtered.map((m, i) => {
            const row = (
              <>
                <div className={styles.pressListMain}>
                  <h3 className={styles.pressListTitle}>{m.publication}</h3>
                  {m.detail && <p className={styles.pressListDetail}>{m.detail}</p>}
                </div>
                <span className={styles.pressListMeta}>
                  <span>{m.type}</span>
                  {m.year && (
                    <>
                      <span className={styles.pressSep} aria-hidden>·</span>
                      <span>{m.year}</span>
                    </>
                  )}
                </span>
                {m.url && <span className={styles.pressListArrow} aria-hidden>{ArrowIcon}</span>}
              </>
            );
            return (
              <li key={`${m.publication}-${i}`} className={styles.pressListItem} data-reveal>
                {m.url ? (
                  <Link
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pressListRow}
                    aria-label={`Read ${m.publication}`}
                  >
                    {row}
                  </Link>
                ) : (
                  <div className={styles.pressListRow}>{row}</div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
