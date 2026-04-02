import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.intro,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
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
      <body className="__className_aaf875">{children}</body>
    </html>
  );
}
