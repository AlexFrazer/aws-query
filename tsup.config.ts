import { defineConfig } from "tsup";
import { globSync } from "glob";

const entryPoints = globSync("./packages/**/src");
console.log(entryPoints);

export default defineConfig({
  entry: entryPoints,
  dts: true,
});
