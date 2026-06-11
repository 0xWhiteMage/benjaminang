import type { Metadata } from "next";
import { site } from "@/lib/site";
import { AboutPageClient } from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description: `How a motion designer's work widened into companies, films, products and ideas — and the throughline beneath it all: understanding complex systems, and bringing out the best in them.`,
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

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <AboutPageClient />
    </>
  );
}
