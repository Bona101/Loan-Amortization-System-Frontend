import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
//pwa
import { VitePWA } from "vite-plugin-pwa";
//tanstack
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
