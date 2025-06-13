import * as mdx from 'eslint-mdx';

export default [
  mdx(),
  {
    files: ['docs/**/*.md', 'docs/**/*.mdx'],
    plugins: { mdx },
    extends: ['plugin:mdx/recommended'],
  },
];