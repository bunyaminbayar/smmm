/**
 * Sitemap ve SEO için site içi yollar — yeni sayfa eklenince burayı güncelleyin.
 */

/** Dinamik [slug] dışındaki tüm sayfa yolları */
export const STATIC_PATHS = [
  "/",
  "/about/about-one",
  "/about/about-two",
  "/blog/blog-detail-one",
  "/blog/blog-detail-two",
  "/blog/blog-grid",
  "/blog/blog-list-one",
  "/blog/blog-list-two",
  "/case-studies/case-studies-one",
  "/case-studies/case-studies-two",
  "/case-studies/detail",
  "/contact-one",
  "/contact-two",
  "/contact/contact-one",
  "/contact/contact-two",
  "/homepages/home2",
  "/homepages/home3",
  "/homepages/home4",
  "/homepages/home5",
  "/homepages/home6",
  "/pages/faqs",
  "/pages/partners",
  "/pages/pricing",
  "/service/service-detail",
  "/service/service-one",
  "/service/service-two",
];

export const BLOG_DETAIL_SLUGS = [
  "investment-opportunities-explore-options",
  "credit-card-management-use-wisely",
  "savings-strategies-strong-foundation",
];

export const SERVICE_DETAIL_SLUGS = [
  "muhasebe-ve-finansal-raporlama",
  "vergi-danismanligi-ve-beyanname",
  "sgk-ve-is-hukuku-destegi",
  "sirket-kurulusu-ve-tasfiye",
  "denetim-ve-ic-kontrol",
  "egitim-ve-mevzuat-guncellemeleri",
];

/** Ana sayfa ve önemli giriş sayfaları için öncelik ipuçları */
export function getPathPriority(path) {
  if (path === "/") return 1;
  if (
    path.startsWith("/service/service-one") ||
    path.startsWith("/contact/contact") ||
    path.startsWith("/about/about-one")
  ) {
    return 0.9;
  }
  if (path.includes("/service/service-detail")) return 0.85;
  if (path.includes("/blog/")) return 0.75;
  return 0.7;
}

export function getChangeFrequency(path) {
  if (path === "/") return "weekly";
  if (path.includes("/blog/")) return "monthly";
  if (path.includes("/homepages/")) return "yearly";
  return "monthly";
}
