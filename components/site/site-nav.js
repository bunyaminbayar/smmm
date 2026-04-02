/** Statik HTML menüsüyle aynı URL yapısı */
export const SITE_NAV = [
  {
    key: "home",
    label: "Home",
    children: [
      { label: "Payment Solution", href: "/", active: true },
      { label: "Financial Planning", href: "/homepages/home2" },
      { label: "Online Banking", href: "/homepages/home3" },
      { label: "Personal Finance", href: "/homepages/home4" },
      { label: "Cryptocurrency Financial", href: "/homepages/home5" },
      { label: "Blockchain", href: "/homepages/home6" },
    ],
  },
  {
    key: "about",
    label: "About",
    children: [
      { label: "About Style 1", href: "/about/about-one" },
      { label: "About Style 2", href: "/about/about-two" },
    ],
  },
  {
    key: "services",
    label: "Services",
    children: [
      { label: "Service Style 1", href: "/service/service-one" },
      { label: "Service Style 2", href: "/service/service-two" },
      { label: "Services Detail", href: "/service/service-detail" },
    ],
  },
  {
    key: "case",
    label: "Case Studies",
    children: [
      { label: "Case Studies 1", href: "/case-studies/case-studies-one" },
      { label: "Case Studies 2", href: "/case-studies/case-studies-two" },
      { label: "Case Studies Detail", href: "/case-studies/detail" },
    ],
  },
  {
    key: "pages",
    label: "Pages",
    children: [
      { label: "FAQs", href: "/pages/faqs" },
      { label: "Pricing", href: "/pages/pricing" },
      { label: "Partners", href: "/pages/partners" },
    ],
  },
  {
    key: "blog",
    label: "Blog",
    children: [
      { label: "Blog List 1", href: "/blog/blog-list-one" },
      { label: "Blog List 2", href: "/blog/blog-list-two" },
      { label: "Blog Grid", href: "/blog/blog-grid" },
      { label: "Blog Detail 1", href: "/blog/blog-detail-one" },
      { label: "Blog Detail 2", href: "/blog/blog-detail-two" },
    ],
  },
  {
    key: "contact",
    label: "Contact",
    children: [
      { label: "Contact Style 1", href: "/contact-one" },
      { label: "Contact Style 2", href: "/contact-two" },
    ],
  },
];
