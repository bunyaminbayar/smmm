import "./globals.css";
import JsonLd from "@/components/site/JsonLd";
import { siteConfig } from "@/lib/site-config";

const ogImage = "/images/smm-nurettin-bayar-yatay-logo.png";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.intro,
  keywords: [
    "SMMM",
    "mali müşavir",
    "muhasebe",
    "İzmir",
    "Çiğli",
    "vergi danışmanlığı",
    "serbest muhasebeci",
    "Nurettin Bayar",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.intro,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.intro,
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico" },
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
  },
  manifest: "/images/favicon/site.webmanifest",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="/css/82b6793241c718d6.css" />
        <link rel="stylesheet" href="/css/6a06c721d3d9652c.css" />
        <link rel="stylesheet" href="/css/73c00cd95dc66651.css" />
      </head>
      <body className="__className_aaf875">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
