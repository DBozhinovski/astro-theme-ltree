// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  rules: {
    tabWidth: 2,
    printWidth: 120,
    useTabs: false,
    semi: true,
    trailingComma: "all",
    singleQuote: true,
    bracketSpacing: true,
    jsxBracketSameLine: false,
    proseWrap: "always",
    "prefer-template": 2,
    "no-var": 2,
  },
};
