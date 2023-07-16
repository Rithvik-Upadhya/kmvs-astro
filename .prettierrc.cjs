module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        astroAllowShorthand: true,
        tabWidth: 4,
        useTabs: true,
        semi: true,
        singleQuote: true,
        quoteProps: "consistent",
        jsxSingleQuote: true,
        trailingComma: "es5",
        bracketSpacing: true,
        bracketSameLine: true,
        jsxBracketSameLine: true,
        arrowParens: "avoid",
        embeddedLanguageFormatting: "auto",
      },
    },
  ],
};
