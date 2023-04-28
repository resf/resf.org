const { i18n } = require("./next-i18next.config");
const { loadEnvConfig } = require("@next/env");

// Load environment variables from .env.local
loadEnvConfig("./", process.env.NODE_ENV !== "production");

const resf_api_baseurl = process.env.NEXT_PUBLIC_RESF_API;

if (!resf_api_baseurl) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_RESF_API");
}

console.log("API Base Url", resf_api_baseurl);

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};

module.exports = withMDX(nextConfig);
