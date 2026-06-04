import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const STATIC = ["", "/work", "/about", "/speaking", "/credentials", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...STATIC.map((p) => ({
      url: `${site.url}${p}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...projects.map((p) => ({
      url: `${site.url}/work/${p.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
