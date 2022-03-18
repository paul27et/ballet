import * as path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/',
  build: {
		target: "esnext",
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
