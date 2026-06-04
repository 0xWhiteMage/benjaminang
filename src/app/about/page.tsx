import type { Metadata } from "next";
import { site } from "@/lib/site";
import { AboutTimeline } from "./about-timeline";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — designer & animator by training, creative business strategist through experience. A multidisciplinary foundation from strategy to execution.`,
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
    index: "01",
    year: "2011",
    org: "CRITICA",
    title: "School Internship, CRITICA",
    detail:
      "3-month school internship at CRITICA, a Singapore-based boutique design studio. Part of the NYP Motion Graphics & Broadcast Design diploma.",
    kind: "Education",
    expanded: true,
  },
  {
    index: "02",
    year: "2012",
    title: "Nanyang Polytechnic",
    detail: "Diploma in Motion Graphics and Broadcast Design.",
    kind: "Education",
    expanded: false,
  },
  {
    index: "03",
    year: "2012",
    org: "Blind",
    title: "Los Angeles Internship",
    detail:
      "Selected for an internship at Blind, Los Angeles. Immersed in a fast-paced creative environment where design, story, and motion came together to build bold ideas for global brands.",
    kind: "Career",
    expanded: true,
  },
  {
    index: "04",
    year: "2015",
    title: "Founded Genesis",
    detail:
      "Founded Genesis Motion Design, an award-winning boutique motion design & animation studio in Singapore, to bridge the gap between Asian hustle and American playfulness.",
    kind: "Venture",
    focus: ["Brand films", "Campaigns", "Experiences"],
    expanded: true,
  },
  {
    index: "05",
    year: "2016",
    title: "Adjunct Lecturer, 3dsense Media School",
    detail:
      "Taught Motion Graphics as an adjunct lecturer at 3dsense Media School, Singapore — a specialist school for animation, VFX and games.",
    kind: "Teaching",
    expanded: true,
  },
  {
    index: "06",
    year: "2018",
    title: "Founded Balance",
    detail:
      "Founded Balance Creative, an award-winning boutique video production agency operating across Ho Chi Minh City, Vietnam and Singapore.",
    kind: "Venture",
    focus: ["Video production", "Cross-border"],
    expanded: false,
  },
  {
    index: "07",
    year: "2022",
    title: "Adjunct Lecturer, NYP — School of Design & Media",
    detail:
      "Practice-led modules in Advertising Conceptualisation / Design Thinking, Storyboarding, Moodboards & Styleframes, 3D (Cinema 4D), Motion Graphics (After Effects), and Social Media Content. Teaching is the work that pays forward.",
    kind: "Teaching",
    expanded: true,
  },
  {
    index: "08",
    year: "2026",
    title: "MA Digital Management, Hyper Island",
    detail:
      "Master of Arts in Digital Management (Class of 2026, part-time) — degree awarded by Teesside University, UK. Coursework in digital transformation, business leadership, and creative problem-solving. Master's thesis: human-centred design principles for AI-powered client-communication agents — how tone, transparency, and human-in-the-loop workflows build client trust in creative services.",
    kind: "Education",
    expanded: true,
  },
  {
    index: "09",
    year: "Today",
    title: "Creative Director / Motion Designer / Business Strategist",
    detail:
      "Helping brands and teams move people and performance through clarity, motion, and impact. Studio philosophy: Make It Better. Forbes 30 Under 30 Asia, Class of 2020.",
    kind: "Today",
    expanded: false,
  },
];

const disciplines = [
  ["01", "Business Management"],
  ["02", "Brand Positioning & Marketing Strategy"],
  ["03", "Outreach & Publicity"],
  ["04", "Sales & Business Development"],
  ["05", "Finance & Budgeting"],
  ["06", "Human Resource Management"],
  ["07", "Project Management"],
  ["08", "Creative Direction"],
  ["09", "Art Direction"],
  ["10", "Motion Graphics"],
  ["11", "Graphic Design"],
  ["12", "2D & 3D Animation"],
  ["13", "AR / VR Experience"],
  ["14", "Video Production"],
  ["15", "Sound Engineering"],
];

const story = [
  "Born and raised in Singapore, Benjamin Ang begun his career as a motion designer. Graduated from Nanyang Polytechnic with a diploma in Motion Graphics and Broadcast Design in 2012, and decided to not further pursue his education.",
  "After graduation, he took a 3-month internship at an amazing company in Los Angeles, California, called Blind. Having worked in both Singapore and Los Angeles, he noticed a disparity of approaching work and the importance of culture, between the two motion design industries.",
  "He started Genesis in 2015 at age 24, with S$15,000 of his own savings, to bridge the gap by infusing a positive blend of both cultures — the Asian hustle and the open playfulness of the other. Repeatedly told impossible due to the local social norms of overworking, over-competitiveness and hierarchies, which till this day, is his motivation to prove others wrong and that a balance is still possible if entrepreneurs embrace the persistence to try.",
  "Studio philosophy: Make It Better. Ego down, open-minded, push the work, support each other. He grew Genesis to a 15-person team, bootstrapped, with SGD 5M+ in revenue — recognised by Forbes 30 Under 30 Asia (2020), the Webby Awards, the W3 Awards (Best of Show), and a long list of industry publications. He co-founded Balance Studio in 2019, a Vietnam and Singapore–based production house for brand films, post-production and Hybrid AI.",
  "Today, he's an Adjunct Lecturer at Nanyang Polytechnic (School of Design & Media, 2022–present), working through a part-time Master of Arts in Digital Management at Hyper Island (UK, Class of 2026), and still shipping — currently exploring AI-powered client-communication agents as a master's thesis topic at the intersection of human-centred design and creative services.",
];

const pullquote = {
  text: "I wanted to put Singapore's design and art scene at the forefront of the APAC region.",
  cite: "Benjamin Ang",
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header className={styles.head}>
        <div className="container">
          <span className="eyebrow">About {site.name}</span>
          <h1 className={styles.title}>
            Designer &amp; animator by training.
            <br />
            Creative business strategist through experience<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.lede}>
            I bridge design, motion, and strategy to create work that connects—moving people
            and driving results for brands and teams.
          </p>
          <ul className={styles.tags}>
            <li>Singapore-based</li>
            <li aria-hidden>·</li>
            <li>Born 1991</li>
            <li aria-hidden>·</li>
            <li>Creative Director</li>
            <li aria-hidden>·</li>
            <li>Motion Designer</li>
            <li aria-hidden>·</li>
            <li>Business Strategist</li>
          </ul>
        </div>
      </header>

      <AboutTimeline milestones={milestones} />

      <section className={`container ${styles.story}`} aria-labelledby="story-title">
        <div className={styles.storyInner}>
          <div className={styles.storyLabel}>
            <span className={styles.storyLabelText}>01 / The story</span>
            <h2 id="story-title" className={styles.storyHeading}>
              From Singapore to Los Angeles, and back — to build.
            </h2>
          </div>
          <div className={styles.storyBody}>
            {story.map((p, i) => (
              <p key={i} className={styles.storyPara}>
                {p}
              </p>
            ))}
            <figure className={styles.pullquote}>
              <blockquote>
                <p>&ldquo;{pullquote.text}&rdquo;</p>
              </blockquote>
              <figcaption>— {pullquote.cite}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={`container ${styles.disc}`} aria-labelledby="disc-title">
        <div className={styles.discIntro}>
          <span className="eyebrow">Experience &amp; disciplines</span>
          <h2 id="disc-title" className={styles.discTitle}>
            A multidisciplinary foundation that enables me to lead holistically — from strategy to execution.
          </h2>
          <a href="/credentials" className={styles.discLink}>
            See credentials &amp; press
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </a>
        </div>
        <ul className={styles.discGrid}>
          {disciplines.map(([i, t]) => (
            <li key={i} className={styles.discItem} data-reveal>
              <span className={`${styles.discNum} mono`}>{i}</span>
              <span className={styles.discName}>{t}</span>
              <span className={styles.discDot} aria-hidden />
            </li>
          ))}
        </ul>
        <p className={styles.discSummary}>
          <span className="mono">{disciplines.length} DISCIPLINES</span>
        </p>
      </section>
    </>
  );
}
