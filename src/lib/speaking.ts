export type SpeakingTopic = {
  index: string;
  title: string;
  description: string;
};

export const speakingTopics: SpeakingTopic[] = [
  {
    index: "01",
    title: "Strategy",
    description:
      "Business · Sales & Marketing · Positioning · Content · Outreach & Publicity",
  },
  {
    index: "02",
    title: "Business",
    description:
      "Stages · Productivity · Finances · Budgeting · Hiring and Firing",
  },
  {
    index: "03",
    title: "Communication",
    description:
      "Empathise · Empower · Enforce · Negotiate",
  },
  {
    index: "04",
    title: "Creative",
    description:
      "Problem-solving · Value-adding · Optimising",
  },
  {
    index: "05",
    title: "Leadership",
    description:
      "Creative teams · Culture · Hiring · Feedback loops · Studio philosophy",
  },
  {
    index: "06",
    title: "AI in Creative",
    description:
      "Tools · Workflow · Human-in-the-loop · Master's thesis research",
  },
];

export type Engagement = {
  org: string;
  initials: string;
  city: string;
  country: string;
  year: number;
  role: string;
  url?: string;
  image?: { src: string; alt: string; width: number; height: number };
};

export const engagements: Engagement[] = [
  {
    org: "Graphika Manila",
    initials: "GM",
    city: "Manila",
    country: "Philippines",
    year: 2017,
    role: "Guest Speaker & Design Sponsor",
    url: "https://www.graphikamanila.com/",
    image: {
      src: "/speaking/graphika-01.webp",
      alt: "On stage at Graphika Manila, 2017.",
      width: 2048,
      height: 1365,
    },
  },
  {
    org: "Nanyang Polytechnic",
    initials: "NP",
    city: "Singapore",
    country: "Singapore",
    year: 2017,
    role: "Guest Speaker · SIDM Alumni · IDM Day",
  },
  {
    org: "Halography Vietnam",
    initials: "HV",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    year: 2018,
    role: "Guest Speaker",
    url: "https://vietnamhalography.com/",
    image: {
      src: "/speaking/halography-01.webp",
      alt: "On stage at Halography Vietnam, 2018.",
      width: 2048,
      height: 1365,
    },
  },
  {
    org: "The Futur",
    initials: "TF",
    city: "Online",
    country: "Global",
    year: 2019,
    role: "Guest · YouTube channel",
    url: "https://gumlet.tv/watch/67440d5d080b60408c8d5dd8",
  },
  {
    org: "Digital Marketing Summit Asia",
    initials: "DM",
    city: "Singapore",
    country: "Singapore",
    year: 2020,
    role: "Guest Speaker",
    url: "https://gumlet.tv/watch/67440d3ac84c6b7e1048a960",
  },
  {
    org: "LASALLE College of the Arts",
    initials: "LA",
    city: "Singapore",
    country: "Singapore",
    year: 2021,
    role: "Guest Speaker",
  },
  {
    org: "MODE Summit",
    initials: "MO",
    city: "Singapore",
    country: "Singapore",
    year: 2027,
    role: "Invited Speaker",
  },
];

export const speakingPhotos: { src: string; alt: string; width: number; height: number; caption: string }[] = [
  {
    src: "/speaking/halography-01.webp",
    alt: "On stage at Halography Vietnam, 2018.",
    width: 2048,
    height: 1365,
    caption: "Halography Vietnam · 2018",
  },
  {
    src: "/speaking/halography-02.webp",
    alt: "On stage at Halography Vietnam, 2018 — keynote.",
    width: 2048,
    height: 1365,
    caption: "Halography Vietnam · 2018",
  },
  {
    src: "/speaking/graphika-01.webp",
    alt: "On stage at Graphika Manila, 2017.",
    width: 2048,
    height: 1365,
    caption: "Graphika Manila · 2017",
  },
  {
    src: "/speaking/graphika-02.webp",
    alt: "On stage at Graphika Manila, 2017 — second set.",
    width: 2048,
    height: 1365,
    caption: "Graphika Manila · 2017",
  },
  {
    src: "/speaking/halography-03.webp",
    alt: "On stage at Halography Vietnam, 2018 — wide shot.",
    width: 2048,
    height: 1365,
    caption: "Halography Vietnam · 2018",
  },
];

export const testimonial = {
  quote:
    "Benjamin brings clarity, energy, and real-world experience. His talks inspire our community to think bigger and create with intention.",
  author: "Conference organiser",
  role: "Asia creative-industry circuit",
};
