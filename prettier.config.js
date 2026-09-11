/** @type {import('prettier').Config} */
module.exports = {
  // Basic formatting
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  endOfLine: "lf",

  // JSX/React specific
  jsxSingleQuote: false,

  // Plugin support
  plugins: ["prettier-plugin-tailwindcss"],

  // Override for specific file types
  overrides: [
    {
      files: "*.md",
      options: {
        printWidth: 80,
        proseWrap: "always",
      },
    },
    {
      files: "*.json",
      options: {
        printWidth: 80,
        tabWidth: 2,
      },
    },
  ],
};
