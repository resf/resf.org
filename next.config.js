/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const { loadEnvConfig } = require("@next/env");

// Load environment variables from .env.local
loadEnvConfig("./", process.env.NODE_ENV !== "production");

const resf_api_baseurl = process.env.NEXT_PUBLIC_RESF_API;

if (!resf_api_baseurl) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_RESF_API");
}

console.log("API Base Url", resf_api_baseurl);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};

module.exports = nextConfig;
