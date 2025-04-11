import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import viteRollbar from "vite-plugin-rollbar";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const rollbarConfig = {
    accessToken: env.VITE_ROLLBAR_POST_ACCESS_TOKEN,
    version: "1.0.0",
    baseUrl: env.VITE_ROLLBAR_BASE_URL,
    ignoreUploadErrors: true,
    silent: true,
  };


  return {
    plugins: [svgr(), react(), tsconfigPaths(), viteRollbar(rollbarConfig)],
    server: {
      port: 3000,
    },
    build: {
      sourcemap: true,
    },
  };
});
