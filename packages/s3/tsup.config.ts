import { defineConfig } from "tsup";

export default defineConfig({
  name: "AWSQueryS3",
  entry: ["./src"],
  outDir: "./dist",
  dts: true,
  minify: true,
  format: ["cjs", "esm", "iife"],
  treeshake: true,
  metafile: true,
  clean: true,
});
