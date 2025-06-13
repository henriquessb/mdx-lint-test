const mdx = require('eslint-mdx');

module.exports = [
  {
    files: ['docs/**/*.md', 'docs/**/*.mdx'],
    plugins: { mdx },
    extends: ['plugin:mdx/recommended'],
  },
];