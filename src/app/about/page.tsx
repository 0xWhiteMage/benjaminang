import type { Metadata } from "next";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: `How a motion designer's work widened into companies, films, products and ideas — and the throughline beneath it all: understanding complex systems, and bringing out the best in them.`,
  alternates: { canonical: `${site.url}/about` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${site.url}/about` },
  ],
};

const milestones = [
  {
    year: "2012",
    title: "Nanyang Polytechnic",
    detail: "Diploma in Motion Graphics and Broadcast Design.",
  },
  {
    year: "2012",
    title: "Internship at Blind, Los Angeles",
    detail:
      "Selected for an internship at Blind, Los Angeles. Immersed in a fast-paced creative environment where design, story, and motion came together to build bold ideas for global brands.",
  },
  {
    year: "2015",
    title: "Founded Genesis Motion Design",
    detail:
      "Founded Genesis Motion Design, an award-winning boutique motion design & animation studio in Singapore, to bridge the gap between Asian hustle and American playfulness.",
  },
  {
    year: "Since",
    title: "Grew from creative execution into strategy, leadership, production, education and creative technology.",
    detail: "",
  },
];

const skills = [
  "Business Management",
  "Brand Positioning & Marketing Strategy",
  "Outreach & Publicity",
  "Sales & Business Development",
  "Finance & Budgeting",
  "Human Resource Management",
  "Project Management",
  "Creative Direction",
  "Art Direction",
  "Motion Graphics",
  "Graphic Design",
  "Video Production",
  "Sound Engineering",
];

const principles = [
  "Start with the human, not the technology.",
  "Make complex things simple, never simplistic.",
  "Build the thing that doesn't exist yet.",
  "Stay a beginner on purpose.",
  "Stand in the intersections.",
  "Trust is the real interface.",
  "Taste is a form of thinking.",
  "Finish things — then question them.",
];

const interests = [
  {
    title: "How systems behave",
    description: "Economics, markets, housing, geopolitics",
  },
  {
    title: "How minds work",
    description: "Psychology, leadership, trust",
  },
  {
    title: "How machines think",
    description: "AI agents, local LLMs, creative automation",
  },
  {
    title: "How things get made",
    description: "Product, entrepreneurship, motion, film",
  },
  {
    title: "How worlds connect",
    description: "The throughline behind all of it",
  },
];

const lead = "Most introductions start with a job title. Mine has stopped fitting.";

const openingNarrative = `For years the honest answer was motion designer — true, until it wasn't enough. What I actually loved was never the animation; it was the making — and motion was just the first material I learned to think with. Once I understood that, the lines between motion, business, technology and storytelling dissolved; they're all the same act in different materials. But the making was never the point. It was how I think — and I've come to trust ideas over titles, and a question over any single craft.`;

const returningTo = `How complex systems actually work — and how to bring out the best in them. As AI becomes the substrate under modern work, that stops being abstract and becomes urgent — and the hard part was never capability. It's trust.`;

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className={styles.head}>
        <div className="container">
          <span className="eyebrow">About {site.name}</span>
          <h1 className={styles.title}>
            {lead}
          </h1>
          <p className={styles.lede}>
            {openingNarrative}
          </p>
        </div>
      </header>

      <section className={`container ${styles.story}`} aria-labelledby="returning-title">
        <div className={styles.storyInner}>
          <div className={styles.storyLabel}>
            <span className={styles.storyLabelText}>02 / What I keep returning to</span>
            <h2 id="returning-title" className={styles.storyHeading}>
              {returningTo}
            </h2>
          </div>
          <div className={styles.storyBody}>
            <p className={styles.storyPara}>
              {returningTo}
            </p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.principles}`} aria-labelledby="principles-title">
        <div className={styles.principlesIntro}>
          <span className="eyebrow">Principles</span>
          <h2 id="principles-title" className={styles.principlesTitle}>
            How I work
          </h2>
        </div>
        <ul className={styles.principlesList}>
          {principles.map((p, i) => (
            <li key={i} className={styles.principlesItem}>
              <span className={`${styles.principlesNum} mono`}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.principlesText}>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.interests}`} aria-labelledby="interests-title">
        <div className={styles.interestsIntro}>
          <span className="eyebrow">What I'm paying attention to</span>
          <h2 id="interests-title" className={styles.interestsTitle}>
            Interests as investigations
          </h2>
        </div>
        <ul className={styles.interestsList}>
          {interests.map((item, i) => (
            <li key={i} className={styles.interestsItem}>
              <h3 className={styles.interestsItemTitle}>{item.title}</h3>
              <p className={styles.interestsItemDesc}>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.milestones}`} aria-labelledby="milestones-title">
        <div className={styles.milestonesIntro}>
          <span className="eyebrow">Milestones</span>
          <h2 id="milestones-title" className={styles.milestonesTitle}>
            The path — from polytechnic to practice.
          </h2>
        </div>
        <details className={styles.milestonesToggle}>
          <summary className={styles.milestonesSummary}>
            <span>Show milestones</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </summary>
          <ul className={styles.milestonesList}>
            {milestones.map((m, i) => (
              <li key={i} className={styles.milestonesItem}>
                <span className={`${styles.milestonesYear} mono`}>{m.year}</span>
                <div className={styles.milestonesContent}>
                  <h3 className={styles.milestonesItemTitle}>{m.title}</h3>
                  {m.detail && <p className={styles.milestonesItemDetail}>{m.detail}</p>}
                </div>
              </li>
            ))}
          </ul>
        </details>
      </section>

      <section className={`container ${styles.skills}`} aria-labelledby="skills-title">
        <div className={styles.skillsIntro}>
          <span className="eyebrow">Skills / experience matrix</span>
          <h2 id="skills-title" className={styles.skillsTitle}>
            {skills.length} skills across business, creative, and technical domains.
          </h2>
        </div>
        <ul className={styles.skillsList}>
          {skills.map((s, i) => (
            <li key={i} className={styles.skillsItem}>
              <span className={`${styles.skillsNum} mono`}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.skillsName}>{s}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
