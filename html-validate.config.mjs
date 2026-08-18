import { defineFlatConfig } from "html-validate";
import html5 from "html-validate/elements/html5";
import { a11y, prettier, recommended } from "html-validate/presets";

export default defineFlatConfig([
  { ignores: ["**/coverage/**", "**/dist/**", "**/node_modules/**"] },
  { files: ["*.html"], elements: [html5], ...recommended },
  { files: ["*.html"], ...a11y },
  {
    files: ["*.html"],
    ...prettier,
    rules: { ...prettier.rules, "no-self-closing": "off" },
  },
]);
