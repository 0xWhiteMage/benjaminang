"use client";

import { useEffect } from "react";

/**
 * Reveal-on-scroll — sets data-reveal="in" on elements with [data-reveal] as they
 * enter the viewport. Pure CSS does the transition. No layout shift.
 *
 * Uses a MutationObserver so elements added to the DOM after mount (view
 * changes, filter changes, dynamic content) also get observed.
 */
export function RevealOnScroll({
  rootMargin = "-10% 0px -10% 0px",
  threshold = 0.05,
  children,
}: {
  rootMargin?: string;
  threshold?: number;
  children?: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealAll = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-reveal='in'])")
        .forEach((el) => {
          el.setAttribute("data-reveal", "in");
        });
    };

    if (reduced) {
      revealAll();
      const mo = new MutationObserver(revealAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.setAttribute("data-reveal", "in");
            io.unobserve(el);
          }
        });
      },
      { rootMargin, threshold }
    );

    const observeNew = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-reveal='in'])")
        .forEach((el) => {
          io.observe(el);
        });
    };

    observeNew();

    const mo = new MutationObserver(observeNew);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [rootMargin, threshold]);

  return children ?? null;
}
