import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      external: ["react"],
      input: {
        app: "./src/bundled.jsx",
      },
      output: {
        sourcemap: false,
        entryFileNames: `constructorio-ui-quiz-bundled.js`,
      },
    },
  },
});
