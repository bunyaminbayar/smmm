/** Ana menü — Türkçe etiketler, mevcut rota yapısı korunur. */
export const SITE_NAV = [
  {
    key: "home",
    label: "Ana Sayfa",
    children: [{ label: "Ana Sayfa", href: "/", active: true }],
  },
  {
    key: "about",
    label: "Kurumsal",
    children: [
      { label: "Hakkımızda", href: "/about/about-one" },
      { label: "Vizyon ve Misyon", href: "/about/about-two" },
    ],
  },
  {
    key: "services",
    label: "Hizmetlerimiz",
    children: [
      { label: "Hizmet Özeti", href: "/service/service-one" },
      { label: "Hizmet Alanları", href: "/service/service-two" },
      { label: "Hizmet Detayları", href: "/service/service-detail" },
    ],
  },
  {
    key: "blog",
    label: "Güncel",
    children: [
      { label: "Makaleler", href: "/blog/blog-list-one" },
      { label: "Yazı Arşivi", href: "/blog/blog-grid" },
    ],
  },
  {
    key: "pages",
    label: "Bilgi Bankası",
    children: [
      { label: "Sık Sorulan Sorular", href: "/pages/faqs" },
      { label: "Fiyatlandırma", href: "/pages/pricing" },
    ],
  },
  {
    key: "contact",
    label: "İletişim",
    children: [
      { label: "İletişim", href: "/contact/contact-one" },
      { label: "İletişim (Alternatif)", href: "/contact/contact-two" },
    ],
  },
];
