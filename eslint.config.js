import mdxPlugin from 'eslint-plugin-mdx';


export default [
  {
    files: ['docs/**/*.md', 'docs/**/*.mdx'],
    plugins: { mdx: mdxPlugin },
    languageOptions: {
      parser: mdxPlugin.parsers['mdx'],
    }
  },
];