import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { KeyframeBar } from "@/components/keyframe-bar";
import { LiveTimecode } from "@/components/live-timecode";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${site.name} — Creative Director & Motion Designer`,
  description: site.description,
  alternates: { canonical: site.url },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
  ],
};

const heroPortrait = {
  src: "/about/hero.webp",
  alt: "Portrait of Benjamin Ang — Singapore, 2020.",
  width: 2500,
  height: 3750,
};

export default function HomePage() {
  const latest = projects.find((p) => p.slug === "beat-bots");
  const selected = projects.filter((p) => p.featured && p.kind !== "tbd").slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* ============== HERO ============== */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={`eyebrow ${styles.eyebrow}`}>
              <span className="accent-dot" aria-hidden /> Creative direction &amp; creative entrepreneurship
            </span>
            <h1 id="hero-title" className={styles.heroTitle}>
              Ideas that move <em>people</em><span className={styles.dot}>.</span>
              <br /> And <em>systems</em><span className={styles.dot}>.</span>
            </h1>
            <p className={styles.heroLede}>
              Creative entrepreneur working at the intersection of storytelling, creative direction, and emerging tools. 10+ years building studios and shipping campaigns. Now exploring creative technology, human-centred AI workflows, Web3, and education.
            </p>
            <div className={styles.heroCtas}>
              <ButtonLink href="/work" variant="primary">View selected work</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">Start a conversation</ButtonLink>
            </div>
            <div className={styles.heroMeta}>
              <span className="mono">01 / 06</span>
              <span aria-hidden>·</span>
              <span className="mono">SG · 02° 01′ N</span>
              <span aria-hidden>·</span>
              <span className="mono">2026</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src={heroPortrait.src}
              alt={heroPortrait.alt}
              width={heroPortrait.width}
              height={heroPortrait.height}
              sizes="(min-width: 1024px) 480px, 100vw"
              className={styles.heroImg}
              priority
            />
          </div>
        </div>

        <div className={`container ${styles.heroFoot}`}>
          <div className={styles.scrollCue}>
            <span className="mono">SCROLL TO EXPLORE</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="6 13 12 19 18 13" />
            </svg>
          </div>
          <div className={styles.heroTimeline}>
            <KeyframeBar total={5} activeIndex={2} label="" />
            <div className={styles.frameTicks}>
              {["2015", "2017", "2018", "2020", "2024"].map((t, i) => (
                <span key={t} className={`mono ${i === 3 ? styles.tickActive : ""}`}>{t}</span>
              ))}
            </div>
          </div>
          <div className={styles.heroTimecode}>
            <span className="eyebrow">Time code</span>
            <LiveTimecode className={styles.timecode} format="smpte" />
            <span className="mono">HH:MM:SS:FF · LOCAL</span>
          </div>
        </div>
      </section>

      {/* ============== LATEST SHIPPED ============== */}
      {latest && (
        <section className={`section ${styles.latest}`} aria-labelledby="latest-title">
          <div className="container">
            <div className={styles.latestCard}>
              <div className={styles.latestBody}>
                <span className={`eyebrow eyebrow--accent ${styles.latestEyebrow}`}>
                  <span className={styles.latestLine} aria-hidden /> 01 · Latest shipped
                </span>
                <h2 id="latest-title" className={styles.latestTitle}>
                  {latest.title}
                </h2>
                <span className={styles.latestYear}>{latest.year} · {latest.role}</span>
                <p className={styles.latestDesc}>{latest.summary}</p>
                <dl className={styles.latestMeta}>
                  {latest.outcome.map((o) => (
                    <div key={o.label}>
                      <dt>{o.label}</dt>
                      <dd>{o.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link href={`/work/${latest.slug}`} className={styles.latestCta}>
                  Open case study
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </Link>
              </div>
              <div className={styles.latestMedia}>
                <Image
                  src={latest.hero.src}
                  alt={latest.hero.alt}
                  width={latest.hero.width}
                  height={latest.hero.height}
                  sizes="(min-width: 900px) 50vw, 100vw"
                  className={styles.latestImg}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============== SELECTED WORK ============== */}
      <section className={`section ${styles.selected}`} aria-labelledby="selected-title">
        <div className="container">
          <div className={styles.selectedHead}>
            <SectionHeading
              level={2}
              eyebrow={<><span className="accent-dot" aria-hidden /> 02 · Selected work</>}
              title={<span id="selected-title">Ventures &amp; work.</span>}
              description="A curated selection of the studios, ventures and creative businesses I've founded and run."
            />
            <Link href="/work" className={styles.viewAll}>
              View all work
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </Link>
          </div>

          <div className={styles.selectedGrid}>
            {selected.map((p) => (
              <div key={p.slug} data-reveal>
                <ProjectCard project={p} size={p.slug === "genesis-motion-design" ? "lg" : "md"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SERVICES / CAPABILITIES ============== */}
      <section className={`section ${styles.services}`} aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            eyebrow={<><span className="accent-dot" aria-hidden /> 03 · Capabilities</>}
            title={<span id="services-title">Creative direction, plus the edge of what's next.</span>}
            description="Story, systems, and experiments. Spanning campaigns, motion, emerging tech, and education."
          />
          <ul className={styles.serviceList}>
            {[
              ["01", "Creative Direction", "Visual systems, narrative arcs, brand voice."],
              ["02", "Motion Design", "Films, brand idents, type in motion, broadcast."],
              ["03", "Brand Film", "Long-form story, manifesto, hero launch."],
              ["04", "Strategy", "Positioning, naming, narrative, rollout."],
              ["05", "Speaking", "Keynotes, panels, workshops, judging."],
              ["06", "Building Studios", "Founder — building a sustainable creative business."],
            ].map(([i, t, d]) => (
              <li key={i} className={styles.serviceItem} data-reveal>
                <span className="mono">{i}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============== CTA STRIP ============== */}
      <section className={styles.ctaStrip} aria-labelledby="cta-title">
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <span className="eyebrow">04 · Contact</span>
              <h2 id="cta-title" className={styles.ctaTitle}>
                Open to innovation, strategy planning, design management, and education roles.
              </h2>
              <p className={styles.ctaDesc}>
                For hiring conversations, advisory work, speaking invitations, and creative direction projects.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <ButtonLink href="/contact">Contact {site.name.split(" ")[0]}</ButtonLink>
              <a className={styles.ctaSecondary} href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
