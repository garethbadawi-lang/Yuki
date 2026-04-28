import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/photos",
    "/movies",
    "/categories",
    "/rates",
    "/booking",
    "/faq",
    "/contact",
    "/login",
    "/register",
    "/members",
    "/account",
    "/terms",
    "/privacy",
    "/dmca",
    "/report",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
