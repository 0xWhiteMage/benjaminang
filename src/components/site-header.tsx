"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import styles from "./site-header.module.css";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/credentials", label: "Credentials" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name} — home`}>
          <span className={styles.mark} aria-hidden>
            {site.initials}
          </span>
          <span className={styles.brandName}>{site.name.toUpperCase()}</span>
        </Link>

        <nav aria-label="Primary" className={styles.nav}>
          <ul className={styles.navList}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ""}`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.menuBtn}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`${styles.menuBar} ${open ? styles.menuBarOpenA : ""}`} />
          <span className={`${styles.menuBar} ${open ? styles.menuBarOpenB : ""}`} />
          <span className={`${styles.menuBar} ${open ? styles.menuBarOpenC : ""}`} />
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className={styles.mobile} role="dialog" aria-modal="true">
          <ul className={styles.mobileList}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
