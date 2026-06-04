"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Ctx = {
  reducedMotion: boolean;
  toggle: () => void;
  set: (v: boolean) => void;
};

const ReducedMotionContext = createContext<Ctx | null>(null);

export function useReducedMotion() {
  const ctx = useContext(ReducedMotionContext);
  if (!ctx) {
    return { reducedMotion: false, toggle: () => {}, set: () => {} } as Ctx;
  }
  return ctx;
}

export function ReducedMotionProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const fromAttr = document.documentElement.getAttribute("data-rm") === "on";
    const fromMq = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fromStorage = (() => {
      try {
        return localStorage.getItem("ba-rm") === "on";
      } catch {
        return false;
      }
    })();
    const on = fromStorage || fromAttr || fromMq;
    setReducedMotion(on);
    document.documentElement.setAttribute("data-rm", on ? "on" : "off");

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => {
      const stored = (() => {
        try {
          return localStorage.getItem("ba-rm");
        } catch {
          return null;
        }
      })();
      if (stored === "on" || stored === "off") return;
      setReducedMotion(e.matches);
      document.documentElement.setAttribute("data-rm", e.matches ? "on" : "off");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const apply = useCallback((v: boolean) => {
    setReducedMotion(v);
    document.documentElement.setAttribute("data-rm", v ? "on" : "off");
    try {
      localStorage.setItem("ba-rm", v ? "on" : "off");
    } catch {}
  }, []);

  const toggle = useCallback(() => apply(!reducedMotion), [apply, reducedMotion]);
  const set = useCallback((v: boolean) => apply(v), [apply]);

  return (
    <ReducedMotionContext.Provider value={{ reducedMotion, toggle, set }}>
      {children}
    </ReducedMotionContext.Provider>
  );
}
