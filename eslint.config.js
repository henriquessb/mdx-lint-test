import * as mdxPlugin from 'eslint-plugin-mdx';


export default [
  ...mdxPlugin.configs.recommended,
  {
    files: ['docs/**/*.md', 'docs/**/*.mdx'],
    plugins: { mdx: mdxPlugin }
  },
];