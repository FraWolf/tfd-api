import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  target: 'es2022',
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  dts: true,
  outDir: "dist",
});
