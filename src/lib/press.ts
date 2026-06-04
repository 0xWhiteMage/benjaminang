export type PressMention = {
  publication: string;
  year?: number;
  type: "Feature" | "Gallery" | "Recognition";
  detail?: string;
  url?: string;
};

export const pressMentions: PressMention[] = [
  {
    publication: "Forbes 30 Under 30 Asia",
    year: 2020,
    type: "Recognition",
    detail: "Media, Marketing & Advertising · Class of 2020",
    url: "https://www.forbes.com/30-under-30/2020/asia/media-marketing-advertising/",
  },
  {
    publication: "Webby Awards",
    year: 2019,
    type: "Recognition",
    detail: "23rd Annual · Video, Animation · Genesis Motion Design: Manifesto",
    url: "https://winners.webbyawards.com/2019/video/general-video/animation/94386/genesis-motion-design-manifesto",
  },
  {
    publication: "W3 Awards",
    year: 2019,
    type: "Recognition",
    detail: "Best in Show · Online Video · Animation",
    url: "https://www.w3award.com/winners/gallery/?event=1031&id=107148",
  },
  {
    publication: "Communicator Awards",
    year: 2020,
    type: "Recognition",
    detail: "Scoot · Active Silvers",
    url: "https://www.communicatorawards.com/",
  },
  {
    publication: "Communicator Awards",
    year: 2019,
    type: "Recognition",
    detail: "Dansaek · Under the Spell",
    url: "https://www.communicatorawards.com/",
  },
  {
    publication: "Motion Design Awards",
    year: 2020,
    type: "Recognition",
    detail: "Video of the Day · Genesis Motion Design: Manifesto",
    url: "https://www.motiondesignawards.com/project/5/genesis-motion-design-manifesto",
  },
  {
    publication: "PauseFest",
    type: "Recognition",
    detail: "Best of Fest",
  },
  {
    publication: "Pausefest",
    year: 2012,
    type: "Recognition",
    detail: "'Future' ID · Official Opener",
  },
  {
    publication: "PromaxBDA",
    year: 2011,
    type: "Recognition",
    detail: "Silver · Student Animation & Design Awards · Motion Category",
  },
  {
    publication: "Crowbar Awards Show",
    year: 2013,
    type: "Recognition",
    detail: "Bronze · Advertising Category",
  },
  {
    publication: "Crowbar Awards Show",
    year: 2011,
    type: "Recognition",
    detail: "Finalist · Art Direction Category",
  },
  {
    publication: "Crowbar Awards Show",
    year: 2011,
    type: "Recognition",
    detail: "Finalist · Props Category",
  },
  {
    publication: "MoFilm New York",
    year: 2011,
    type: "Recognition",
    detail: "Finalist",
  },
  {
    publication: "Adobe Design Achievement Awards",
    year: 2011,
    type: "Recognition",
    detail: "Semi Finalist",
  },
  {
    publication: "Adobe Design Achievement Awards",
    year: 2012,
    type: "Recognition",
    detail: "Semi Finalist",
  },
  {
    publication: "Art of Styleframes",
    type: "Feature",
    detail: "Genesis Motion Design · Editor's Index",
    url: "https://artofstyleframe.com/designers/genesis-motion-design/",
  },
  {
    publication: "Adweek Talent Gallery",
    type: "Gallery",
  },
  {
    publication: "Styleframes New York",
    type: "Gallery",
  },
  {
    publication: "Motion Served",
    type: "Gallery",
    detail: "Featured in Gallery on Behance",
  },
  {
    publication: "Entrepreneur",
    type: "Feature",
    detail: "Founder Profile · Genesis Motion Design",
    url: "https://www.entrepreneur.com/article/322794",
  },
  {
    publication: "Vulcan Post",
    type: "Feature",
    detail: "Genesis Motion Design Agency Singapore",
    url: "https://vulcanpost.com/648185/genesis-motion-design-agency-singapore/",
  },
  {
    publication: "Vulcan Post",
    year: 2020,
    type: "Feature",
    detail: "Meet the 22 S'poreans on Forbes 30 Under 30 Asia",
    url: "https://vulcanpost.com/694474/forbes-30-under-30-asia-singapore-2020/",
  },
  {
    publication: "HighSpark",
    year: 2020,
    type: "Feature",
    detail: "Forbes 30U30 on Transparency in Leadership",
    url: "https://highspark.co/benjamin-ang-forbes-30u30-startup-founder-talks-transparency-in-leadership/",
  },
  {
    publication: "Float",
    year: 2020,
    type: "Feature",
    detail: "Agency Founders Interview Series",
    url: "https://www.float.com/agency-founders/benjamin-ang/",
  },
  {
    publication: "Lianhe Zaobao 早报",
    year: 2020,
    type: "Feature",
    detail: "Singapore Mainstream Press Feature",
    url: "https://www.zaobao.com.sg/zlifestyle/culture/story20201118-1101838",
  },
  {
    publication: "Shoutout Atlanta",
    year: 2021,
    type: "Feature",
    detail: "Founder Interview · Regional Press",
    url: "https://shoutoutatlanta.com/meet-benjamin-ang-founder-director/",
  },
  {
    publication: "The Futur",
    year: 2019,
    type: "Feature",
    detail: "Guest on YouTube Channel · Creative Business",
    url: "https://gumlet.tv/watch/67440d5d080b60408c8d5dd8",
  },
  {
    publication: "Motion Designers Community",
    type: "Feature",
    detail: "Curator · Facebook Community",
  },
  {
    publication: "Status Magazine",
    type: "Feature",
    detail: "How to Keep Yourself Sane While Doing Client Projects",
    url: "http://statusmagonline.com/how-to-keep-yourself-sane-while-doing-client-projects-by-genesis-motion-design/",
  },
  {
    publication: "Juice Magazine",
    type: "Feature",
  },
  {
    publication: "Plog Magazine",
    type: "Feature",
    detail: "Cover & Special Feature · Issue 4",
  },
  {
    publication: "IdN Magazine",
    type: "Feature",
    detail: "Volume v19n2",
  },
  {
    publication: "Kult Magazine",
    type: "Feature",
    detail: "Issue 8",
  },
  {
    publication: "Vict:onary Magazine",
    type: "Feature",
    detail: "Geo/Graphics",
  },
  {
    publication: "CulturePush",
    type: "Feature",
  },
];

export const pressByType = (type: PressMention["type"]) =>
  pressMentions.filter((m) => m.type === type);
