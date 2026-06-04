"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/components/reduced-motion-provider";
import { LiveTimecode } from "@/components/live-timecode";
import styles from "./about-timeline.module.css";

type Milestone = {
  index: string;
  year: string;
  title: string;
  detail: string;
  kind: string;
  focus?: string[];
  org?: string;
  expanded: boolean;
};

const BACKGROUNDS: Array<"warm" | "cool" | "neutral"> = ["neutral", "warm", "cool", "warm", "neutral", "cool", "warm", "neutral", "warm"];

const MILESTONE_MEDIA: Array<{ src: string; alt: string; width: number; height: number } | null> = [
  null,
  { src: "/speaking/halography-01.webp", alt: "On stage at Halography Vietnam, 2018.", width: 2048, height: 1365 },
  { src: "/about/hero.webp", alt: "Benjamin Ang, Singapore, 2020.", width: 2500, height: 3750 },
  { src: "/projects/genesis/01.webp", alt: "Genesis Motion Design studio interior, Singapore, 2020.", width: 2500, height: 1667 },
  { src: "/about/hero.webp", alt: "Benjamin Ang, Singapore, 2020.", width: 2500, height: 3750 },
  { src: "/projects/balance/hero.webp", alt: "Balance Studio — production still.", width: 956, height: 1276 },
  { src: "/speaking/graphika-01.webp", alt: "On stage at Graphika Manila, 2017.", width: 2048, height: 1365 },
  { src: "/instagram/forbes-30-under-30.jpg", alt: "Forbes 30 Under 30 Asia, 2020.", width: 640, height: 800 },
  { src: "/about/hero.webp", alt: "Benjamin Ang, Singapore, 2020.", width: 2500, height: 3750 },
];

export function AboutTimeline({ milestones }: { milestones: Milestone[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [bgIdx, setBgIdx] = useState(0);
  const { reducedMotion } = useReducedMotion();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height - viewport;
      const passed = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? passed / total : 0;

      // Active milestone = the one whose centre is closest to the viewport centre.
      // The dot stays "locked" on a milestone until the next one reaches the centre.
      const viewportCentre = viewport / 2;
      let closestIdx = 0;
      let closestDist = Infinity;
      itemRefs.current.forEach((item, i) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        const itemCentre = itemRect.top + itemRect.height / 2;
        const dist = Math.abs(itemCentre - viewportCentre);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });

      setActive(closestIdx);
      setBgIdx(closestIdx);
      void progress;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const visual = visualRef.current;
    if (!stage || !visual) return;
    const onScroll = () => {
      const stageRect = stage.getBoundingClientRect();
      const viewport = window.innerHeight;
      const stageHeight = stage.offsetHeight;
      const visualHeight = visual.offsetHeight;
      const innerEl = visual.firstElementChild as HTMLElement | null;
      const imageHeight = innerEl?.offsetHeight || visualHeight;
      const padding = (visualHeight - imageHeight) / 2;
      const scrollable = stageHeight - viewport;
      const p = scrollable > 0
        ? Math.max(0, Math.min(-stageRect.top / scrollable, 1))
        : 0;
      const translateY = p * (stageHeight - imageHeight) - padding;
      visual.style.transform = `translateY(${translateY}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeItem = milestones[active] ?? milestones[0];
  const tone = BACKGROUNDS[Math.min(active, BACKGROUNDS.length - 1)];

  return (
    <section className={styles.wrap} aria-label="Career timeline" ref={wrapRef}>
      <div className="container">
        <div className={styles.intro}>
          <span className="eyebrow">Career timeline</span>
          <h2 className={styles.title}>
            The path — from polytechnic to practice.
          </h2>
          <p className={styles.desc}>
            Scroll the chapter. Each milestone is a frame, not a paragraph.
          </p>
        </div>

        <div ref={stageRef} className={styles.stage}>
          <div className={styles.rail} aria-hidden>
            <div className={styles.railLine} />
            {milestones.map((m, i) => (
              <span
                key={m.index}
                className={`${styles.railDot} ${i === active ? styles.railDotActive : ""}`}
                style={{ top: `${(i / (milestones.length - 1)) * 100}%` }}
              />
            ))}
            <div
              className={styles.railProgress}
              style={{ height: `${(active / (milestones.length - 1)) * 100}%` }}
            />
          </div>

          <div className={styles.body}>
            {milestones.map((m, i) => {
              const isActive = i === active;
              return (
                <article
                  key={m.index}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className={`${styles.item} ${isActive ? styles.itemActive : ""}`}
                  aria-hidden={!isActive}
                >
                  <span className="mono">{m.index}</span>
                  <span className={styles.year}>{m.year}</span>
                  {m.org && <span className={styles.org}>{m.org}</span>}
                  <h3 className={styles.itemTitle}>{m.title}</h3>
                  <p className={styles.itemDetail}>{m.detail}</p>
                  {m.focus && m.focus.length > 0 && (
                    <div className={styles.itemFocus}>
                      <span className="eyebrow">Key focus</span>
                      <ul>
                        {m.focus.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div ref={visualRef} className={styles.visual} aria-hidden>
            <div className={styles.visualInner}>
              {MILESTONE_MEDIA[active] ? (
                <Image
                  src={MILESTONE_MEDIA[active]!.src}
                  alt={MILESTONE_MEDIA[active]!.alt}
                  width={MILESTONE_MEDIA[active]!.width}
                  height={MILESTONE_MEDIA[active]!.height}
                  sizes="(min-width: 1100px) 420px, 100vw"
                  className={styles.visualImg}
                />
              ) : (
                <div className={styles.visualPlaceholder}>
                  <span className="mono">{activeItem?.title ?? ""}</span>
                </div>
              )}
              <div className={styles.visualMeta}>
                <span className="mono">FRAME 110 / 240 (24FPS)</span>
                <LiveTimecode className={styles.timecode} format="smpte" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
