module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    trailingComma: "none",
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    printWidth: 100,
    bracketSameLine: true,
    jsxSingleQuote: false,
    tailwindConfig: './tailwind.config.js'
};
