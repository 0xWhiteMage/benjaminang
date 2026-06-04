import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { site } from "@/lib/site";
import { pressMentions } from "@/lib/press";
import { PressList } from "./press-list";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Credentials & Press",
  description: `Recognition, editorial features, and industry mentions for ${site.name}. Featured: Forbes 30 Under 30 Asia (2020).`,
  alternates: { canonical: `${site.url}/credentials` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Credentials", item: `${site.url}/credentials` },
  ],
};

export default function CredentialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className={styles.head}>
        <div className="container">
          <span className="eyebrow">Credentials / Press</span>
          <h1 className={styles.title}>
            Credentials
            <br />&amp; Press<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.lede}>
            A selection of recognition, editorial features and industry mentions
            that reflect the work, ideas and impact across motion design,
            storytelling and creative direction.
          </p>
        </div>
      </header>

      <section className={`container ${styles.featured}`} aria-labelledby="forbes-title">
        <div className={styles.featuredCard}>
          <div className={styles.featuredBody}>
            <span className="eyebrow eyebrow--accent">
              <span className={styles.featuredLine} aria-hidden /> Featured recognition
            </span>
            <h2 id="forbes-title" className={styles.featuredTitle}>
              Forbes 30 Under 30 Asia
            </h2>
            <span className={styles.featuredYear}>2020</span>
            <p className={styles.featuredDesc}>
              Honoured to be recognised among Asia's most promising young leaders
              in Media, Marketing &amp; Advertising.
            </p>
            <dl className={styles.featuredMeta}>
              <div>
                <dt>Category</dt>
                <dd>Award</dd>
              </div>
              <div>
                <dt>Region</dt>
                <dd>Asia</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>2020</dd>
              </div>
            </dl>
            <Link
              href="https://www.forbes.com/30-under-30/2020/asia/media-marketing-advertising/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featuredCta}
            >
              See the list
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </Link>
          </div>
          <div className={styles.featuredMedia}>
            <Image
              src="/instagram/forbes-30-under-30.jpg"
              alt="Benjamin Ang — Forbes 30 Under 30 Asia, Class of 2020."
              width={640}
              height={800}
              sizes="(min-width: 900px) 480px, 100vw"
              className={styles.featuredImg}
              priority
            />
          </div>
        </div>
      </section>

      <section className={`container ${styles.press}`} aria-labelledby="press-title">
        <PressList items={pressMentions} />
      </section>

      <section className={`container ${styles.credibility}`} aria-labelledby="cred-title">
        <span className="eyebrow">Credibility statement</span>
        <h2 id="cred-title" className="sr-only">What organisers say</h2>
        <div className={styles.credibilityInner}>
          <blockquote>
            <p>
              <span className={styles.credOpen}>&ldquo;</span>
              Benjamin approaches every project with clarity, heart and craft —
              turning complex ideas into stories that move people and performance.
              <span className={styles.credClose}>&rdquo;</span>
            </p>
            <footer>
              <span>— Industry peer</span>
              <span>Asia creative circuit</span>
            </footer>
          </blockquote>
          <div className={styles.credibilityCta}>
            <h3>Request full bio / press kit</h3>
            <p>For speaking engagements, collaborations or press enquiries, request the full bio and media kit.</p>
            <ButtonLink href="/contact" variant="outline">Enquire about speaking &amp; collaborations</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
