/**
 * Resmi alan adı ve iletişim — güncellemeler için tek kaynak.
 * Telefon: Google İşletme Profilinizdeki numarayı phoneDisplay / phoneTel ile ekleyin.
 */
export const siteConfig = {
  name: "SMMM Nurettin Bayar",
  shortName: "Nurettin Bayar",
  tagline: "Serbest Muhasebeci Mali Müşavir",
  url: "https://smmmbayar.com",
  email: "info@smmmbayar.com",

  /** Görünen metin */
  phoneDisplay: "+90 535 799 46 64",
  /** tel: / WhatsApp için uluslararası format (+ ile) */
  phoneTel: "+905357994664",
  /**
   * wa.me yalnızca rakamlar ister (ülke kodu + numara, başında + yok)
   * @see https://wa.me/905357994664
   */
  whatsappDigits: "905357994664",
  whatsappMessage:
    "Selam ben size web siteniz üzerinden ulaşmaktayım. Yardımcı olurmusunuz.",

  address: {
    /** OpenStreetMap ters geokodlamaya göre (Google Harita pini ile uyumlu) */
    full: "8914. Sokak, Balatçık Mahallesi, Çiğli, İzmir 35620, Türkiye",
    short: "Balatçık Mah., Çiğli / İzmir",
  },

  maps: {
    shortUrl: "https://maps.app.goo.gl/YokYVGazVVXVAMxs9",
    placeUrl:
      "https://www.google.com/maps/place/SMMM+N%C3%9CRETT%C4%B0N+BAYAR/@38.5076199,27.0400152,17z/",
    embedUrl:
      "https://maps.google.com/maps?q=38.5076199,27.0400152&hl=tr&z=17&output=embed",
    lat: 38.5076199,
    lng: 27.0400152,
  },

  intro:
    "İzmir Çiğli’de faaliyet gösteren Serbest Muhasebeci Mali Müşavirlik bürosu. Muhasebe, vergi uyumu, danışmanlık ve işletme süreçlerinde yanınızdayız.",

  /** Ana sayfa ve üst şeritte bölge vurgusu (İstanbul merkezli rakiplerden ayrışmak için) */
  regionTagline: "İzmir · Çiğli — yüz yüze danışmanlık",
};
