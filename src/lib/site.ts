export const site = {
  name: "Benjamin Ang",
  initials: "BA",
  tagline: "Creative Director · Motion Designer · Singapore",
  description:
    "Singapore-based Creative Director, Motion Designer and Creative Business Strategist. Director of brand films, motion campaigns and visual experiences for global brands. Founder of Genesis.",
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
