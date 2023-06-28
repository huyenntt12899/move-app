import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //config for using env variable
  define: {
    "process.env": process.env,
  },
});
