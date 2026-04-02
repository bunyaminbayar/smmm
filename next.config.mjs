import { LEGACY_PATHS_TO_HOME } from "./lib/legacy-home-redirects.mjs";

/** Eski WordPress URL’leri (slash’lı / slash’sız) ana sayfaya — LEGACY_PATHS_TO_HOME ile yönetilir */
function legacyWordPressRedirectsToHome() {
  const out = [];
  for (const path of LEGACY_PATHS_TO_HOME) {
    const base = `/${path}`;
    out.push(
      { source: base, destination: "/", permanent: true },
      { source: `${base}/`, destination: "/", permanent: true },
    );
  }
  return out;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...legacyWordPressRedirectsToHome(),
      {
        source: "/contact/contact-one",
        destination: "/contact-one",
        permanent: false,
      },
      {
        source: "/contact/contact-two",
        destination: "/contact-two",
        permanent: false,
      },
      {
        source: "/favicon.ico",
        destination: "/images/favicon/favicon.ico",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
