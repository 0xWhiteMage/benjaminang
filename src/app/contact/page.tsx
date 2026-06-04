import type { Metadata } from "next";
import { ContactPanel } from "./contact-panel";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. For project enquiries, speaking invitations, and strategic collaborations.`,
  alternates: { canonical: `${site.url}/contact` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className={styles.head}>
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className={styles.title}>
            Let's make
            <br /> something meaningful<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.lede}>
            I partner with brands, teams, and organisations to turn complex
            ideas into clear narratives and compelling motion experiences.
            Best for project enquiries, speaking invitations,
            and strategic collaborations.
          </p>
        </div>
      </header>

      <ContactPanel />
    </>
  );
}
