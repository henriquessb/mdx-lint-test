import * as mdx from 'eslint-mdx';

export default [
  {
    files: ['docs/**/*.md', 'docs/**/*.mdx'],
    plugins: { mdx },
    extends: ['plugin:mdx/recommended'],
  },
];