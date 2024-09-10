export default [
  {
    ignores: ["dist/*", "node_modules/*", "package.json", "tsconfig.json"],
    files: ["*.js", "*.ts", "*.vue"],
    rules: {
      "no-redeclare": "off",
      "vue/html-self-closing": "off",
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
]
