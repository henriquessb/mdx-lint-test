const mdx = require('eslint-mdx');

module.exports = [
  mdx(),
  {
    files: ['docs/**/*.md', 'docs/**/*.mdx'],
    plugins: { mdx },
    extends: ['plugin:mdx/recommended'],
  },
];