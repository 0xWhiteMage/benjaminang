import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ReducedMotionProvider } from "@/components/reduced-motion-provider";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Benjamin Ang",
    "Creative Technologist",
    "Founder",
    "Motion Designer",
    "Singapore",
    "Genesis Motion Design",
    "Brand Film",
    "AI Creative Automation",
    "Systems Thinking",
    "Creative Business Speaker",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og/default.png"],
    creator: "@benjaminang",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: site.url,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Creative Technologist, Founder & Motion Designer",
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Singapore", addressCountry: "SG" },
  knowsAbout: [
    "Creative Technology",
    "Motion Design",
    "Creative Direction",
    "Systems Thinking",
    "AI Creative Automation",
    "Brand Films",
    "Creative Business Strategy",
  ],
  sameAs: [
    "https://www.linkedin.com/in/angbenjamin/",
    "https://www.instagram.com/benjaminang.tv",
  ],
  worksFor: { "@type": "Organization", name: "Genesis Motion Design" },
  award: "Forbes 30 Under 30 Asia (2020)",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Genesis Motion Design",
  url: site.url,
  founder: { "@type": "Person", name: site.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var saved = localStorage.getItem('ba-rm');
                  var sys = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                  var on = saved ? saved === 'on' : sys;
                  if (on) document.documentElement.setAttribute('data-rm','on');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ReducedMotionProvider>
          <SiteHeader />
          <main id="main">
            <RevealOnScroll />
            {children}
          </main>
          <SiteFooter />
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
