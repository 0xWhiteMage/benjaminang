"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const principles = [
  { title: "Build the thing that doesn't exist yet.", desc: "Create new paths instead of following them." },
  { title: "Start with the human, not the technology.", desc: "Empathy drives better systems and outcomes." },
  { title: "Stay loyal to the problem, not the medium.", desc: "Use the right tool for the job, not the one you know best." },
  { title: "Clarity over cleverness.", desc: "Make ideas simple, so they can scale." },
  { title: "Think in systems, design in experiences.", desc: "Connect the dots. Design how it all comes together." },
  { title: "Iterate with purpose.", desc: "Ship, learn, refine — momentum over perfection." },
  { title: "Collaborate with intent.", desc: "Great work is never a solo act." },
  { title: "Make work that matters.", desc: "Impact isn't an output — it's the point." },
];

const interests = [
  { title: "How systems behave", desc: "Economics, markets, housing, geopolitics" },
  { title: "How minds work", desc: "Psychology, leadership, trust" },
  { title: "How machines think", desc: "AI agents, local LLMs, creative automation" },
  { title: "How things get made", desc: "Product, entrepreneurship, motion, film" },
  { title: "How worlds connect", desc: "The throughline behind all of it" },
];

const interestsDetail = [
  "Exploring the invisible structures that shape markets, housing, and geopolitics — and how understanding them changes the way we design.",
  "How people think, decide, and trust. The psychology behind leadership and the systems that support it.",
  "Intelligence — natural and artificial. How machines learn, reason, and create, and how we design with them responsibly.",
  "The craft of making things — product, motion, film. Entrepreneurship as a creative practice.",
  "The throughline connecting all of it — systems, minds, machines, and making.",
];

const skills = [
  "Creative Direction", "Motion Design", "Strategy", "Brand & Narrative",
  "Product Thinking", "Film & Video", "Interaction", "Visual Systems",
  "AI & Automation", "Data & Systems", "Research", "Leadership", "Education",
];

const milestones = [
  { year: "2012", title: "Nanyang Polytechnic", detail: "Diploma in Motion Graphics and Broadcast Design." },
  { year: "2012", title: "Internship at Blind, Los Angeles", detail: "Selected for an internship at Blind, Los Angeles. Immersed in a fast-paced creative environment where design, story, and motion came together to build bold ideas for global brands." },
  { year: "2015", title: "Founded Genesis Motion Design", detail: "Founded Genesis Motion Design, an award-winning boutique motion design & animation studio in Singapore." },
  { year: "Since", title: "Grew into strategy, leadership, production, education and creative technology.", detail: "" },
];

export function AboutPageClient() {
  const [activeInterest, setActiveInterest] = useState(2);

  return (
    <>
      {/* Hero */}
      <header className={styles.head}>
        <div className="container">
          <span className="eyebrow">About</span>
          <h1 className={styles.title}>
            the making was never the point — it was how I think<span className={styles.dot}>.</span>
          </h1>
        </div>
      </header>

      {/* Journey */}
      <section className={`section ${styles.journey}`} aria-labelledby="journey-heading">
        <div className="container">
          <div className={styles.journeyGrid}>
            <div className={styles.journeyLeft} data-reveal>
              <span className="eyebrow">01 · JOURNEY</span>
              <h2 id="journey-heading" className={styles.sectionHeading}>
                I build at the intersection of creativity, technology, and strategy to help people and organisations move ideas into impact.
              </h2>
              <p className={styles.lede}>
                I&apos;m not interested in making things for the sake of making.
                I&apos;m interested in systems — how they work, how they change,
                and how design, motion and storytelling can make them better.
              </p>
            </div>
            <div className={styles.journeyRight} data-reveal="right">
              <div className={styles.pullquote}>
                <div className={styles.pullquoteAccent} aria-hidden />
                <blockquote>
                  <p>the making was never the point — it was how I think.</p>
                </blockquote>
              </div>
              <div className={styles.pullquote}>
                <div className={styles.pullquoteAccent} aria-hidden />
                <blockquote>
                  <p>understand the system, then bring out the best in it.</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Narrative */}
      <section className={`section ${styles.narrative}`} aria-labelledby="narrative-heading">
        <div className="container">
          <div className={styles.narrativeGrid}>
            <div className={styles.narrativeImage} data-reveal>
              <div className={styles.imageFrame}>
                <Image
                  src="/about/hero.webp"
                  alt="Benjamin Ang portrait"
                  fill
                  className={styles.image}
                  priority
                />
              </div>
              <div className={styles.imageCaption}>
                <span className="mono">FRAME 001</span>
                <span className="mono">2024</span>
              </div>
            </div>
            <div className={styles.narrativeBody} data-reveal="right">
              <h2 id="narrative-heading" className={styles.sectionHeading}>
                understand the system, then bring out the best in it.
              </h2>
              <p>
                My path has never been linear. It&apos;s been a series of environments, questions,
                and collaborations that shaped how I see and solve problems.
              </p>
              <p>
                From early curiosity to late nights in studios, from building businesses to
                directing films, the throughline has been consistent.
              </p>
              <p>
                Today, I partner with brands, teams, and founders to design strategies,
                craft stories, and build work that connects — with clarity, emotion, and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className={`section ${styles.principles}`} aria-labelledby="principles-heading">
        <div className="container">
          <div className={styles.sectionHeader} data-reveal>
            <span className="eyebrow">02 · PRINCIPLES</span>
            <h2 id="principles-heading" className={styles.sectionHeading}>How I work</h2>
          </div>
          <div className={styles.principlesGrid}>
            {principles.map((p, i) => (
              <div key={i} className={styles.principleItem} data-reveal>
                <span className={`${styles.principleNum} mono`}>{String(i + 1).padStart(2, "0")}</span>
                <div className={styles.principleContent}>
                  <h3 className={styles.principleTitle}>{p.title}</h3>
                  <p className={styles.principleDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className={`section ${styles.interests}`} aria-labelledby="interests-heading">
        <div className="container">
          <div className={styles.sectionHeader} data-reveal>
            <span className="eyebrow">03 · INTERESTS</span>
            <h2 id="interests-heading" className={styles.sectionHeading}>Interests as investigations</h2>
          </div>
          <div className={styles.interestsGrid}>
            <div className={styles.interestsDots} data-reveal>
              {interests.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.interestDot} ${activeInterest === i ? styles.interestDotActive : ""}`}
                  onClick={() => setActiveInterest(i)}
                >
                  <div className={styles.dotCircle}>
                    <div className={styles.dotInner} />
                  </div>
                  <span className={styles.dotLabel}>{item.title}</span>
                </button>
              ))}
            </div>
            <div className={styles.interestsDetail} data-reveal="right">
              <span className="mono">{String(activeInterest + 1).padStart(2, "0")} / {String(interests.length).padStart(2, "0")}</span>
              <h3 className={styles.interestTitle}>{interests[activeInterest].title}</h3>
              <p className={styles.interestDesc}>{interestsDetail[activeInterest]}</p>
              <a href="#" className={styles.ctaLink}>
                EXPLORE THIS INVESTIGATION
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className={`section ${styles.experience}`} aria-labelledby="experience-heading">
        <div className="container">
          <div className={styles.sectionHeader} data-reveal>
            <span className="eyebrow">04 · EXPERIENCE &amp; DISCIPLINES</span>
            <h2 id="experience-heading" className={styles.sectionHeading}>13 skills across business, creative, and technical domains.</h2>
          </div>
          <div className={styles.experienceGrid}>
            {skills.map((s, i) => (
              <div key={i} className={styles.experienceItem} data-reveal>
                <span className={`${styles.experienceNum} mono`}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.experienceName}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className={`section ${styles.milestones}`} aria-labelledby="milestones-heading">
        <div className="container">
          <div className={styles.sectionHeader} data-reveal>
            <span className="eyebrow">05 · MILESTONES</span>
            <h2 id="milestones-heading" className={styles.sectionHeading}>The path — from polytechnic to practice.</h2>
          </div>
          <div className={styles.milestonesGrid} data-reveal>
            {milestones.map((m, i) => (
              <div key={i} className={styles.milestoneItem}>
                <span className={`${styles.milestoneYear} mono`}>{m.year}</span>
                <div className={styles.milestoneContent}>
                  <h3 className={styles.milestoneTitle}>{m.title}</h3>
                  {m.detail && <p className={styles.milestoneDetail}>{m.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
