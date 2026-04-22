/** Ana menü — Türkçe etiketler, mevcut rota yapısı korunur. */
export const SITE_NAV = [
  {
    key: "home",
    label: "Ana Sayfa",
    href: "/",
  },
  {
    key: "services",
    label: "Hizmetler",
    children: [
      { label: "Muhasebe ve mali işler", href: "/hizmetlerimiz/muhasebe-mali-isler-yonetimi" },
      { label: "Vergi ve beyanname", href: "/hizmetlerimiz/vergi-danismanligi-beyanname" },
      { label: "Bordrolama ve SGK", href: "/hizmetlerimiz/bordrolama-sgk" },
      { label: "Finansal raporlama", href: "/hizmetlerimiz/finansal-raporlama" },
      { label: "KDV iade", href: "/hizmetlerimiz/kdv-iade" },
    ],
  },
  {
    key: "about",
    label: "Hakkımızda",
    href: "/about/about-one",
  },
  {
    key: "blog",
    label: "Blog",
    href: "/blog",
  },
  {
    key: "contact",
    label: "İletişim",
    href: "/iletisim",
  },
];
