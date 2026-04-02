import { siteConfig } from "@/lib/site-config";
import {
  BLOG_DETAIL_SLUGS,
  getChangeFrequency,
  getPathPriority,
  SERVICE_DETAIL_SLUGS,
  STATIC_PATHS,
} from "@/lib/seo-routes";

/** @returns {import("next").MetadataRoute.Sitemap} */
export default function sitemap() {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const entries = [];

  for (const path of STATIC_PATHS) {
    entries.push({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: getChangeFrequency(path),
      priority: getPathPriority(path),
    });
  }

  for (const slug of BLOG_DETAIL_SLUGS) {
    const path = `/blog/blog-detail-one/${slug}`;
    entries.push({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  for (const slug of SERVICE_DETAIL_SLUGS) {
    const path = `/service/service-detail/${slug}`;
    entries.push({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }

  return entries;
}
