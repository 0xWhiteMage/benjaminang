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
            I'm open to conversations across innovation, strategy planning,
            design management, and education. I also take on selected creative
            direction and advisory work. If you're hiring, building an innovation
            function, or shaping how teams adopt new tools, I'd love to hear what
            you're working on.
          </p>
        </div>
      </header>

      <ContactPanel />
    </>
  );
}
