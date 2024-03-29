import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJsPlugin({
    styleId: 'cio-quizzes-styles'
  })],
  build: {
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: {
        app: "./src/bundled.jsx",
      },
      output: {
        entryFileNames: `constructorio-ui-quizzes-bundled.js`,
      },
    },
  },
});
