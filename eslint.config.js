import mdxPlugin from 'eslint-plugin-mdx';
import mdxRecommended from 'eslint-plugin-mdx/configs/recommended.ts';


export default [
  ...mdxRecommended,
  {
    files: ['docs/**/*.md', 'docs/**/*.mdx'],
    plugins: { mdx: mdxPlugin }
  },
];