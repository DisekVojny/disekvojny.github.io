import path from "path"
 
import solid from 'vite-plugin-solid';
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  }
})