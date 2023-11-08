import { defineConfig } from "tsup";

export default defineConfig({
  name: "AWSQueryProvider",
  entry: ["./src"],
  outDir: "./dist",
  dts: true,
  minify: true,
  format: ["cjs", "esm", "iife"],
  treeshake: true,
  metafile: true,
  clean: true,
});
