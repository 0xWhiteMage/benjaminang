import type { Metadata } from "next";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { WorkArchive } from "./work-archive";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work & Archive",
  description: `A working notebook — motion, film, brand work, companies and creative-technology experiments by ${site.name} and Genesis Motion Design.`,
  alternates: { canonical: `${site.url}/work` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work` },
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
          <span className="eyebrow">Work · {projects.length} projects</span>
          <h1 className={styles.title}>
            Work<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.lede}>
            Less a portfolio than a working notebook — the projects, studios, ventures and experiments that make up a life spent bridging creativity and technology.
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
