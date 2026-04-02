import { siteConfig } from "@/lib/site-config";

/** @returns {import("next").MetadataRoute.Robots} */
export default function robots() {
  const base = siteConfig.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
