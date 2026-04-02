/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
