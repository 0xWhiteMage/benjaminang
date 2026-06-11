import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { pressMentions } from "@/lib/press";
import { PressList } from "./press-list";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Credentials & Press",
  description: `Forbes 30 Under 30 Asia and features in Entrepreneur, IdN, Vulcan Post and more.`,
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
            Selected recognition and press — quietly, for the record.
          </p>
        </div>
      </header>

      <section className={`container ${styles.featured}`} aria-labelledby="forbes-title">
        <div className={styles.featuredCard}>
          <div className={styles.featuredBody}>
            <span className="eyebrow eyebrow--accent">
              <span className={styles.featuredLine} aria-hidden /> Award
            </span>
            <h2 id="forbes-title" className={styles.featuredTitle}>
              Forbes 30 Under 30 Asia
            </h2>
            <span className={styles.featuredYear}>2020</span>
            <p className={styles.featuredDesc}>
              Media, Marketing &amp; Advertising — Class of 2020.
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
    </>
  );
}
