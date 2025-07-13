import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

import nextPlugin from 'eslint-config-next';
import mdxPlugin from 'eslint-plugin-mdx';
import reactPlugin from 'eslint-plugin-react';

const eslintConfig = [
  ...nextPlugin,
  {
    plugins: { mdx: mdxPlugin, react: reactPlugin },
    rules: { 'react/prop-types': 'off' },
    settings: { react: { version: 'detect' } }
  },
  { files: ['**/*.mdx'], languageOptions: { parser: mdxPlugin.parser } }
];

export default eslintConfig;
