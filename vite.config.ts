import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import styleX from "vite-plugin-stylex";

//https://remix.run/docs/en/main/future/vite#setup-vite
installGlobals();

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
    }),
    tsconfigPaths(),
    styleX(),
  ],
});
