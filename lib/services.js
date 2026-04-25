export const SERVICES = [
  {
    slug: "muhasebe-mali-isler-yonetimi",
    title: "Muhasebe ve mali işler yönetimi",
    icon: "icon-coin-chair",
    summary:
      "İzmir’deki işletmeniz için defter tutma, belge düzeni ve dönem sonu işlemleri; düzenli, kontrollü ve şeffaf mali süreç yönetimi.",
  },
  {
    slug: "vergi-danismanligi-beyanname",
    title: "Vergi danışmanlığı ve beyanname",
    icon: "icon-hand-tick",
    summary:
      "İzmir’de KDV, muhtasar, geçici, kurumlar/gelir süreçlerinde mevzuata uyum; risk azaltma ve zamanında bildirim yönetimi.",
  },
  {
    slug: "bordrolama-sgk",
    title: "Bordrolama ve SGK işlemleri",
    icon: "icon-hand-house",
    summary:
      "İzmir’de işveren yükümlülükleri, teşvikler, işe giriş/çıkış ve bordro hesapları; düzenli takip ve bilgilendirme.",
  },
  {
    slug: "finansal-raporlama",
    title: "Finansal raporlama",
    icon: "icon-text-search",
    summary:
      "İzmir’de karar alma süreçleri için bilanço/gelir tablosu ve yönetim raporları; ölçülebilir, anlaşılır ve zamanında raporlama.",
  },
  {
    slug: "kdv-iade",
    title: "KDV iade süreç yönetimi",
    icon: "icon-education",
    summary:
      "İzmir’de ihracat, iade doğuran işlemler ve mahsup/nakden iade süreçlerinde liste/evrak hazırlığı ve süreç takibi.",
  },
  {
    slug: "yurt-disi-dijital-vergi-stratejileri",
    title: "Yurt Dışı Dijital Vergi Stratejileri",
    icon: "icon-rocket",
    summary:
      "Yurt dışında gelir elde eden yazılımcılar, freelancerlar ve dijital girişimciler için agresif ama mevzuata uygun vergi stratejileri: gelir modelinden maksimum fayda çıkarma, çifte vergilendirme yönetimi ve yapısal optimizasyon.",
  },
];

export function getServiceHref(slug) {
  return `/hizmetlerimiz/${slug}`;
}

