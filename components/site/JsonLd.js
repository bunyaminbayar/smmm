import { siteConfig } from "@/lib/site-config";

/** Yerel işletme + organizasyon şeması (Google zengin sonuçları) */
export default function JsonLd() {
  const { url, name, email, phoneTel, address, maps, intro } = siteConfig;

  const sameAs = [maps.placeUrl].filter(Boolean);

  const org = {
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${url}/#organization`,
    name,
    url,
    description: intro,
    email,
    telephone: phoneTel || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.full,
      addressLocality: "Çiğli",
      addressRegion: "İzmir",
      postalCode: "35620",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: maps.lat,
      longitude: maps.lng,
    },
    areaServed: {
      "@type": "City",
      name: "İzmir",
    },
  };

  if (sameAs.length) {
    org.sameAs = sameAs;
  }

  const data = {
    "@context": "https://schema.org",
    "@graph": [org],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
