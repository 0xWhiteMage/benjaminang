export const site = {
  name: "Benjamin Ang",
  initials: "BA",
  tagline: "Creative Entrepreneur · Creative Direction · Storytelling",
  description:
    "Creative entrepreneur working at the intersection of storytelling, creative direction, and emerging tools. 10+ years building studios and shipping campaigns. Now exploring creative technology, human-centred AI workflows, Web3, and education.",
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
