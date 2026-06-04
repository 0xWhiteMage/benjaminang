import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button";
import { KeyframeBar } from "@/components/keyframe-bar";
import { LiveTimecode } from "@/components/live-timecode";
import { ProjectCard } from "@/components/project-card";
import { projects, projectBySlug } from "@/lib/projects";
import { site } from "@/lib/site";
import styles from "./case-study.module.css";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = projectBySlug(params.slug);
  if (!p) return { title: "Project not found" };
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `${site.url}/work/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.summary,
      url: `${site.url}/work/${p.slug}`,
      type: "article",
      images: [{ url: p.hero.src, width: p.hero.width, height: p.hero.height, alt: p.hero.alt }],
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const p = projectBySlug(params.slug);
  if (!p) notFound();

  const related = (p.related ?? [])
    .map((s) => projects.find((x) => x.slug === s))
    .filter(Boolean) as typeof projects;

  const isTbd = p.kind === "tbd";
  const ld = {
    "@context": "https://schema.org",
    "@type": isTbd ? "CreativeWork" : "CreativeWork",
    name: p.title,
    description: p.summary,
    creator: { "@type": "Person", name: site.name },
    keywords: [p.venture, p.role, p.client],
    dateCreated: `${p.year}`,
    about: p.client,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work` },
      { "@type": "ListItem", position: 3, name: p.title, item: `${site.url}/work/${p.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article className={styles.article}>
        {/* HERO MEDIA */}
        {!isTbd && (
          <header className={styles.hero}>
            <div className={`container ${styles.heroInner}`}>
              <div className={styles.heroMedia} data-reveal>
                <Image
                  src={p.hero.src}
                  alt={p.hero.alt}
                  width={p.hero.width}
                  height={p.hero.height}
                  priority
                  sizes="(min-width: 1200px) 1200px, 100vw"
                  className={styles.heroImg}
                />
                <div className={styles.heroOverlay}>
                  <span className="mono">{p.year} · {p.gallery.length.toString().padStart(2, "0")} FRAMES</span>
                </div>
              </div>
            </div>
          </header>
        )}

        {/* TITLE BLOCK */}
        <section className={`container ${styles.titleBlock}`}>
          <div className={styles.titleHead}>
            <span className="eyebrow">{isTbd ? "Coming soon" : `Case study · ${p.venture}`}</span>
            <div className={styles.titleNav}>
              <span className="mono">{String(projects.findIndex((x) => x.slug === p.slug) + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            </div>
          </div>
          <h1 className={styles.title}>{p.title}</h1>
          <p className={styles.summary}>{p.summary}</p>
        </section>

        {isTbd ? (
          <TbdNotice project={p} />
        ) : (
          <>
            {/* META BAR */}
            <section className={`container ${styles.metaBar}`}>
              <div>
                <span className="eyebrow">Client / Venture</span>
                <span className={styles.metaValue}>{p.client}</span>
              </div>
              <div>
                <span className="eyebrow">Year</span>
                <span className={styles.metaValue}>{p.year}</span>
              </div>
              <div>
                <span className="eyebrow">Role</span>
                <span className={styles.metaValue}>{p.role}</span>
              </div>
              <div>
                <span className="eyebrow">Venture</span>
                <span className={styles.metaValue}>{p.venture}</span>
              </div>
            </section>

            {p.location && (
              <section className={`container ${styles.metaBar}`} style={{ marginTop: "calc(-1 * var(--space-7))" }}>
                <div>
                  <span className="eyebrow">Location</span>
                  <span className={styles.metaValue}>{p.location}</span>
                </div>
                {p.url && (
                  <div>
                    <span className="eyebrow">Website</span>
                    <a className={styles.metaValue} href={p.url} target="_blank" rel="noopener noreferrer">
                      {p.url.replace(/^https?:\/\//, "")} ↗
                    </a>
                  </div>
                )}
                <div>
                  <span className="eyebrow">Status</span>
                  <span className={styles.metaValue}>
                    {p.status
                      ? ({ active: "Active", archived: "Archived", tbd: "TBD" }[p.status] ?? p.status)
                      : "—"}
                  </span>
                </div>
                <div />
              </section>
            )}

            {/* CHALLENGE / APPROACH */}
            <section className={`container ${styles.split}`}>
              <article data-reveal>
                <span className="eyebrow">02 · Challenge</span>
                <h2 className={styles.h2}>The brief.</h2>
                <p className={styles.prose}>{p.challenge}</p>
              </article>
              <article data-reveal>
                <span className="eyebrow">03 · Approach</span>
                <h2 className={styles.h2}>The frame.</h2>
                <p className={styles.prose}>{p.approach}</p>
              </article>
            </section>

            {/* PROCESS TIMELINE */}
            {p.process.length > 0 && p.gallery.length > 0 && (
              <section className={`container ${styles.process}`}>
                <div className={styles.processHead}>
                  <span className="eyebrow">04 · Process</span>
                  <div className={styles.processKeys}>
                    <KeyframeBar total={p.process.length + 2} activeIndex={2} label="Keyframes" />
                    <div className={styles.processTicks}>
                      {[100, 105, 110, 115, 120].map((t, i) => (
                        <span key={t} className={`mono ${i === 2 ? styles.tickActive : ""}`}>{t}</span>
                      ))}
                    </div>
                    <LiveTimecode className={styles.timecode} format="smpte" />
                  </div>
                </div>
                <ol className={styles.processList}>
                  {p.process.map((step) => {
                    const stepImage = step.image ?? p.gallery[Number(step.step) - 1];
                    return (
                      <li key={step.step} className={styles.processItem} data-reveal>
                        <div className={styles.processMeta}>
                          <span className="mono">{step.step}</span>
                          <h3>{step.title}</h3>
                          <p>{step.description}</p>
                        </div>
                        <div className={styles.processMedia}>
                          {stepImage ? (
                            <Image
                              src={stepImage.src}
                              alt={stepImage.alt}
                              width={stepImage.width}
                              height={stepImage.height}
                              sizes="(min-width: 720px) 50vw, 100vw"
                              className={styles.processImg}
                            />
                          ) : (
                            <div className={styles.processPlaceholder} aria-hidden />
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            )}

            {/* OUTCOME */}
            {p.outcome.length > 0 && (
              <section className={`container ${styles.outcome}`}>
                <span className="eyebrow">05 · Outcome</span>
                <h2 className={styles.h2}>By the numbers.</h2>
                <ul className={styles.outcomeGrid}>
                  {p.outcome.map((o) => (
                    <li key={o.label} className={styles.outcomeItem} data-reveal>
                      <span className={styles.outcomeValue}>{o.value}</span>
                      <span className={styles.outcomeLabel}>{o.label}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* CREDITS */}
            {p.credits.length > 0 && (
              <section className={`container ${styles.credits}`}>
                <span className="eyebrow">06 · Credits</span>
                <ul className={styles.creditsList}>
                  {p.credits.map((c) => (
                    <li key={c.role} className={styles.creditItem}>
                      <span className={styles.creditRole}>{c.role}</span>
                      <span className={styles.creditName}>{c.name}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* GALLERY */}
            {p.gallery.length > 0 && (
              <section className={`container ${styles.gallery}`}>
                <div className={styles.galleryHead}>
                  <span className="eyebrow">07 · Gallery</span>
                  <Link href="/work" className={styles.viewAll}>
                    Back to archive
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <polyline points="14 6 20 12 14 18" />
                    </svg>
                  </Link>
                </div>
                <div className={styles.galleryGrid}>
                  {p.gallery.map((g, i) => (
                    <div key={g.src} className={styles.galleryItem} data-reveal>
                      <Image
                        src={g.src}
                        alt={g.alt}
                        width={g.width}
                        height={g.height}
                        sizes="(min-width: 1200px) 25vw, (min-width: 720px) 50vw, 100vw"
                        className={styles.galleryImg}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* RELATED */}
        {related.length > 0 && !isTbd && (
          <section className={`container ${styles.related}`}>
            <div className={styles.relatedHead}>
              <span className="eyebrow">08 · Related projects</span>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <div key={r.slug} data-reveal>
                  <ProjectCard project={r} variant="list" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* NEXT CTA */}
        <section className={`container ${styles.nextCta}`}>
          <div>
            <span className="eyebrow">Next</span>
            <h2 className={styles.nextTitle}>Have a brief in mind?</h2>
            <p>Let's make it precise, on time, and worth the frame.</p>
          </div>
          <ButtonLink href="/contact" variant="primary">Start a conversation</ButtonLink>
        </section>
      </article>
    </>
  );
}

function TbdNotice({ project }: { project: typeof projects[number] }) {
  return (
    <section className={`container ${styles.tbdBanner}`} aria-label="Project status">
      <div className={styles.tbdInner}>
        <span className={styles.tbdBadge}>IN DEVELOPMENT</span>
        <h2 className={styles.tbdTitle}>This venture is being built.</h2>
        <p className={styles.tbdLede}>
          Details on {project.title.toLowerCase()} — what it is, when it ships, and how to get involved —
          will land here when ready. In the meantime, the best way to stay close is to get in touch.
        </p>
        <div className={styles.tbdActions}>
          <ButtonLink href="/contact" variant="primary">Get notified</ButtonLink>
          <Link href="/work" className={styles.tbdBack}>
            Back to work
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
