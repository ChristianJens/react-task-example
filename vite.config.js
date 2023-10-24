import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Poniedo la configuracion para despliegue
  // base: '/https://github.com/ChristianJens/react-tasks-deploy/',
  // base: "/react-task-example/",
});
