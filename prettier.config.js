module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 120,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  importOrderSeparation: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderSortSpecifiers: true,
  tailwindFunctions: ['cn', 'cva'],
  // importOrder: ['^@core/(.*)$', '<THIRD_PARTY_MODULES>', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports'],
};
