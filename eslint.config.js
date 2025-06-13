import mdxPlugin from 'eslint-plugin-mdx';
import mdxRecommended from 'eslint-plugin-mdx/configs/recommended.js';


export default [
  ...mdxRecommended,
  {
    files: ['docs/**/*.md', 'docs/**/*.mdx'],
    plugins: { mdx: mdxPlugin }
  },
];