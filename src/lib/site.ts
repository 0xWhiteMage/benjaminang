export const site = {
  name: "Benjamin Ang",
  initials: "BA",
  tagline: "Creative Technologist, Designer & Founder",
  description:
    "Singapore-based creative technologist, entrepreneur, motion designer and filmmaker. He builds and leads creative companies, directs motion and brand films, and designs products, tools and AI-driven experiences at the intersection of creativity, technology and systems.",
  url: "https://benjaminang.tv",
  email: "hello@benjaminang.tv",
  location: "Singapore",
  timezone: "GMT+8",
  social: {
    linkedin: "https://www.linkedin.com/in/angbenjamin/",
    instagram: "https://www.instagram.com/benjaminang.tv",
  },
} as const;

export type Site = typeof site;
