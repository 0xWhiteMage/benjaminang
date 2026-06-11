import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
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

const ventures = [
  {
    title: "Genesis Motion Design",
    description: "Award-winning boutique motion & animation studio, Singapore. Est. 2015.",
    href: "/work#genesis-motion-design",
  },
  {
    title: "Balance Creative / Balance Studio",
    description: "Boutique video production across Vietnam & Singapore.",
    href: "/work#balance-creative",
  },
  {
    title: "Creative Business Education",
    description: "Teaching creatives, freelancers and founders to build a business around their craft.",
    href: "/work#education",
  },
  {
    title: "Creative Technology & AI",
    description: "Current explorations: AI agents, creative automation, human-centred tools.",
    href: "/work#creative-technology",
  },
];

export default function HomePage() {
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
            <h1 id="hero-title" className={styles.heroTitle}>
              Benjamin Ang
            </h1>
            <p className={styles.heroTagline}>
              Technology should adapt to people — not the other way around.
            </p>
            <p className={styles.heroLede}>
              Singapore-based. I make companies, films, products and ideas to understand complex systems — and bring out the best in them. Designer &amp; animator by training; creative business strategist through experience.
            </p>
            <div className={styles.heroProof}>
              <span>Forbes 30 Under 30 Asia (2020)</span>
              <span aria-hidden>·</span>
              <span>Founder, Genesis Motion Design</span>
              <span aria-hidden>·</span>
              <span>10+ years</span>
              <span aria-hidden>·</span>
              <span>Speaker across Asia</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== MANIFESTO ============== */}
      <section className={`section ${styles.manifesto}`} aria-labelledby="manifesto-title">
        <div className="container">
          <div className={styles.manifestoInner}>
            <h2 id="manifesto-title" className="sr-only">Manifesto</h2>
            <p className={styles.manifestoLead}>
              Technology should adapt to people — not the other way around.
            </p>
            <p>
              That belief sits underneath everything I make. Companies, films, products, classrooms, AI agents, tools that didn't exist the morning before — the making was never really the point. It was how I think.
            </p>
            <p>
              What pulls me is the seam where people meet the systems they're asked to live inside and trust: where creativity meets technology, art meets business, humans meet machines. Most of that seam feels colder and more confusing than it needs to be.
            </p>
            <p>
              For years the word was motion designer — true, until it wasn't enough. The work kept widening until no single title held it. What held it instead was a question, and I don't think it has a final answer: how do you understand a complex system, and bring out the best in it?
            </p>
            <p>
              Everything else — the medium, the title, the tools — is just how I go looking.
            </p>
          </div>
        </div>
      </section>

      {/* ============== SELECTED WORK ============== */}
      <section className={`section ${styles.selected}`} aria-labelledby="selected-title">
        <div className="container">
          <SectionHeading
            level={2}
            eyebrow={<><span className="accent-dot" aria-hidden /> Selected work</>}
            title={<span id="selected-title">Ventures &amp; work.</span>}
            description="The motion, films, companies and experiments that make up an ongoing body of work."
          />

          <div className={styles.venturesGrid}>
            {ventures.map((v) => (
              <Link key={v.title} href={v.href} className={styles.ventureCard} data-reveal>
                <h3 className={styles.ventureTitle}>{v.title}</h3>
                <p className={styles.ventureDesc}>{v.description}</p>
                <span className={styles.ventureLink}>
                  View
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SPEAKING TEASER ============== */}
      <section className={`section ${styles.speaking}`} aria-labelledby="speaking-title">
        <div className="container">
          <div className={styles.speakingInner}>
            <p id="speaking-title" className={styles.speakingText}>
              From keyframes to cap tables to AI agents — talks on building creative work, and businesses, that last.
            </p>
            <ButtonLink href="/speaking" variant="ghost">View speaking</ButtonLink>
          </div>
        </div>
      </section>

      {/* ============== CONTACT CTA ============== */}
      <section className={styles.ctaStrip} aria-labelledby="cta-title">
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Working on something ambitious at the edges?
            </h2>
            <ButtonLink href="/contact" variant="primary">Start a conversation</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
