import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";

export default defineConfig([
  {
    ignores: ["**/coverage/**", "**/dist/**", "**/node_modules/**"],
    linterOptions: {
      reportUnusedDisableDirectives: "error",
      reportUnusedInlineConfigs: "error",
    },
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    extends: [
      eslint.configs.recommended,
      security.configs.recommended,
      sonarjs.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    files: ["apps/backend/**/*.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ["apps/frontend/src/**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  {
    files: ["**/*.config.{js,mjs,cjs}", "eslint.config.mjs"],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
