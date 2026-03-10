const { defineConfig } = require('vite');

module.exports = defineConfig({
  resolve: {
    alias: {
      '@axe-core/react': require.resolve('@axe-core/react'),
    },
  },
  plugins: [
    {
      name: 'raw-md-loader',
      transform(code, id) {
        if (id.endsWith('.md')) {
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
  ],
});
