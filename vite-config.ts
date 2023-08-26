import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "src/bin/www",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
} as const);
