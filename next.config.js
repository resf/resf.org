/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy({
  customDomain: "https://img.resf.workers.dev",
})({
  reactStrictMode: true,
  swcMinify: true,
  i18n,
});
