import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@google/model-viewer', 'three'],
  },
  build: {
    outDir: "dist"
  },
  server: {
    host:"0.0.0.0",
    port:3000, // Port pro front-end vývojový server
    strictPort: true,
    hmr: {
      clientPort: 443 // Run the websocket server on the SSL port
    },
    proxy: {
      '/send-email': {
        target: 'http://localhost:3001', // Předpokládaná adresa a port backendového serveru
        changeOrigin: true,
      },
    }
  }
});
