import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    "next-env.d.ts",
    "**/typings/**",
    "**/public/**",
    "scripts/**",
  ]),
  nextCoreWebVitals,
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
]);
