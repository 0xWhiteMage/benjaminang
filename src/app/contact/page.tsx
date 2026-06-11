import type { Metadata } from "next";
import { ContactPanel } from "./contact-panel";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a conversation about something ambitious — creative, technology, or somewhere in between. Collaborate with ${site.name}.`,
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
            The best collaborations I've had didn't start with a brief — they
            started with a good conversation. This is an open invitation to one.
          </p>
          <p className={styles.lede}>
            I'm interested in work at the edges: creative + technology, strategy
            + execution, ambitious things that need someone comfortable in more
            than one world.
          </p>
        </div>
      </header>

      <ContactPanel />
    </>
  );
}
