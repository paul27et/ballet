import * as path from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from "vite-plugin-singlefile";
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin(), viteSingleFile()],
  build: {
		target: "esnext",
		assetsInlineLimit: 100000000,
		chunkSizeWarningLimit: 100000000,
		cssCodeSplit: false,
		brotliSize: false,
		rollupOptions: {
			inlineDynamicImports: true,
			output: {
				manualChunks: () => "everything.js",
			},
		},
	},
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      database: path.resolve(__dirname, './src/database'),
      interfaces: path.resolve(__dirname, './src/interfaces'),
    }
  }
});
