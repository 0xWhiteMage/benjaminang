import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { KeyframeBar } from "@/components/keyframe-bar";
import { site } from "@/lib/site";
import {
  speakingTopics,
  engagements,
  testimonial,
} from "@/lib/speaking";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Speaking & Talks",
  description: `${site.name} — empowering creative freelancers & entrepreneurs by sharing the journey of a young creative entrepreneur, and the lessons learned through the celebrations and downfalls.`,
  alternates: { canonical: `${site.url}/speaking` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Speaking", item: `${site.url}/speaking` },
  ],
};

type Snapshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  kind: "portrait" | "stage" | "studio";
};

const heroSnapshot: Snapshot = {
  src: "/speaking/halography-01.webp",
  alt: "On stage at Halography Vietnam, 2018 — keynote.",
  width: 2048,
  height: 1365,
  caption: "Halography Vietnam · 2018",
  kind: "stage",
};

const snapshots: Snapshot[] = [
  {
    src: "/speaking/halography-01.webp",
    alt: "On stage at Halography Vietnam, 2018.",
    width: 2048,
    height: 1365,
    caption: "Halography Vietnam · 2018",
    kind: "stage",
  },
  {
    src: "/projects/genesis/05.webp",
    alt: "Genesis Motion Design studio, Singapore.",
    width: 2500,
    height: 3750,
    caption: "The studio",
    kind: "studio",
  },
  {
    src: "/speaking/graphika-01.webp",
    alt: "On stage at Graphika Manila, 2017.",
    width: 2048,
    height: 1365,
    caption: "Graphika Manila · 2017",
    kind: "stage",
  },
  {
    src: "/speaking/halography-02.webp",
    alt: "Halography Vietnam, 2018 — back of house.",
    width: 2048,
    height: 1365,
    caption: "Back of house · 2018",
    kind: "stage",
  },
  {
    src: "/instagram/forbes-30-under-30.jpg",
    alt: "Forbes 30 Under 30 Asia recognition, 2020.",
    width: 640,
    height: 800,
    caption: "Forbes 30U30 Asia · 2020",
    kind: "portrait",
  },
];

export default function SpeakingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className={styles.head}>
        <div className={`container ${styles.headInner}`}>
          <div className={styles.copy}>
            <span className="eyebrow">04 / 06 · Speaking &amp; Talks</span>
            <h1 className={styles.title}>
              Speaking
              <br />&amp; Talks<span className={styles.dot}>.</span>
            </h1>
            <p className={styles.kicker}></p>
            <p className={styles.lede}>
              I speak about creative entrepreneurship, storytelling systems, and emerging tools.
              From the perspective of someone who built studios, shipped campaigns, and now teaches
              while exploring what&apos;s next.
            </p>
            <div className={styles.ctas}>
              <ButtonLink href="/contact">Invite {site.name.split(" ")[0]} to speak</ButtonLink>
            </div>
            <ul className={styles.availability}>
              <li>
                <span className="accent-dot" aria-hidden />
                <span>Currently available</span>
              </li>
              <li aria-hidden>·</li>
              <li>
                <span className="accent-dot accent-dot--amber" aria-hidden />
                <span>For conferences, events &amp; workshops</span>
              </li>
            </ul>
          </div>
            <div className={styles.visual}>
              <Image
                src={heroSnapshot.src}
                alt={heroSnapshot.alt}
                width={heroSnapshot.width}
                height={heroSnapshot.height}
                sizes="(min-width: 900px) 720px, 100vw"
                className={styles.visualImg}
                priority
              />
              <div className={styles.visualBadge}>
                <span className="mono">2017 — PRESENT</span>
                <span>3 venues</span>
                <span>3 countries</span>
              </div>
            </div>
        </div>
      </header>

      <section className={`container ${styles.topics}`} aria-labelledby="topics-title">
        <div className={styles.topicsHead}>
          <span className="eyebrow">Topics covered</span>
          <KeyframeBar total={4} activeIndex={1} label="" />
        </div>
        <h2 id="topics-title" className="sr-only">Speaking topics</h2>
        <ol className={styles.topicList}>
          {speakingTopics.map((t, i) => (
            <li key={t.title} className={styles.topicItem} data-reveal>
              <span className={`${styles.topicNum} mono`}>{t.tag}</span>
              <div>
                <h3>{t.title}</h3>
                <p>{t.description}</p>
              </div>
              <span className={styles.topicArrow} aria-hidden>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className={`container ${styles.engagements}`} aria-labelledby="eng-title">
        <div className={styles.engHead}>
          <span className="eyebrow">Past engagements</span>
          <div className={styles.engKeys}>
            <KeyframeBar total={6} activeIndex={2} label="Frame ticks" />
            <div className={styles.engTicks}>
              {[2017, 2018, 2019, 2020, 2021, 2027].map((t, i) => (
                <span key={t} className={`mono ${i === 2 ? styles.tickActive : ""}`}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <h2 id="eng-title" className="sr-only">Past engagements</h2>
        <ul className={styles.engList}>
          {engagements.map((e) => {
            const isFuture = e.year > new Date().getFullYear();
            return (
              <li key={`${e.org}-${e.year}`} className={styles.engItem} data-reveal>
                <div className={`${styles.engDate} ${isFuture ? styles.engDateFuture : ""}`}>
                  <span className={styles.engDateYear}>{e.year}</span>
                  <span className={styles.engDateLabel}>{isFuture ? "Upcoming" : "Past"}</span>
                </div>
                <div className={styles.engBody}>
                  <h3>{e.org}</h3>
                  <p className={styles.engRole}>{e.role}</p>
                  <p className={styles.engLoc}>
                    {e.city}, {e.country}
                  </p>
                </div>
                {e.url && (
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.engLink}
                    aria-label={`Open ${e.org} website`}
                  >
                    Visit
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <polyline points="14 6 20 12 14 18" />
                    </svg>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <section className={`container ${styles.snap}`} aria-labelledby="snap-title">
        <div className={styles.snapHead}>
          <span className="eyebrow">On stage &amp; in the work</span>
          <span className="mono">SNAPSHOTS · 05</span>
        </div>
        <h2 id="snap-title" className="sr-only">Snapshots</h2>
        <ul className={styles.snapGrid}>
          {snapshots.map((s) => (
            <li key={s.src} className={styles.snapItem} data-reveal>
              <figure className={`${styles.snapFrame} ${styles[`snapKind_${s.kind}`] ?? ""}`}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  sizes="(min-width: 1100px) 33vw, (min-width: 720px) 50vw, 100vw"
                  className={styles.snapImg}
                />
                <figcaption className={styles.snapCaption}>{s.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.quote}`} aria-label="Testimonial">
        <blockquote>
          <p>
            <span className={styles.openQuote}>&ldquo;</span>
            {testimonial.quote}
          </p>
          <footer>
            <span>— {testimonial.author}</span>
            <span>{testimonial.role}</span>
          </footer>
        </blockquote>
      </section>

      <section className={`container ${styles.invite}`} aria-labelledby="invite-title">
        <div className={styles.inviteInner}>
          <span className="eyebrow">06 · Invite to speak</span>
          <h2 id="invite-title" className={styles.inviteTitle}>Invite {site.name.split(" ")[0]} to speak.</h2>
          <p className={styles.inviteDesc}>
            For conferences, brand events, workshops, and creative-industry conversations.
          </p>
        </div>
        <div className={styles.inviteActions}>
          <ButtonLink href="/contact">Start a conversation</ButtonLink>
          <a href={`mailto:${site.email}`} className={styles.inviteMail}>
            Email directly
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
