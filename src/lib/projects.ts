export type Venture =
  | "Creative Studio"
  | "Brand"
  | "Education"
  | "Web3"
  | "TBD";

export type ProjectKind = "venture" | "achievement" | "tbd";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: number;
  role: string;
  venture: Venture;
  kind: ProjectKind;
  status?: "active" | "archived" | "tbd";
  location?: string;
  url?: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: { label: string; value: string }[];
  process: { step: string; title: string; description: string; image?: { src: string; alt: string; width: number; height: number } }[];
  credits: { role: string; name: string }[];
  featured?: boolean;
  hero: { src: string; alt: string; width: number; height: number };
  gallery: { src: string; alt: string; width: number; height: number }[];
  related?: string[];
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "genesis-motion-design",
    title: "Genesis Motion Design",
    client: "Genesis Motion Design",
    year: 2015,
    role: "Founder & Creative Director",
    venture: "Creative Studio",
    kind: "venture",
    status: "active",
    location: "Singapore",
    url: "https://genesismotiondesign.com",
    summary:
      "An award-winning boutique motion design and animation studio I founded in 2015 with S$15,000 of my own savings — built to bridge the gap between Asian hustle and American playfulness.",
    challenge:
      "Having worked in both Singapore and Los Angeles, I noticed a real disparity in approach and culture between the two motion design scenes. I started Genesis to bridge that gap — and was repeatedly told it was impossible under local norms of overworking, over-competitiveness, and rigid hierarchy. That resistance is still the motivation.",
    approach:
      "Built a small, senior, cross-cultural team that blends the discipline and craft focus of one culture with the openness and creative risk-taking of the other. Took on the work the bigger shops wouldn't, then earned the bigger ones anyway.",
    outcome: [
      { label: "Founded", value: "2015" },
      { label: "Base", value: "Singapore" },
      { label: "Team", value: "15 people" },
      { label: "Revenue", value: "SGD 5M+" },
    ],
    process: [
      {
        step: "01",
        title: "Foundation",
        description:
          "Started Genesis in 2015 with S$15,000 of my own savings at age 24 — a simple idea: bring cross-cultural motion design to a regional market that wasn't asking for it yet.",
      },
      {
        step: "02",
        title: "Build",
        description:
          "Grew a small, senior team of 12. Refused the agency growth-at-all-costs model that the local industry defaulted to. Took on the work that the bigger shops wouldn't.",
      },
      {
        step: "03",
        title: "Recognition",
        description:
          "Work for Facebook, McDonald's, Disney, Riot Games, Razer, ASUS and MSI. Featured in Forbes 30 Under 30 Asia (2020), Webby Awards Nominee, W3 Awards Best of Show, idN Magazine, PauseFest Best of Fest, Adweek Talent Gallery, Art of Styleframes, Stash Magazine, and more. Proof that the model works.",
      },
    ],
    credits: [
      { role: "Founder & Creative Director", name: "Benjamin Ang" },
    ],
    featured: true,
    hero: {
      src: "/projects/genesis/hero.webp",
      alt: "Genesis Motion Design studio interior, Singapore, 2020.",
      width: 2500,
      height: 3750,
    },
    gallery: [
      { src: "/projects/genesis/01.webp", alt: "Studio interior — desk detail.", width: 2500, height: 1667 },
      { src: "/projects/genesis/02.webp", alt: "Studio interior — workspace.", width: 2500, height: 1667 },
      { src: "/projects/genesis/03.webp", alt: "Studio interior — equipment.", width: 2500, height: 1667 },
      { src: "/projects/genesis/04.webp", alt: "Studio interior — collaborative space.", width: 2500, height: 1667 },
      { src: "/projects/genesis/05.webp", alt: "Studio interior — portrait orientation.", width: 2500, height: 3750 },
      { src: "/projects/genesis/06.webp", alt: "Studio interior — wide shot.", width: 2500, height: 1667 },
      { src: "/projects/genesis/07.webp", alt: "Studio interior — workflow.", width: 2500, height: 1667 },
      { src: "/projects/genesis/08.webp", alt: "Studio interior — equipment detail.", width: 2500, height: 1667 },
      { src: "/projects/genesis/09.webp", alt: "Studio interior — portrait orientation.", width: 2500, height: 3750 },
    ],
    related: ["balance-creative"],
  },
  {
    slug: "balance-creative",
    title: "Balance Creative",
    client: "Balance Studio",
    year: 2019,
    role: "Co-founder",
    venture: "Creative Studio",
    kind: "venture",
    status: "active",
    location: "Vietnam & Singapore",
    url: "https://balancestudio.tv",
    summary:
      "An award-winning boutique video production agency I co-founded in 2018, operating across Vietnam and Singapore — partnering with agencies and brands on brand films, post-production, and Hybrid AI workflows.",
    challenge:
      "Building a production house that could credibly serve regional and global brands across two very different markets — Vietnamese production culture and Singaporean client expectations — without compromising craft or pace in either.",
    approach:
      "Bootstrapped a cross-border team built around shared craft standards, on-the-ground directors in each market, and a single creative point of view. We lean into post-production as a craft — compositing, finishing, and Hybrid AI pipelines that combine traditional technique with AI-powered realism.",
    outcome: [
      { label: "Founded", value: "2018" },
      { label: "Locations", value: "2 cities" },
      { label: "Discipline", value: "Video Production" },
      { label: "Status", value: "Active" },
    ],
    process: [
      {
        step: "01",
        title: "Foundation",
        description:
          "Co-founded Balance in 2018 from a single small office in Ho Chi Minh City — one room, a small senior team, and a single creative point of view. This is where it started.",
        image: {
          src: "/projects/balance/foundation.webp",
          alt: "The original Balance office — glass partitions, water-cooler jugs, and the plants. Small, senior, and just enough room to start.",
          width: 955,
          height: 1275,
        },
      },
      {
        step: "02",
        title: "Cross-border build",
        description:
          "Established a permanent presence in Vietnam and Singapore. Grew a network of directors, DP's, and editors across both markets and into the wider region.",
      },
      {
        step: "03",
        title: "Post & Hybrid AI",
        description:
          "Built a post-production practice that pairs traditional compositing with AI — what we call Hybrid AI — for clients who want precision and intention, not novelty.",
      },
      {
        step: "04",
        title: "Today",
        description:
          "Operates as a hybrid production house — strategy, creative direction, and full production under one roof, with a track record of work for Netflix, AIA, and other international brands.",
      },
    ],
    credits: [
      { role: "Co-founder", name: "Benjamin Ang" },
    ],
    featured: true,
    hero: {
      src: "/projects/balance/hero.jpg",
      alt: "Balance Studio — front entrance on Đường Nguyễn Du, Ho Chi Minh City.",
      width: 1280,
      height: 960,
    },
    gallery: [
      { src: "/projects/balance/05-two-sofas-office.jpg", alt: "Balance studio lounge at night — twin brown sofas with floor lamp, and the Forbes 30 Under 30 box on the shelf.", width: 1280, height: 960 },
      { src: "/projects/balance/02-team-meeting.jpg", alt: "Balance team review — Figma and After Effects running on the studio TV, awards shelf in the background.", width: 1280, height: 960 },
      { src: "/projects/balance/03-grey-sofa-office.jpg", alt: "Balance studio lounge — grey sofa with Pure Now and Hype framed posters on the wall.", width: 1280, height: 960 },
      { src: "/projects/balance/04-canon-office.jpg", alt: "The original Balance office — Canon poster, Titleist tour bag, and the awards shelf that grew over the years.", width: 1280, height: 960 },
      { src: "/projects/balance/01-business-cards.jpg", alt: "Balance Studio business cards — gold-on-black, with the 'Pure Now' QR card alongside.", width: 960, height: 1280 },
      { src: "/projects/balance/06-staircase.jpg", alt: "Staircase inside the Balance townhouse — glass treads, dark stone, and wrought-iron balustrade.", width: 960, height: 1280 },
      { src: "/projects/balance/07-conference-room.jpg", alt: "Conference room with the hand-drawn 'Howdy' mural — the second floor of the Balance townhouse.", width: 1280, height: 960 },
      { src: "/projects/balance/08-desks.jpg", alt: "Working desks at Balance — two editors at monitors, the studio's branding dashboard open in the foreground.", width: 1024, height: 1280 },
    ],
    related: ["genesis-motion-design"],
  },
  {
    slug: "creative-business-education",
    title: "Creative Business Education",
    client: "Self-initiated",
    year: 2024,
    role: "Co-founder",
    venture: "Education",
    kind: "tbd",
    status: "tbd",
    location: "Singapore",
    summary:
      "An education initiative for creative freelancers and entrepreneurs — codifying the operating playbook from a decade of running Genesis and Balance. Details to be announced.",
    challenge: "Coming soon.",
    approach: "Coming soon.",
    outcome: [
      { label: "Status", value: "In development" },
    ],
    process: [],
    credits: [
      { role: "Co-founder", name: "Benjamin Ang" },
    ],
    featured: true,
    hero: {
      src: "/projects/business-education/hero.svg",
      alt: "Creative Business Education — coming soon.",
      width: 1920,
      height: 1080,
    },
    gallery: [],
    related: [],
  },
  {
    slug: "beat-bots",
    title: "Beat Bots",
    client: "Beat Bots",
    year: 2023,
    role: "Co-founder & GTM lead",
    venture: "Web3",
    kind: "venture",
    status: "archived",
    location: "Singapore",
    url: "https://genesismotiondesign.com/case-studies/beat-bots/",
    summary:
      "A family-friendly Web3 brand with a 90s-nostalgia avatar IP — co-founded in 2023. Built and scaled the community engine from 0 to 150K+ X (Twitter) followers in 4 months, with a 15–20K-member Discord, through phased, milestone-driven campaigns.",
    challenge:
      "After a decade of motion design work, I wanted to ship something of my own — a brand, not a service. The thesis: a family-friendly, 90s-nostalgia avatar world that paired 3D character design with utility, community, and a long-term roadmap. The bet was that community and trust, not just content, would carry the brand through a brutal market.",
    approach:
      "Built and ran the GTM and community engine from zero. Defined the brand voice, visual system and character IP. Built the landing site on Webflow, prototyped a Roboverse of utility-based avatars, and operated phased, milestone-driven campaigns that grew X (Twitter) from 0 to 150K+ in 4 months and built a 15–20K-member Discord with structured roles, channels, and incentive systems. Tracked engagement rate, impressions, X→Discord funnel conversion, and AMA depth — not just follower count. Secured collaborations with Web3 projects and brands (e.g. Aftershock). Archived the project once the broader market shifted and the thesis no longer paid for itself.",
    outcome: [
      { label: "Category", value: "Web3" },
      { label: "X growth", value: "0 → 150K+ in 4 mo" },
      { label: "Discord", value: "15–20K members" },
      { label: "Status", value: "Archived" },
    ],
    process: [
      {
        step: "01",
        title: "Brand & visual system",
        description:
          "Defined the 90s-inspired visual language — colour, type, grid, and motion — for a family-friendly avatar world.",
      },
      {
        step: "02",
        title: "Community engine",
        description:
          "Built the GTM and community playbook from zero. Designed the X (Twitter) and Discord structures, roles, channels, and incentive systems before the first drop.",
      },
      {
        step: "03",
        title: "Scale & ship",
        description:
          "Operated phased, milestone-driven campaigns: 0 → 150K+ X followers and 15–20K Discord members in 4 months. Secured collaborations with Web3 projects and brands.",
      },
      {
        step: "04",
        title: "Sunset & bank the lessons",
        description:
          "Archived the project once the broader market shifted and the thesis no longer paid for itself. The community engine playbook carried into the next venture.",
      },
    ],
    credits: [
      { role: "Co-founder & GTM lead", name: "Benjamin Ang" },
    ],
    featured: false,
    hero: {
      src: "/projects/beat-bots/hero.jpg",
      alt: "Beat Bots — 90s-nostalgia Web3 avatar world set in the Roboverse.",
      width: 1792,
      height: 1024,
    },
    gallery: [],
    related: ["genesis-motion-design"],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
