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
    slug: "ic-kontrol-denetim",
    title: "İç kontrol ve denetim sistemi",
    icon: "icon-gear-warning",
    summary:
      "İzmir’de işletmenizin süreç risklerini erken tespit; iç kontrol bakışıyla belge/akış düzeni ve suistimal risklerinin azaltılması.",
  },
  {
    slug: "kdv-iade",
    title: "KDV iade süreç yönetimi",
    icon: "icon-education",
    summary:
      "İzmir’de ihracat, iade doğuran işlemler ve mahsup/nakden iade süreçlerinde liste/evrak hazırlığı ve süreç takibi.",
  },
];

export function getServiceHref(slug) {
  return `/hizmetlerimiz/${slug}`;
}

