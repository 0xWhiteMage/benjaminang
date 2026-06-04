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
    title: "Founded Balance Creative — production structure + workflows",
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
    title: "Creative entrepreneur — AI workflows + education",
    detail:
      "Exploring creative technology, human-centred AI workflows, Web3, and education while leading creative direction.",
    kind: "Today",
    expanded: false,
  },
];

const disciplines = [
  "Narrative & Strategy",
  "Creative Direction",
  "Delivery & Stakeholders",
  "Creative Technology & AI Workflows",
  "Education"
];

const story = [
  "I started in motion design because I loved the craft. The idea that you could make people feel something through movement, timing, and visual rhythm — that hooked me.",
  "Then I built studios. Genesis Motion Design grew from a one-person operation to a 15-person team. We shipped campaigns for brands across Asia. I learned how to lead creative direction, manage production, and build cultures that deliver.",
  "Balance Creative came next. A deliberate build — focused on production structure, workflows, and the systems that make creative work repeatable. Not just making things look good. Making things work.",
  "Along the way, I started teaching at Nanyang Polytechnic. Practice-led curriculum. Industry-real. AI-aware. I wanted to give students what I wish I had when I started.",
  "Now I'm exploring creative technology, human-centred AI workflows, and Web3. Not as buzzwords. As tools that change how we tell stories, build teams, and ship work."
];

const pullquote = {
  text: "I build stories, teams, and experiments. The foundation is creative direction. The curiosity is what's next.",
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
            Creative entrepreneur by choice<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.lede}>
            I build stories, teams, and experiments. My foundation is creative direction and storytelling. My current curiosity lives in creative technology, human-centred AI workflows, Web3, and education.
          </p>
          <ul className={styles.tags}>
            <li>Singapore-based</li>
            <li aria-hidden>·</li>
            <li>Creative direction</li>
            <li aria-hidden>·</li>
            <li>Strategy</li>
            <li aria-hidden>·</li>
            <li>Creative technology</li>
            <li aria-hidden>·</li>
            <li>Education</li>
            <li aria-hidden>·</li>
            <li>Founder (Genesis Motion Design, Balance)</li>
            <li aria-hidden>·</li>
            <li>Adjunct Lecturer (NYP)</li>
          </ul>
        </div>
      </header>

      <AboutTimeline milestones={milestones} />

      <section className={`container ${styles.story}`} aria-labelledby="story-title">
        <div className={styles.storyInner}>
          <div className={styles.storyLabel}>
            <span className={styles.storyLabelText}>01 / The story</span>
            <h2 id="story-title" className={styles.storyHeading}>
              From craft to company to what's next.
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
            Five pillars. From narrative to technology to education.
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
          {disciplines.map((t, i) => (
            <li key={i} className={styles.discItem} data-reveal>
              <span className={`${styles.discNum} mono`}>{String(i + 1).padStart(2, "0")}</span>
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
