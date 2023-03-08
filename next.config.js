/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/pa/script.js",
        destination: "https://plausible.io/js/script.outbound-links.js",
      },
      {
        source: "/pa/event",
        destination: "https://plausible.io/api/event",
      },
    ];
  },
  nextConfig,
};
