import type { Metadata } from "next";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { WorkArchive } from "./work-archive";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work archive",
  description: `A curated selection of projects by ${site.name} across creative direction, motion design, brand film, and campaigns.`,
  alternates: { canonical: `${site.url}/work` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Work archive", item: `${site.url}/work` },
  ],
};

const ventures = Array.from(
  new Set(projects.map((p) => p.venture))
).sort();

const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <header className={styles.head}>
        <div className="container">
          <span className="eyebrow">Work archive · {projects.length} projects</span>
          <h1 className={styles.title}>
            Work archive<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.lede}>
            Four pillars of my work. Building studios, shipping creative direction, exploring new tech, and teaching what I learn.
          </p>
        </div>
      </header>
      <WorkArchive
        projects={projects}
        ventures={ventures}
        years={years}
      />
    </>
  );
}
