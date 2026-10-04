import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const PAGES: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { path: "",                priority: 1,   changeFrequency: "monthly" },
  { path: "/imprint",        priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms",          priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: new Date("2026-10-04"),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
