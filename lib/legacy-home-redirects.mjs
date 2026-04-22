/**
 * Eski siteden (ör. public/sitemap_old.xml) gelen URL’ler → ana sayfa (`/`).
 * 301/308 ile arama motoru otoritesini korumaya yardımcı olur.
 *
 * ÖNEMLİ: İleride `app` altında bu yollardan biriyle aynı gerçek bir sayfa
 * oluşturacaksanız, o yolu bu diziden SİLİN. Aksi halde yönlendirme önce
 * çalışır ve yeni sayfa hiç görünmez.
 *
 * Kaynak: public/sitemap_old.xml (ana sayfa `/` hariç tüm eski URL’ler)
 */
export const LEGACY_PATHS_TO_HOME = [
  "vergi-danismanligi",
  "sirket-kuruluslari-ve-diger-hizmetleri",
  "mali-danismanlik-hizmetleri",
  "muhasebe-ve-mali-musavirlik-hizmetleri",
  "blog",
  "hakkimizda",
  "ticaret-sicil-gazetesi-e-imzali-onayli-sureti-nasil-alinir",
  "muhasebenin-isletmelerin-verimliligine-katkisi",
  "sahis-sirketi-kurma-adimlari",
  "category/genel",
  "author/smmbayar",
  "category/design",
  "category/layout",
];
